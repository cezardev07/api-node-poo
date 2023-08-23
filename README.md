<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" width="100%"/>

<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
</div>

### API RESTful POO

Este repositório contém uma simples API RESTful orientada a objetos, que oferece alguns recursos para gerenciar postagens e autenticação de usuários. Desenvolvida com o uso do framework Express, a API proporciona uma experiência com interações entre clientes e o servidor. Com uma abordagem modular orientada a objetos, cada aspecto da funcionalidade é encapsulado em classes distintas.

### Estrutura da API e Rotas:
O código está organizado em diferentes arquivos, cada um com um propósito específico.
A lógica de roteamento é separada no módulo router, onde diferentes rotas são definidas usando o roteador do Express.
Rotas diferentes são definidas para autenticação (/auth/admin, /auth/client, /auth/client/register), ações do cliente (/, GET, POST, PUT, DELETE) e ações do administrador (/admin, /admin/:key).

### Abordagem Orientada a Objetos:
Várias classes são definidas para encapsular funcionalidades relacionadas.
As classes Client, Auth e Admin definem métodos para lidar com ações relacionadas ao cliente, autenticação e ações relacionadas ao administrador, respectivamente.
Essas classes são instanciadas como instâncias de suas respectivas classes (routesClient, auth, routesAdmin).

### Armazenamento de Dados:
Os dados são armazenados na memória na forma de arrays para usuários (users) e postagens (posts).
Cada instância de classe (Client, Auth, Admin) usa esses arrays de dados para realizar operações.

### Inicialização da API:
A classe App inicializa um servidor Express, configura middlewares (análise de JSON e CORS) e define rotas usando o módulo router.

### Autenticação e Autorização:
A classe Auth lida com a autenticação do usuário com base nas credenciais fornecidas (name, email, password).
A classe Admin lida com ações que requerem autorização de nível de administrador, verificando uma chave fornecida no parâmetro da rota.

### Operações RESTful:
A classe Client lida com as operações GET, POST, PUT e DELETE relacionadas às postagens.
A classe Admin lida com operações DELETE para postagens individuais e também uma operação de exclusão em massa para todas as postagens.


Sinta-se à vontade para explorar e aprimorar esta API de acordo com suas necessidades! Se tiver alguma dúvida ou precisar de mais assistência, entre em contato com o proprietário do repositório cezardev07.

### get started api

    # clone o repositorio
    git clone < repositorio >

    # open project
    cd ./ < name project >

    # install all dependencias
    npm install

    # started application
    npm run dev