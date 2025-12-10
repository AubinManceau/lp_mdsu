# Étape de base : Node
FROM node:20-alpine

WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Construire l'application uniquement pour la production
RUN npm run build

# Ports : 4173 pour preview (prod)
EXPOSE 4173

# Commande par défaut : dev ou preview selon NODE_ENV
CMD ["sh", "-c", "npm run preview"]
