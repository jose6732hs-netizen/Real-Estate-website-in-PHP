# Real Estate - Plataforma Moderna de Imóveis

Uma plataforma completa de gerenciamento de imóveis construída com **Next.js 15**, **TypeScript**, **Prisma ORM** e **Tailwind CSS**. Modernização completa do projeto original em PHP para um stack moderno e performático.

## 🚀 Características

- ✅ Homepage moderna com hero section e busca avançada
- ✅ Listagem de propriedades com filtros dinâmicos
- ✅ Detalhes de propriedades com galeria de imagens
- ✅ Sistema de autenticação seguro (login/registro)
- ✅ Painel administrativo completo e intuitivo
- ✅ Dashboard com estatísticas em tempo real
- ✅ CRUD completo de propriedades
- ✅ Gerenciamento de usuários, cidades e estados
- ✅ Design responsivo e moderno
- ✅ Suporte a dark mode
- ✅ Performance otimizada com Next.js 15
- ✅ Tipagem completa com TypeScript

## 🛠️ Stack Tecnológico

| Aspecto | Tecnologia |
|--------|-----------|
| **Framework** | Next.js 15 |
| **Linguagem** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui |
| **ORM** | Prisma |
| **Autenticação** | Auth.js v5 |
| **Validação** | Zod |
| **Banco de Dados** | MySQL |
| **Icons** | Lucide React |
| **Forms** | React Hook Form |

## 📋 Requisitos

- Node.js 18+
- MySQL 8.0+
- npm ou pnpm

## 🛠️ Instalação Rápida

```bash
# 1. Clonar repositório
git clone <repo-url>
cd real-estate-next

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env.local

# 4. Executar migrations
npm run prisma:push

# 5. Iniciar servidor
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📝 Configuração de Variáveis de Ambiente

Edite `.env.local`:

```env
# Banco de Dados
DATABASE_URL="mysql://user:password@localhost:3306/realestatephp"

# Autenticação
NEXTAUTH_SECRET="seu-secret-seguro-aqui"
NEXTAUTH_URL="http://localhost:3000"

# Credenciais Admin (padrão)
ADMIN_EMAIL="admin@realestate.com"
ADMIN_PASSWORD="admin123"
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── (public)/              # Seção pública
│   │   ├── page.tsx           # Homepage
│   │   ├── auth/              # Autenticação
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── properties/        # Propriedades
│   │   ├── profile/           # Perfil do usuário
│   │   ├── contact/           # Contato
│   │   └── about/             # Sobre
│   ├── (admin)/               # Seção admin
│   │   ├── dashboard/         # Dashboard
│   │   ├── properties/        # Gerenciar propriedades
│   │   ├── users/             # Gerenciar usuários
│   │   ├── cities/            # Gerenciar cidades
│   │   └── states/            # Gerenciar estados
│   ├── api/                   # API Routes
│   │   ├── auth/              # Autenticação
│   │   ├── properties/        # Propriedades
│   │   ├── users/             # Usuários
│   │   └── ...
│   └── layout.tsx
├── components/
│   ├── ui/                    # Componentes base
│   ├── (public)/              # Componentes públicos
│   └── (admin)/               # Componentes admin
├── lib/
│   ├── db.ts                  # Cliente Prisma
│   ├── validations.ts         # Schemas Zod
│   ├── utils.ts               # Utilitários
│   └── auth.ts                # Configuração Auth
└── prisma/
    └── schema.prisma          # Schema Prisma
```

## 🗄️ Modelo de Banco de Dados

```
Admin          - Usuários administrativos
User           - Usuários comuns e proprietários
Property       - Propriedades anunciadas
State          - Estados/Províncias
City           - Cidades
Contact        - Mensagens de contato
Feedback       - Avaliações
About          - Conteúdo "Sobre"
```

## 🔐 Autenticação

Sistema seguro com:
- Email/senha autenticação
- Hash com bcryptjs
- Sessions seguras
- CSRF protection automática
- Recuperação de senha (em desenvolvimento)

## 🎨 Design System

- **Cor Primária**: Verde #10B981
- **Tipografia**: Geist (sans) + Geist Mono
- **Components**: shadcn/ui + customizações
- **Icons**: Lucide React
- **Responsivo**: Mobile-first approach

## 📱 Responsividade

- Mobile: até 640px
- Tablet: 641px - 1024px
- Desktop: 1024px+
- Suporte completo a touch

## 📝 Scripts Disponíveis

```bash
npm run dev              # Dev server
npm run build            # Build produção
npm start                # Prod server
npm run lint             # ESLint
npm run prisma:generate  # Gerar cliente Prisma
npm run prisma:migrate   # Executar migrations
npm run prisma:push      # Sincronizar schema
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel deploy
```

### Docker
```bash
docker build -t realestate .
docker run -p 3000:3000 realestate
```

## 🔄 Migração do Projeto PHP

Dados migrados automaticamente do projeto original com:
- Schema Prisma compatível
- Rehashing de senhas
- Preservação de relacionamentos

## 📊 Features por Seção

### 👥 Frontend Público
- Homepage com busca
- Listagem com filtros
- Detalhes de propriedades
- Autenticação (login/registro)
- Perfil de usuário
- Formulário de contato

### 🔧 Painel Admin
- Dashboard com estatísticas
- CRUD de propriedades
- Gerenciamento de usuários
- Cidades e estados
- Contatos e feedback
- About page

## 🤝 Contribuindo

```bash
# 1. Criar branch
git checkout -b feature/NovaFeature

# 2. Commit
git commit -m "feat: adicionar nova feature"

# 3. Push
git push origin feature/NovaFeature

# 4. Pull Request
```

## 📄 Licença

MIT License

## 📞 Suporte

Abra uma issue no repositório para dúvidas ou sugestões.

---

**Desenvolvido com ❤️ usando Next.js 15, TypeScript e Tailwind CSS**
