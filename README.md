# Bloco de Notas

Este projeto consiste em um aplicativo de bloco de notas desenvolvido com React Native para o frontend e Node.js para o backend. Utiliza um banco de dados online para armazenamento das notas e implementa autenticação via Google para acesso seguro às funcionalidades.

## Funcionalidades

- **Cadastro e Login**: Os usuários podem se cadastrar e fazer login utilizando sua conta do Google.
- **Visualização de Notas**: Lista de notas disponíveis para visualização.
- **Criação e Edição de Notas**: Funcionalidade para criar novas notas e editar notas existentes.
- **Exclusão de Notas**: Possibilidade de excluir notas que não são mais necessárias.

## Tecnologias Utilizadas

- **Frontend**: React Native, axios (para requisições HTTP), react-navigation (para navegação entre telas).
- **Backend**: Node.js, Express.js (framework web), MongoDB Atlas (banco de dados NoSQL hospedado na nuvem), Mongoose (ODM para MongoDB), Firebase Authentication (para autenticação com Google).
- **Outros**: npm (gerenciador de pacotes), Git (controle de versão), VS Code (editor de código).

## Pré-requisitos

- Node.js e npm instalados globalmente.
- Conta no Firebase para configurar a autenticação via Google.
- Conta no MongoDB Atlas ou outro serviço de banco de dados online.

## Instalação

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/projeto-bloco-de-notas.git
   cd projeto-bloco-de-notas
