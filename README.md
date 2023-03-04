# Configurações do Projeto

[Cypress](https://www.cypress.io/)

Requer instalação do Node.Js: https://nodejs.org/pt-br/download/

Requer que o Yarn esteja habilitado.
Yarn é o gerenciador de pacotes utilizado no projeto.
Para habilitar:
- Inicia o prompt de comando como administrador
- Execute o comando
```
$ corepack enable
```
- Verifique se o gerenciador de pacotes foi habilitado
```
$ yarn --version
```

Na pasta raiz do projeto executar o comando para adicionar o Cypress como uma dependência de desenvolvimento. 
Obs.: O comando gera uma pasta node_modules(.gitignore).
```
$ yarn add cypress -D
```

Na pasta cypress/fixtures é necessário criar um arquivo com nome "credencias" de extensão "json"(cypress/fixtures/credenciais.json) com o seguinte conteúdo:
```
{
  "web": {
    "email": "informe o seu e-mail de login na plataforma",
    "password": "informe a sua senha de login na plataforma",
    "nome": "informe o nome utilizado para criar a conta"
  },
  "api": {
    "userKey": "informe o seu User-Key da API"
  }
}
```
Obs.: necessário trocar os valores dos objetos com as suas credenciais de acesso


# Execuções e relatórios

## Cypress CLI

Executar os testes através da linha de comando.

- Execução com navegador padrão(Eletron) em handless:
```
$ yarn cypress run
```

- Execução com navegador selecionado em handless, exemplo:
```
$ yarn cypress run --browser chrome
```

Relatórios gerados no terminal e criação de evidências em vídeo e screenshot(apenas para falha) anexadas ao projeto.

## Cypress CLI com Allure Report

Executar os testes através da linha de comando com geração de relatório Allure Report.

Requer instalção e configuração de ambiente para Java 8 ou superior.

[@Shelex - Cypress Allure Plugin](https://github.com/Shelex/cypress-allure-plugin)

```
$ yarn add allure-commandline -D
$ yarn cypress run --env allure=true
$ yarn alure
$ yarn allure serve
```
Allure Report abre o navegador padrão com o relatório da execução.

Também é possível criar um servidor local para manter os históricos de execução:

```
$ yarn allure generate ./allure-results/ -o ./report-server
$ yarn add http-server -D
$ yarn http-server report/server
```

## Cypress Interface

Executar os testes pela interface gráfica do Cypress.

- Execute o comando para abrir a interface do Cypress:
```
$ yarn cypress open
```
- Aguarde a interface carregar
- Selecione a opção E2E Testing
- Selecione o navegador na qual deseja que os testes sejam executados
- Selecione a suite de testes

Relatório exibido na interface.
