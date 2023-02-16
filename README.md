# Teste e2e Cypress 8.2.0 ❤️

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
npm run lint:fix
```

# Aplicação para testes
####Vamos utilizar o [Mailosaur](https://mailosaur.com/) para testar a aplicação de envio de e-mail.

![Mailosaur](https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/32753/full-color.png)

1. Criar uma conta no [Mailosaur](https://mailosaur.com/) um servidor ser criado automaticamente.
2.Acesse a aba API Keys e copie a API Key.
> **Obs:** Caso você prefira pode seeguir os passos a partir da documentação do [Mailosaur](https://mailosaur.com/docs/managing-your-account/api-keys/#what-are-server-api-keys)
3. Guarde os valores Server ID e API Key (clique em Reveal Key para revelar sua Key)
4. Atualize o conteúdo do arquivo cypress.env.json com o seguinte, substituindo os valores das variáveis que iniciam com MAILOSAUR_ pelos valores obtidos a partir do seu server no Mailosaur:
```json
{
  "USER_PASSWORD": "s3Cre7P@sSw0rd",
  "MAILOSAUR_SERVER_ID": "your-mailosaur-id-here",
  "MAILOSAUR_API_KEY": "your-mailosaur-api-key-here"
}
```
> **Obs:** Não precisa mudar o valor do USER_PASSWORD.
5. Atualize também o conteúdo do arquivo cypress.env.example.json com o seguinte:
```json
{
  "USER_PASSWORD": "s3Cre7P@sSw0rd",
  "MAILOSAUR_SERVER_ID": "your-mailosaur-id-here",
  "MAILOSAUR_API_KEY": "your-mailosaur-api-key-here"
}
```

> **Obs:** Neste arquivo, pode deixar os valores conforme acima. Não exponha dados sensíveis neste arquivo visto que ele será versionado. A idéia é ele ser um arquivo de exemplo, conforme seu nome sugere.
6. O Sign up depende de um email ainda não cadastrado e para isso iremos utilizar o faker. Além disso, também precisamos instalar o cypress-mailosaur. 
```bash
npm i cypress-mailosaur@2.3.3 faker@5.5.3 -D
```
7. No arquivo cypress/support/index.js, importe o cypress-mailosaur (import 'cypress-mailosaur')
8. No diretório cypress/integration/, crie um arquivo chamado signup.spec.js com o seguinte conteúdo:
9. Perceba que no teste estamos navegando para a página de Sign up pela URL relativa /signup, portanto, adicione a propriedade baseUrl ao arquivo cypress.json com o valor https://notes-serverless-app.com. Dessa forma, quando o comando cy.visit('/signup) for executado, a URL relativa de /signup será concatenada com o valor da baseUrl, resultando na visita ao endereço completo (https://notes-serverless-app.com/signup).
```json
{
  "baseUrl": "https://notes-serverless-app.com"
}
```
10. Execute o teste recém criado com o comando
```bash
npx cypress run --spec cypress/integration/signup.spec.js
```
> **Obs:** aso o teste falhe devido ao timeout default do Cypress (de 4000 milissegundos) não ser o suficiente em seu ambiente, adicione ao arquivo cypress.json a propriedade defaultCommandTimeout com um valor não maior que 30000 milissegundos). Sugiro tentar 10000, se não for o suficiente, 15000 e assim por diante.

> **Obs:** Dependendo das configurações do seu computador, ao utilizar o Cypress Runner, ou ao rodar os testes em modo headless, é possível que você se depare com o erro Cypress detected policy settings on your computer that may cause issues. Caso isso ocorra, consulte a [documentação oficial do Cypress](https://docs.cypress.io/guides/references/error-messages#Cypress-detected-policy-settings-on-your-computer-that-may-cause-issues) e analise as possíveis soluções para o seu caso específico.

## Melhorando a logica de testes

Movendo parte dos arquivo para cypress/support/commands.js

1. No arquivo arquivo cypress/support/commands.js, escreva o seguinte código:
```javascript
cypress.Commands.add('fillSignupFormAndSubmit', (email, password) => {
  cy.visit('/signup')
  cy.get('#email').type(email)
  cy.get('#password').type(password, { log: false })
  cy.get('#confirmPassword').type(password, { log: false })
  cy.contains('button', 'Signup').click()
  cy.get('#confirmationCode').should('be.visible')
})
```
2. E então, substitua todo esse código no arquivo de teste (cypress/integration/signup.spec.js) pelo comando cy.fillSignupFormAndSubmit(emailAddress, password)
3. Execute o teste com o comando npx cypress run --spec cypress/integration/signup.spec.js

> Obs: Lembre-se, siga adiante somente quando o teste estiver passando. ✅

## Testando o fluxo de login

Para o teste da funcionalidade de login, precisamos de um usuário já cadastrado. Sugiro usar um que tenha sido criado durante o teste da funcionalidade de Sign up. Você pode obter os emails cadastrados em seu server no Mailosaur.

1. Atualize o conteúdo do arquivo cypress.env.json adicionando a propriedade USER_EMAIL com o valor de um dos e-mails obtidos em seu server no Mailosaur
2. Atualize também o conteúdo do arquivo cypress.env.example.json com o seguinte:
```json
{
  "USER_EMAIL": "a-valid-email@your-mailosaur-id.mailosaur.net",
  "USER_PASSWORD": "s3Cre7P@sSw0rd",
  "MAILOSAUR_SERVER_ID": "your-mailosaur-id-here",
  "MAILOSAUR_API_KEY": "your-mailosaur-api-key-here"
}
```
> Obs.: Lembre-se, neste arquivo, pode deixar os valores conforme acima. Não exponha dados sensíveis neste arquivo visto que ele será versionado. A idéia é ele ser um arquivo de exemplo, conforme seu nome sugere.

> **Obs:** acesse o [Mailosaur](https://mailosaur.com/app/servers/) acesse o server pelo id e clique em inbox abra a ultima message e copie seu email do campo To e cole em cypress.env.json 
3. No diretório cypress/integration/, crie um arquivo chamado login.spec.js com o seguinte conteúdo:
```javascript
it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.visit('/login')
  cy.get('#email').type(Cypress.env('USER_EMAIL'))
  cy.get('#password').type(Cypress.env('USER_PASSWORD'))
  cy.contains('button', 'Login').click()

  cy.wait('@getNotes')
  cy.contains('h1', 'Your Notes').should('be.visible')
})
```
4. Execute o teste recém criado com o comando
```bash
npx cypress run --spec cypress/integration/login.spec.js
```

### Protegendo dados sensíveis

É uma boa prática em automação de testes não expor dados sensíveis em arquivos de teste, e já estamos fazendo isso com o uso de variáveis, as quais podem ser obtidas com o uso do comando Cypress.env('VARIAVEL').

Porém, quando o teste é executado em modo interativo, a senha "vaza" no log de comandos do Cypress. Teste para ver abrindo o Cypress Runner com o comando 
```bash
npx cypress open 
```
execute o teste de login e utilize a funcionalidade de time travel do Cypress para verificar a senha "vazando".

Para resolver isso, vamos utilizar o comando Cypress.env() para obter a senha e passá-la para o comando type() do Cypress.

```javascript
it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.visit('/login')
  cy.get('#email').type(Cypress.env('USER_EMAIL'))
  cy.get('#password').type(Cypress.env('USER_PASSWORD'), { log: false })
  cy.contains('button', 'Login').click()

  cy.wait('@getNotes')
  cy.contains('h1', 'Your Notes').should('be.visible')
})
```

## Melhorando a logica de testes de Login

1. No arquivo cypress/support/commands.js, crie um comando customizado chamado login, o qual recebe dois parâmetros, username e password
2. Mova os comandos de login para tal comando
3. Atualize o teste para chamar o comando customizado recém criado
4. Execute o teste após a refatoração para garantir que tudo continua funcionando
> **Sugestão:** Aproveite que o login foi abstraído para um comando customizado e defina valores default para o username e password, caso estes não sejam passados.

5. O arquivo **cypress/support/commands.js** deve ficar com o seguinte conteúdo:
```javascript
it('successfully logs in', () => {
    cy.intercept('GET', '**/notes').as('getNotes')

    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    cy.wait(10000)
    cy.contains('h1', 'Your Notes').should('be.visible')
})
````
6. A função login no arquivos **cypress/support/commands.js** deve ficar com o seguinte conteúdo:
```javascript
Cypress.Commands.add('login', (username = Cypress.env('USER_EMAIL'), password = Cypress.env('USER_PASSWORD')) => {
    cy.visit('/login')
    cy.get('#email').type(username)
    cy.get('#password').type(password, { log: false })
    cy.contains('button', 'Login').click()
})
```