FROM harbor-stdev.kbhc.co.kr/base/nginx:1.23.2

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
