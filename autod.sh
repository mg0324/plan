rm -rf docs/.vuepress/dist
rm -rf docs/.vuepress/plan
yarn build
git add .
git commit -m $1
git push
mv docs/.vuepress/dist docs/.vuepress/plan
ssh root@node 'rm -rf /opt/nginx/html/plan'
scp -r docs/.vuepress/plan root@node:/opt/nginx/html
echo '上传到txy node success'
#ssh root@master 'docker restart nginx'
#echo '重启成功'
#python3 refresh_pages.py

# scp -r res/drawio root@node:/opt/nginx/html/public/