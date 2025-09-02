# Schritt1: Aus dem React Code statische HTML , CSS, JS Datein erstellen
FROM node:22-trixie-slim AS build_stage
WORKDIR /app
COPY package*json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

#Schritt2: Einen Webserver konfigurieren 
FROM nginx:1.29.1-alpine-slim
COPY --from=build_stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "deamon off;"]