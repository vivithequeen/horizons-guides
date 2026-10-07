FROM node:22-alpine AS build
WORKDIR /app
# Chromium renders the guide PDFs at build time (scripts/build-pdfs.mjs)
RUN apk add --no-cache chromium font-noto font-noto-emoji
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
