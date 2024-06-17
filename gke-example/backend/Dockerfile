# Dockerfile
FROM python:3.9-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY main.py requirements.txt ./

# Instala las dependencias
RUN pip install -r requirements.txt

# Expone el puerto para el servicio Flask
EXPOSE 8080

# Define el comando de inicio
CMD ["python", "main.py"]
