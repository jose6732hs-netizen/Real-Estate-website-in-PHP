#!/bin/bash

# Setup do Real Estate Next.js

echo "🚀 Iniciando setup do Real Estate Next.js..."
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale Node.js 18+"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências"
    exit 1
fi

echo "✅ Dependências instaladas"
echo ""

# Criar .env.local
if [ ! -f .env.local ]; then
    echo "🔧 Criando .env.local..."
    cp .env.example .env.local
    echo "⚠️  IMPORTANTE: Edite .env.local com suas credenciais do MySQL"
    echo ""
fi

# Prisma
echo "🗄️  Configurando Prisma..."
npm run prisma:generate

if [ $? -ne 0 ]; then
    echo "❌ Erro ao gerar cliente Prisma"
    exit 1
fi

echo "✅ Prisma configurado"
echo ""

# Advertência final
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 PRÓXIMOS PASSOS:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1️⃣  Edite .env.local com suas credenciais MySQL:"
echo "   DATABASE_URL=mysql://user:password@localhost:3306/realestatephp"
echo ""
echo "2️⃣  Execute as migrations:"
echo "   npm run prisma:push"
echo ""
echo "3️⃣  Inicie o servidor de desenvolvimento:"
echo "   npm run dev"
echo ""
echo "4️⃣  Acesse http://localhost:3000"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📖 Leia 00_START_HERE.md para mais informações"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
