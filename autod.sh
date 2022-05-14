. ~/envs/python-mango-env.sh
yarn build
git add .
git commit -m $1
git push
scp docs/.vuepress/dist/* root@master:/opt/nginx/html/plan
echo '上传到txy success'
ssh root@master 'docker restart nginx'
echo '重启成功'
#python3 refresh_pages.py
