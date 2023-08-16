# Use una imagen oficial de Node.js como base
FROM node:14

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN yarn

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto que tu aplicación NestJS utilizará
EXPOSE 3000

# Ejecutar la aplicación
CMD ["yarn", "start"]
