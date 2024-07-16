Bloco de Notas
Este projeto consiste em um aplicativo de bloco de notas desenvolvido com React Native para o frontend e Node.js para o backend. Utiliza um banco de dados online para armazenamento das notas e implementa autenticação via Google para acesso seguro às funcionalidades.

Funcionalidades
Cadastro e Login: Os usuários podem se cadastrar e fazer login utilizando sua conta do Google.
Visualização de Notas: Lista de notas disponíveis para visualização.
Criação e Edição de Notas: Funcionalidade para criar novas notas e editar notas existentes.
Exclusão de Notas: Possibilidade de excluir notas que não são mais necessárias.
Tecnologias Utilizadas
Frontend: React Native, axios (para requisições HTTP), react-navigation (para navegação entre telas).
Backend: Node.js, Express.js (framework web), MongoDB Atlas (banco de dados NoSQL hospedado na nuvem), Mongoose (ODM para MongoDB), Firebase Authentication (para autenticação com Google).
Outros: npm (gerenciador de pacotes), Git (controle de versão), VS Code (editor de código).
Pré-requisitos
Node.js e npm instalados globalmente.
Conta no Firebase para configurar a autenticação via Google.
Conta no MongoDB Atlas ou outro serviço de banco de dados online.
Instalação
Clonar o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/projeto-bloco-de-notas.git
cd projeto-bloco-de-notas
Configurar o Backend:

Navegue até o diretório do backend:

bash
Copiar código
cd backend
Instale as dependências:

bash
Copiar código
npm install
Configure as variáveis de ambiente criando um arquivo .env com as seguintes variáveis:

makefile
Copiar código
PORT=3000
MONGODB_URI=sua_url_de_conexão_com_o_banco_de_dados
GOOGLE_CLIENT_ID=seu_google_client_id
Substitua sua_url_de_conexão_com_o_banco_de_dados pela URL de conexão do seu banco de dados MongoDB Atlas e seu_google_client_id pelo ID do cliente do seu projeto Firebase para autenticação via Google.

Inicie o servidor:

bash
Copiar código
npm start
Configurar o Frontend:

Navegue até o diretório do frontend:

bash
Copiar código
cd ../frontend
Instale as dependências:

bash
Copiar código
npm install
Inicie o aplicativo no emulador ou dispositivo físico:

bash
Copiar código
npx react-native run-android  # Para Android
npx react-native run-ios      # Para iOS
Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorar o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a MIT License.
