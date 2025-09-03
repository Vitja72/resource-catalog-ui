# Schritt 1 - Aus den React Code  statische HTML/CSS/JS Dateien compilieren
FROM node:22-trixie-slim AS build_stage
WORKDIR /app
COPY package*.json ./
# npm clean install stellt sicher das die versionen der dependencies dem package-lock.json entsprechen. 
RUN npm ci --include=optional
COPY . .
RUN npm run build

# Schritt 2 - Einen web server konfigurieren und hinzufügen
FROM nginx:1.29.1-alpine-slim
COPY --from=build_stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]