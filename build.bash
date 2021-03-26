# run this script to build and deploy the webapp as a github page

# build
npm install
npm run build

# move files to pages folder
rm -r ./docs
cp -R ./public/ ./docs

# push generated files to pages folder
git add ./docs

#git commit -m "deploy page"
#git push


