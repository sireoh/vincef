FROM nginx:stable-alpine

# 1. Remove the default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# 2. Copy your locally built dist folder
COPY ./dist /usr/share/nginx/html

# 3. Copy your custom nginx config (Crucial for the /resume routes)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 4. Fix permissions so Nginx can actually read the files
# This solves the 403 Forbidden error
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]