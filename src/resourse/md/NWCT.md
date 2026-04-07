# 前情提要

要实现内网穿透部署虚拟机上的网站，要分析用户的访问顺序：域名->本地ip：端口->虚拟机端口。由于网络安全法规定，要求必须使用HTTPS协议才能访问内网穿透的域名，我们必须为域名配置个SSL证书才能使用https。

## SSL配置

下载[Git - Install](https://git-scm.com/install/)

打开git-bash并输入

```bash
MSYS_NO_PATHCONV=1 openssl req -x509 -nodes -days 365 \
-newkey rsa:2048 \
-keyout frp-dad.com.key \
-out frp-dad.com.crt \
-subj "/C=CN/CN=frp-dad.com:16492"
```

frp-dad.com为内网穿透域名，根据自己使用的内网穿透变更，最后一行端口为内网穿透端口。

## Nginx配置

去Nginx官网下载[nginx: download](https://nginx.org/en/download.html)

在Nginx\conf\nginx.conf中配置

```

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
error_log  logs/error.log  info;
#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    # server {
    #     listen       83;
    #     server_name  localhost;

    #     #access_log  logs/host.access.log  main;

    #     location / {
    #         root   html/plaid_com_20260202_170635;
    #         index  index.html;
    #     }

    #     #error_page  404              /404.html;

    #     # redirect server error pages to the static page /50x.html
    #     #
    #     error_page   500 502 503 504  /50x.html;
    #     location = /50x.html {
    #         root   html;
    #     }

    #     # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #     #
    #     #location ~ \.php$ {
    #     #    proxy_pass   http://127.0.0.1;
    #     #}

    #     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #     #
    #     #location ~ \.php$ {
    #     #    root           html;
    #     #    fastcgi_pass   127.0.0.1:9000;
    #     #    fastcgi_index  index.php;
    #     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #     #    include        fastcgi_params;
    #     #}

    #     # deny access to .htaccess files, if Apache's document root
    #     # concurs with nginx's one
    #     #
    #     #location ~ /\.ht {
    #     #    deny  all;
    #     #}
    # }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


        # another virtual host using mix of IP-, name-, and port-based configuration
    #
    server {
    listen 127.0.0.1:7777 ssl;#内网穿透监听的端口
    server_name frp-dad.com:16492;#内网穿透域名

    ssl_certificate      C:/nginx/ssl/frp-dad.com.crt;
    ssl_certificate_key  C:/nginx/ssl/frp-dad.com.key;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://192.168.137.134:21080;#虚拟机IP+端口
        # proxy_redirect http:// $scheme://;
        # proxy_set_header Host $host;
        # proxy_set_header X-Real-IP $remote_addr;
        # proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # proxy_set_header X-Forwarded-Proto https;
        }
    }

}





     #HTTPS server
    
```

请根据自己的域名，配置的主机端口，虚拟机IP和端口变更。

配置完成后请双击nginx.exe，可在任务管理器看是否启动，若未启动请根据nginx\logs\error.log查看报错详情。

