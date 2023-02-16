mkdir www/$1
cd www/$1
git init
touch .gitignore
echo ".DS_Store\ncypress.env.json\ncypress/screenshots/\ncypress/videos/\nnode_modules/" > .gitignore
touch README.md
echo "# $1\n\nTBD." > README.md
npm init -y
npm i cypress -D
touch cypress.env.json
echo "{}" > cypress.env.json
touch cypress.env.example.json
echo "{}" > cypress.env.example.json
npx cypress open