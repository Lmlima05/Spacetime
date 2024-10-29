
ℹ️ Como Executar?
Clone o Repositório:

git clone https://github.com/lmlima05/nlw-spacetime
Server
Acesse o Server

cd server
Instale as dependências:

pnpm install
Informe as variáveis de ambiente

cp .env.example .env
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
Execute o Prisma para criar as tabelas

npx prisma migrate dev
Inicie o Serviço:

pnpm dev
Web
Com o Server Iniciado, acesse o projeto Web:

cd .. && cd web
Instale as dependências:

pnpm install
Informe a variável de ambiente

cp .env.example .env
NEXT_PUBLIC_GITHUB_CLIENT_ID=
Inicie o Projeto:

pnpm dev
➡️ Acesse http://localhost:3000 para acessar a aplicação web.