# Déploiement Docker avec Traefik

## Architecture

Votre application utilise maintenant **2 conteneurs Docker** :

1. **lp_mdsu** : Frontend React (Node.js + serve)
2. **lp_mdsu_api** : API PHP (Apache + PHP 8.2)

Les deux sont exposés via **Traefik** avec SSL automatique.

## Configuration

### 1. Variables d'environnement

Créez un fichier `.env` à la racine du projet :

```bash
# Domaine
WEB_DOMAIN=votre-domaine.com

# Clés Brevo
BREVO_API_KEY=votre_clé_api_brevo
BREVO_LIST_ID=votre_id_liste_brevo
```

### 2. Routing Traefik

- **Frontend** : `https://votre-domaine.com/*` → Port 4173
- **API** : `https://votre-domaine.com/api/*` → Port 80 (PHP)

La priorité est configurée pour que `/api` soit routé vers le conteneur PHP.

## Déploiement

### Build et démarrage

```bash
# Build des images
docker-compose build

# Démarrer les conteneurs
docker-compose up -d

# Vérifier les logs
docker-compose logs -f
```

### Mise à jour

```bash
# Rebuild après modifications
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Vérification

### Tester l'API

```bash
curl -X POST https://votre-domaine.com/api/add-contact.php \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","firstName":"Test","lastName":"User","phone":"+33123456789"}'
```

### Logs

```bash
# Logs du frontend
docker-compose logs -f lp_mdsu

# Logs de l'API
docker-compose logs -f api

# Logs Apache (erreurs PHP)
docker exec -it lp_mdsu_api tail -f /var/log/apache2/error.log
```

## Sécurité

✅ Le fichier `.env` est monté en lecture seule  
✅ Les clés API ne sont jamais exposées au client  
✅ SSL automatique via Traefik  
✅ Le fichier `.env` est bloqué par Apache  

## Dépannage

### L'API ne répond pas

1. Vérifier que le conteneur tourne :
```bash
docker ps | grep lp_mdsu_api
```

2. Vérifier les logs Apache :
```bash
docker exec -it lp_mdsu_api cat /var/log/apache2/error.log
```

3. Tester depuis l'intérieur du conteneur :
```bash
docker exec -it lp_mdsu_api curl -X POST http://localhost/api/add-contact.php \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","firstName":"Test","lastName":"User"}'
```

### Erreur CORS

Si vous avez des erreurs CORS, vérifiez que Traefik route correctement les requêtes.

### Le formulaire ne soumet pas

1. Ouvrez la console du navigateur (F12)
2. Vérifiez l'URL appelée (doit être `/api/add-contact.php`)
3. Vérifiez la réponse du serveur

## Structure des fichiers

```
lp_mdsu/
├── Dockerfile              # Frontend React
├── Dockerfile.api          # API PHP
├── docker-compose.yml      # Configuration Docker
├── .env                    # Variables d'environnement (NE PAS COMMITTER)
├── api/
│   └── add-contact.php     # Endpoint Brevo
└── src/
    └── components/
        └── Form.jsx        # Formulaire React
```
