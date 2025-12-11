<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Gérer les requêtes OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Autoriser uniquement POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Charger les variables d'environnement
$envFile = __DIR__ . '/../.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        list($key, $value) = explode('=', $line, 2);
        $_ENV[trim($key)] = trim($value);
    }
}

$BREVO_API_KEY = $_ENV['BREVO_API_KEY'] ?? '';
$BREVO_LIST_ID = $_ENV['BREVO_LIST_ID'] ?? '';

if (empty($BREVO_API_KEY) || empty($BREVO_LIST_ID)) {
    http_response_code(500);
    echo json_encode(['error' => 'Configuration serveur manquante']);
    exit;
}

// Récupérer les données du formulaire
$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'] ?? '';
$firstName = $data['firstName'] ?? '';
$lastName = $data['lastName'] ?? '';
$phone = $data['phone'] ?? '';

// Validation
if (empty($email) || empty($firstName) || empty($lastName)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email, prénom et nom sont requis']);
    exit;
}

// Préparer les données pour Brevo
$brevoData = [
    'email' => $email,
    'attributes' => [
        'FIRSTNAME' => $firstName,
        'LASTNAME' => $lastName,
        'SMS' => $phone
    ],
    'listIds' => [intval($BREVO_LIST_ID)],
    'updateEnabled' => true
];

// Appel à l'API Brevo
$ch = curl_init('https://api.brevo.com/v3/contacts');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($brevoData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'accept: application/json',
    'content-type: application/json',
    'api-key: ' . $BREVO_API_KEY
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Contact ajouté avec succès'
    ]);
} else {
    http_response_code($httpCode);
    echo json_encode([
        'error' => 'Erreur lors de l\'ajout du contact',
        'details' => json_decode($response, true)
    ]);
}
?>
