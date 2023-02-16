# Teste e2e Cypress 8.2.0

## Primeiro modo de Instalação Padrão

```bash
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
```

## Execução

```bash
npx cypress open
```

## Excluir arquivos de exemplo

```bash
rm cypress/integration/examples/*
```

## Segundo modo Utilizando meu script cy.sh

1. Criar um arquivo chamado cy.sh com o seguinte conteúdo:
 ```bash
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
```
2. Executar o arquivo cy.sh passando o nome do projeto como parâmetro:
```bash
./cy.sh nome_do_projeto
```
3. Executar o comando para abrir o cypress:
```bash
cd nome_do_projeto
rm cypress/integration/examples/*
npx cypress open
```

## Terceiro modo Utilizando [@bahmutov/cly](https://www.npmjs.com/package/@bahmutov/cly)


1. Criar pasta do projeto
```bash
mkdir www/nome_do_projeto
cd www/nome_do_projeto
```

2. Executar o comando para instalar o cly
```bash
npx @bahmutov/cly init  --typescript
```
3. Excluir arquivos de exemplo

```bash
rm cypress/integration/examples/*
```

## Configurando ESLint

1. Instalar o ESLint
```bash
npm i eslint@7.32.0 -D
```

2. Executar o comando para criar o arquivo de configuração do ESLint
```bash
npx eslint --init

? How would you like to use ESLint?
> To check syntax, find problems, and enforce code style

? What type of modules does your project use?
> CommonJS (require/exports)

? Which framework does your project use?
> None of these

? Does your project use TypeScript?
> No

? Where does your code run? Browser or Node
> Press <a> to select all that apply and then <enter>

? How would you like to define a style for your project? Use a popular style guide
> Anwser questions about your style

? What format do you want your config file to be in? 
> JSON

? What style of indentation do you use?
> Spaces

? What quotes do you use for strings?
> Single

? What line endings do you use?
> Unix (even if your OS is windows)

? Do you require semicolons?
> No
```

>Você pode escolher as opções que desejar, mas eu escolhi as opções acima ou se preferir basta apenas copiar as informações do .eslintrc.json abaixo e colar no seu.

Copiar o conteúdo do arquivo .eslintrc.json abaixo e colar no seu arquivo .eslintrc.json

```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-trailing-spaces": [
      "error"
    ]
  }
}
```

3. Instalar o plugin do ESLint Cypress

```bash
npm i eslint-plugin-cypress@2.11.3 -D
```
4. Criar o arquivos .eslintrc.json dentro da pasta cypress

```bash
touch cypress/.eslintrc.json
```

5. Adicionar o plugin do ESLint Cypress no arquivo .eslintrc.json

```json
{
  "extends": [
    "plugin:cypress/recommended"
  ]
}
```

>Essas informações de eslint foram retiradas do site [cypress.io](https://docs.cypress.io/guides/tooling/eslint-plugin#Installation)

# Configurando Scripts no package.json

```json
"scripts": {
"lint": "eslint cypress/**/*.js",
"lint:fix": "eslint cypress/**/*.js --fix"
}
```

## Executando o ESLint

```bash
npm run lint
```