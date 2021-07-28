# PUB - Petiscos:

## Dependências do projeto:
1. **Node.JS**
- Para inicializar o projeto precisamos do Node.JS instalado na máquina, entre nesse [link](https://nodejs.org/en/) e baixe a versão LTS referente ao seu sistema operacional.
- Quando terminar a instalação, confirme se ocorreu tudo bem abrindo o shell/interpretador do seu computador e digite o comando abaixo, se aparecer a versão que você instalou, então ele já está pronto para ser usado:
```
node -v
```
***
- As seguintes dependências são pacotes [npm](https://www.npmjs.com/), então precisamos inicilizá-los antes de instalar. Para isso, abra o terminal **_dentro da pasta do projeto_** e execute o seguinte:
```
npm init
```
- Ao executar o comando acima, um formulário JSON no terminal será iniciado e você deverá preenche-lo, mas você pode dar **_enter_** em campos que você não souber responder ou executar o comando anterior com **-y** para ele ser respondido automaticamente.
```
npm init -y
```
***
2. **Nodemon**
- Com o Node.JS instalado e o npm iniciado, você já pode instalar os pacotes necessários. Primeiro o Nodemon, que é uma ferramenta que reinicia o aplicativo automaticamente quando detecta uma nova mudança nos arquivos do mesmo. Ele será instalado como uma dependência de desenvolvedor:
```
npm install --save-dev nodemon
```
***
3. **Express**
- O Express é um framework que foi desenvolvido para otimizar a construção de aplicações web e API's. O comando para instalá-lo é o seguinte:
```
npm install express
```
***
4. **SQLite**
- O SQLite é a biblioteca que será usada para implementar o banco de dados do nosso projeto na linguagem SQL. Seguindo o mesmo padrão de instalação dos pacotes npm, você utiliza este comando no terminal, com o número **_3_** no final para expecificar a versão:
```
npm install sqlite3
```
***
## Execução do projeto:
- Depois de instalar todas as dependências, você já pode executá-lo e assim o servidor do app já estará rodando:
```
npm start
```
```
node ./src/server.js
```
***
- Porém, aproveitando que o Nodemon foi instalado, dentro do arquivo **_package.json_** existem alguns scripts para executar o servidor, um deles é o **_dev_**, ao executar o projeto com ele, a cada nova mudança no arquivo ele vai reiniciar o servidor automaticamente, sem precisar desligar e ligar ele a cada nova alteração:
```
npm run dev
```
***
- Outro script que tem no mesmo arquivo é o **_populate_**, com a função de popular automaticamente o seu banco de dados a partir do arquivo **_create-and-insert.js_**:
```
npm run populate
```
- Se você optar por rodar este comando, um arquivo **_db-pub.db_** será criado fora da **_src/infra_**, recomendo passar esse arquivo para dentro dela. Pode ser que no seu Visual Studio Code você tenha problemas ao tentar abrir o novo arquivo por ser do tipo **_.db_**, então para facilitar a visualização da tabela recomendo a instalação do [DB Browser](https://sqlitebrowser.org/dl/).
***
## Rotas do projeto:
