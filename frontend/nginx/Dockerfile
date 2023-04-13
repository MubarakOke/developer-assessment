# Build environment for the frontend
FROM node as build
WORKDIR /frontend
COPY frontend .
RUN yarn install
RUN echo "Running build command for production"
RUN GENERATE_SOURCEMAP=false npm run build

# nginx config
FROM nginx:1.19.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir -p /var/www/html

COPY --from=build /frontend/build /var/www/html
COPY frontend/nginx/nginx.conf /etc/nginx/conf.d
