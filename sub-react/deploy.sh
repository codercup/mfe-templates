npm run build
docker image build ./ -t sub-react:1.0.0
# docker run \
#     # 指定容器停止后的重启策略:
#     #		no：容器退出时不重启
#     #		on-failure：容器故障退出（返回值非零）时重启
#     #		always：容器退出时总是重启
#     --restart=always \
#     # 指定docker运行在后台,如果不加-d,在执行完这条命令之后
#     # 你退出命令行也会将这个docker容器退掉
#     -d \
#     # 将宿主机端口号绑定至容器端口上
#     -p 8080:80 \
#     # 指定容器暴露的端口，即修改镜像的暴露端口
#     --expose=80 \
#     # 映射宿主目录至
#     # -v /wwwroot:/usr/share/nginx/html \
#     # 指定容器名字，后续可以通过名字进行容器管理，links特性需要使用名字
#     --name=sub-react-runner \
#     # 用哪个镜像初始化这个容器
#     sub-react:1.0.0
docker stop sub-react-runner && echo 'stop success' && docker rm sub-react-runner && echo 'rm success'
docker run --restart=always -d -p 8100:80 --expose=80 --name=sub-react-runner sub-react:1.0.0 && echo 'run success'
