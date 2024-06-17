# Dockerfile
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY app.js package.json ./

# Instala las dependencias
RUN npm install

# Expone el puerto para el servicio Express
EXPOSE 3000

# Define el comando de inicio
CMD ["node", "app.js"]
