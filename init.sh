# 上传图片资源到nginx
scp -r res root@node:/opt/nginx/html
# 修改res文件夹名称为public
ssh root@node 'mv /opt/nginx/html/res /opt/nginx/html/public'