# Documentação da API - Unilink

## Introdução
A API Unilink fornece rotas para autenticação de usuários e gerenciamento de perfis. As requisições são feitas em formato JSON e todas as respostas também são retornadas em JSON.

## Base URL
`http://localhost:<PORT>/api`

## Rotas de Autenticação

### 1. Registro de Usuário
- **Método:** POST
- **Endpoint:** `/auth/register`
- **Descrição:** Permite que novos usuários se registrem na aplicação.
- **Corpo da Requisição:**
    ```json
    { 
        "username": "string", 
        "email": "string", 
        "password": "string" 
    }
    ```
- **Respostas:**
    - **201 Created:** Usuário registrado com sucesso.
        ```json
        { "msg": "Usuário registrado com sucesso." }
        ```
    - **400 Bad Request:** Erro na validação dos dados.
        ```json
        { "msg": "Erro na validação dos dados." }
        ```

### 2. Login de Usuário
- **Método:** POST
- **Endpoint:** `/auth/login`
- **Descrição:** Permite que usuários existentes façam login na aplicação e obtenham um token JWT.
- **Corpo da Requisição:**
    ```json
    { 
        "email": "string", 
        "password": "string" 
    }
    ```
- **Respostas:**
    - **200 OK:** Login bem-sucedido, retorna o token JWT.
        ```json
        { "token": "string" }
        ```
    - **401 Unauthorized:** Credenciais inválidas.
        ```json
        { "msg": "Credenciais inválidas." }
        ```

## Rotas de Usuário

### 1. Upload de Avatar
- **Método:** POST
- **Endpoint:** `/user/upload-avatar`
- **Descrição:** Permite que usuários façam upload de um avatar.
- **Cabeçalho:**
    - `Authorization: Bearer <token>` (token JWT do usuário).
- **Formulário:**
    - **File:** `file` (o arquivo da imagem do avatar).
- **Respostas:**
    - **200 OK:** Avatar carregado com sucesso.
        ```json
        { "msg": "Avatar carregado com sucesso." }
        ```
    - **401 Unauthorized:** Token não fornecido ou inválido.
        ```json
        { "msg": "Token Não Fornecido ou Inválido." }
        ```

### 2. Obter Dados do Usuário
- **Método:** POST
- **Endpoint:** `/user/my-profile`
- **Descrição:** Retorna os dados do perfil do usuário autenticado.
- **Cabeçalho:**
    - `Authorization: Bearer <token>` (token JWT do usuário).
- **Respostas:**
    - **200 OK:** Dados do usuário retornados com sucesso.
        ```json
        { 
            "username": "string", 
            "email": "string", 
            "avatarUrl": "string" 
        }
        ```
    - **401 Unauthorized:** Token não fornecido ou inválido.
        ```json
        { "msg": "Token Não Fornecido ou Inválido." }
        ```
