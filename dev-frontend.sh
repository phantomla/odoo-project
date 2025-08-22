#!/bin/bash

# Tailwind CSS Development Script
# Simple watch mode for Tailwind CSS development

echo "🚀 Starting Tailwind CSS Development"
echo "   Press Ctrl+C to stop"
echo ""

# Ensure we're in the right directory
cd "$(dirname "$0")"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
fi

# Start Tailwind in watch mode
echo "👁  Starting Tailwind CSS watch mode..."
echo "   Input:  addons/tatd/static/src/scss/custom.scss"
echo "   Output: addons/tatd/static/src/scss/tailwind.css"
echo ""

npm run dev:watch
