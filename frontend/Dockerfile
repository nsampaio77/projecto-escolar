# frontend/Dockerfile
FROM node:20-bullseye-slim AS build     
WORKDIR /app

# Configuração de ambiente para desenvolvimento
ENV NODE_ENV=development

# cópia e instalação com todas as dependências (incluindo opcionais)
COPY package.json package-lock.json ./
RUN npm ci             

COPY . .
RUN npm run build

FROM nginx:1.24-bullseye            
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]