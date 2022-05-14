. ~/envs/python-mango-env.sh
yarn build
git add .
git commit -m $1
git push
mv docs/.vuepress/dist docs/.vuepress/plan
scp -r docs/.vuepress/plan root@master:/opt/nginx/html
echo '上传到txy success'
ssh root@master 'docker restart nginx'
echo '重启成功'
#python3 refresh_pages.py
