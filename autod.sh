. ~/envs/python-mango-env.sh
yarn build
git add .
git commit -m $1
git push
python3 refresh_pages.py
