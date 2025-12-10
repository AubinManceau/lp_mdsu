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
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Ports : 5173 pour dev, 4173 pour preview (prod)
EXPOSE 5173
EXPOSE 4173

# Commande par défaut : dev ou preview selon NODE_ENV
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run preview; else npm run dev; fi"]
