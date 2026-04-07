# GPU服务器账号配置指南

## 准备的文件

nvidia_cuda_13.1.0-devel-ubuntu24.04.tar

（docker镜像源： docker.io/nvidia/cuda:13.1.0-devel-ubuntu24.04）

nvidia_cuda_13.1.0-runtime-ubuntu24.04.tar

（docker镜像源： docker.io/nvidia/cuda:13.1.1-runtime-ubuntu24.04）

（dokcer资源:[nvidia/cuda - Docker Image](https://hub.docker.com/r/nvidia/cuda/tags)）



## 配置nvidia_cuda镜像

```bash
docker load -i nvidia_cuda_13.1.0-runtime-ubuntu24.04.tar

#（这个可替换）


```



## 查看镜像配置是否成功

```bash
docker images


```



## 先清理故障容器（若有）

```bash
docker stop cuda_container_{2..8} && docker rm cuda_container_{2..8}
```



## 1.创建4个容器的存储目录并赋权 
```bash
mkdir -p /data/cuda_container_{1..8} && chmod 777 /data/cuda_container_{1..8}
```



## 2.创建容器cuda_container_1
```bash
#注意 --name 容器名 ；source=/*/上部配置的文件夹；--gpus "device=显卡号"；/bin/bash -c ... echo 'root:密码'。（每次配置共四处需要修改）
docker run -d \
  --name cuda_container_7 \
  --restart unless-stopped \
  --cpus=50 \
  --memory=50g \
  --memory-swap=100g \
  --mount type=bind,source=/data/cuda_container_7,target=/container/data \
  --storage-opt size=700G \
  --gpus "device=6" \
  -p 2227:22 \
  nvidia/cuda:13.1.0-runtime-ubuntu24.04 \
  /bin/bash -c "apt update -y && apt install -y openssh-server sudo && mkdir -p /var/run/sshd && chmod 0755 /var/run/sshd && echo 'root:Nu6wftrm' | chpasswd && sed -i 's/^#PermitRootLogin.*/PermitRootLogin yes/' /etc/ssh/sshd_config && sed -i 's/^PasswordAuthentication.*/PasswordAuthentication yes/' /etc/ssh/sshd_config && sed -i 's/^#UsePAM.*/UsePAM yes/' /etc/ssh/sshd_config && /usr/sbin/sshd -D"
```

其余容器以此类推，调整映射端口等相关资源


## 3.查看容器是否正常运行（状态应为Up）
```
docker ps
```



## 4.验证GPU是否分配成功（以容器1为例）
```
docker exec cuda_container_1 nvidia-smi
```



## 5.放通UFW端口（若开启防火墙）
```
ufw allow 2221:2224/tcp && ufw reload
```





