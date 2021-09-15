# PUB - Petiscos:

## 🚀 Dependências do projeto:
1. **Node.JS**
- Para inicializar o projeto precisamos do Node.JS instalado na máquina, entre nesse [link](https://nodejs.org/en/) e baixe a versão LTS referente ao seu sistema operacional.
- Quando terminar a instalação, confirme se ocorreu tudo bem abrindo o shell/interpretador do seu computador e digite o comando abaixo, se aparecer a versão que você instalou, então ele já está pronto para ser usado:
```bash
node -v
```

***
- As seguintes dependências são pacotes [npm](https://www.npmjs.com/), então precisamos inicilizá-los antes de instalar. Para isso, abra o terminal **_dentro da pasta do projeto_** e execute o seguinte:
```bash
npm init
```
- Ao executar o comando acima, um formulário JSON no terminal será iniciado e você deverá preenche-lo, mas você pode dar **_enter_** em campos que você não souber responder ou executar o comando anterior com **-y** para ele ser respondido automaticamente.
```bash
npm init -y
```

***
2. **Nodemon**
- Com o Node.JS instalado e o npm iniciado, você já pode instalar os pacotes necessários. Primeiro o Nodemon, que é uma ferramenta que reinicia o aplicativo automaticamente quando detecta uma nova mudança nos arquivos do mesmo. Ele será instalado como uma dependência de desenvolvedor:
```bash
npm install --save-dev nodemon
```

***
3. **Express**
- O Express é um framework que foi desenvolvido para otimizar a construção de aplicações web e API's. O comando para instalá-lo é o seguinte:
```bash
npm install express
```

***
4. **SQLite**
- O SQLite é a biblioteca que será usada para implementar o banco de dados do nosso projeto na linguagem SQL. Seguindo o mesmo padrão de instalação dos pacotes npm, você utiliza este comando no terminal, com o número **_3_** no final para expecificar a versão:
```bash
npm install sqlite3
```

***
5. **SuperTest**
- O SuperTest é basicamente um módulo para forjar requisições com o intuito de testar webservers e verificando o retorno para automatizar os teste de web API's por exemplo. Ele também será instalado como uma dependência de desenvolvedor, então comando será:
```bash
npm install --save-dev supertest
```

***
6. **Jest**
- O Jest é um framework para testes unitários de códigos com foco em suporte para grandes aplicativos da web. Será outra dependência de desenvolvedor:
```bash
npm install --save-dev jest
```

***
7. **Cors**
- O Cors **_(Cross-Origin Resource Sharing)_** é um sistema que consiste de HTTP headers, determinando se os navegadores irão impedir o código de acessar as respostas das requisições que serão feitas. A instalação é feita da seguinte forma, no terminal do projeto:
```bash
npm install cors
```

***
## 👩🏻‍💻 Execução do projeto:
- Depois de instalar todas as dependências, você já pode executá-lo e assim o servidor do app já estará rodando:
```bash
npm start
```
```bash
node ./src/server.js
```

***
- Porém, aproveitando que o Nodemon foi instalado, dentro do arquivo **_package.json_** existem alguns scripts para executar o servidor, um deles é o **_dev_**, ao executar o projeto com ele, a cada nova mudança no arquivo ele vai reiniciar o servidor automaticamente, sem precisar desligar e ligar ele a cada nova alteração:
```bash
npm run dev
```

***
- Outro script que tem no mesmo arquivo é o **_populate_**, com a função de popular automaticamente o seu banco de dados a partir do arquivo **_create-and-insert.js_**:
```bash
npm run populate
```
- Se você optar por rodar este comando, um arquivo **_db-pub.db_** será criado fora da **_src/infra_**, recomendo passar esse arquivo para dentro dela. Pode ser que no seu Visual Studio Code você tenha problemas ao tentar abrir o novo arquivo por ser do tipo **_.db_**, então para facilitar a visualização da tabela recomendo a instalação do [DB Browser](https://sqlitebrowser.org/dl/).

***
- Caso queira experimentar os testes unitários, primeiramente verifique se no arquivo **_package.json_** existe o script **_test_** e se o seu atributo é **_jest_**:
```json
"scripts": {
    "test": "jest"
}
```
- Se houver esse script, você já pode utilizá-lo no terminal do projeto:
```bash
npm run test
```

***
## 🚄 Rotas do projeto:
- Nesse projeto foi utilizado o padrão de **_API Rest_** e as rotas consistem em duas partes: um método HTTP e um caminho para um recurso que será usado. Para esse projeto usei os métodos HTTP baseados no acrônimo **_CRUD_**, que consiste em:
> 1. **C** - Create
> 2. **R** - Read
> 3. **U** - Update
> 4. **D** - Delete

***
### Create - **POST**:
- O método POST foi projetado para solicitar que o servidor web aceite os dados anexados no corpo da mensagem de requisição para armazenamento.
- A partir de uma ferramenta para consulta de requisições ([Postman](https://www.postman.com/) e [Insomnia](https://insomnia.rest/) são as mais conhecidas), você pode consultar a API por esse e outros métodos. Nesse caso, a requisição será feita escolhendo o método POST e informando a URL **_localhost:port/petiscos_**.
- Verifique antes se o seu servidor está rodando, se não, não será possível testar esse e outros métodos. Depois de especificar a requisição, abra o **_body_** da mesma e escolha a opção **_JSON_** para inserir os dados que você quiser a partir das colunas existentes no banco. Após isso, clique em **_Send_** para mandar essa requisição:
![post](https://user-images.githubusercontent.com/81346924/127515332-1971b081-ef3d-4a8e-9fc7-93151c2d9765.png)

***
### Read - **GET**:
- O método GET cria uma sequência de consulta e acrescenta à URL do script no servidor que manipula a solicitação. Esse método é o padrão de todas as URL's e basicamente é para a leitura dos mesmos. Nesse projeto foi criado dois tipo de requisições com GET:
1. **GET/path**
- Com o servidor rodando e sua ferramenta escolhida aberta, você seleciona o método GET e ao lado a URL para a requisição, sendo ela: **_localhost:port/petiscos_**. Ao clicar no botão **_Send_** ele retornará todos os dados da API:
![get](https://user-images.githubusercontent.com/81346924/127515079-62e6a0f7-13ab-4b08-9188-05c960c4af9c.png)

2. **GET/path/id**
- Não muito diferente da requisição acima, o método também será o GET porém depois do caminho será aplicado o **_ID_** de um registro, para o caso de precisar verificar algum registro específico. Com o método GET selecionado e a URL digitada, após ela você adiciona **_/2_** por exemplo, para consultar o registro de ID 2:
![getid](https://user-images.githubusercontent.com/81346924/127515234-a255b54b-ecdc-4b4e-bf91-12510d603697.png)

***
### Update - **PUT**:
- O método PUT cria um novo recurso ou subsititui uma representação do recurso de destino com os novos dados, atualizando o mesmo com as novas informações passadas.
- Este não é o único método existente para atualização de dados, além do **_PUT_** existe também o **_PATCH_**. A diferença dos dois é que o PUT é usado para alteração completa de um dado, já o PATCH é para uma mudança parcial, de algum campo específico
- Nesta API foi utilizada somente requisições PUT para atualizações. Não muito diferente da requisição em POST, a única diferença é que ao lado da URL você precisará informar também um **_ID_**, para servir de referência a qual dado será modificado:
![put](https://user-images.githubusercontent.com/81346924/127514945-e42aaece-a0f1-461f-b592-8b13321747c0.png)

***
### Delete - **DELETE**:
- Como o nome já entrega, o método DELETE tem a função de remover algum recurso que foi especificado, no caso das nossa requisições ele irá deletar o **_ID_** informado após a URL passada:
![delete](https://user-images.githubusercontent.com/81346924/127514718-31acb0cf-e0d7-4c17-8069-e7386b223249.png)

***
## 👩🏻‍🏫 Considerações finais:
1. Após a utilização de alguns métodos, se você quer confirmar se a ação deu realmente certo, faça uma requisição GET e veja se o dado foi adcionado, alterado ou deletado.
2. Confirme se todos os scripts estão aplicados e se as dependências foram instaladas corretamente para uma utilização melhor da API.
3. Feito por [Luiza Biassi](https://github.com/luizzzabiassi) 💕
***
