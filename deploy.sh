npm run build

cd dist
git init
git checkout -B master
git add -A
git commit -m "Deploy"
git push -f https://github.com/OrangeFalcon14/OrangeFalcon14.github.io.git master:gh-pages
cd ..
