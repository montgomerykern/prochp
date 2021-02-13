FROM node:10.16-alpine
WORKDIR /usr/src/app
COPY . .
RUN apk add graphicsmagick
RUN npm install
EXPOSE 9696
CMD ["npm", "start"]