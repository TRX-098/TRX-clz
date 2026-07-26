FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm install --production
COPY . .
RUN mkdir -p /usr/src/app/sessions /usr/src/app/temp /usr/src/app/assets
EXPOSE 3000
CMD ["node", "index.js"]
