#!/bin/bash

echo "🚀 Démarrage de Global Réno CMS..."

# Vérifier que MongoDB est lancé
if ! pgrep -x "mongod" > /dev/null; then
  echo "⚠️  MongoDB n'est pas lancé. Démarrage..."
  brew services start mongodb-community 2>/dev/null || mongod --fork --logpath /tmp/mongod.log 2>/dev/null || echo "  → Lancez MongoDB manuellement"
fi

echo ""
echo "📡 Démarrage du backend API (port 5001)..."
cd server && npm run dev &
SERVER_PID=$!

sleep 2

echo ""
echo "🌐 Démarrage du frontend React (port 5173)..."
cd .. && npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Système démarré !"
echo "   → Site : http://localhost:5173"
echo "   → Blog  : http://localhost:5173/blog"
echo "   → Admin : http://localhost:5173/admin/login"
echo "   → API   : http://localhost:5001/api/health"
echo ""
echo "Pour créer l'admin initial : cd server && npm run seed"
echo ""
echo "Appuyez sur Ctrl+C pour arrêter"

wait
