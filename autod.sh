. ~/envs/python-mango-env.sh
rm -rf docs/.vuepress/dist
rm -rf docs/.vuepress/plan
yarn build
git add .
git commit -m $1
git push
mv docs/.vuepress/dist docs/.vuepress/plan
ssh root@master 'rm -rf /opt/nginx/html/plan'
scp -r docs/.vuepress/plan root@master:/opt/nginx/html
echo '上传到txy success'
#ssh root@master 'docker restart nginx'
#echo '重启成功'
#python3 refresh_pages.py

# scp -r res/drawio root@master:/opt/nginx/html/public/drawio