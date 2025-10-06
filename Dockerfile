# Usar imagen base de Node.js 20 Alpine para un contenedor más ligero
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar todas las dependencias (incluyendo devDependencies para desarrollo)
RUN npm ci

# Copiar el código fuente
COPY . .

# Exponer el puerto 5173 (puerto por defecto de Vite)
EXPOSE 5173

# Comando para ejecutar la aplicación en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]