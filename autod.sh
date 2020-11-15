yarn build
git add .
git commit -m $1
git push
python refresh_pages.py
