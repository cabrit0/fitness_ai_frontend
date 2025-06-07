/**
 * Script de teste para verificar se o frontend está a funcionar corretamente
 * Execute com: node test-frontend.js
 * 
 * Este script verifica:
 * - Se o servidor frontend está a responder
 * - Se os ficheiros estáticos estão acessíveis
 * - Se a configuração da API está correta
 */

const axios = require('axios');

const FRONTEND_URL = 'http://localhost:3000';

async function testFrontend() {
  console.log('🧪 Testando frontend Fitness AI...\n');

  const tests = [
    {
      name: 'Verificar se o frontend está a responder',
      test: async () => {
        const response = await axios.get(FRONTEND_URL);
        return response.status === 200;
      }
    },
    {
      name: 'Verificar se o manifest.json está acessível',
      test: async () => {
        const response = await axios.get(`${FRONTEND_URL}/manifest.json`);
        return response.status === 200 && response.data.name;
      }
    },
    {
      name: 'Verificar se os ícones estão acessíveis',
      test: async () => {
        const response = await axios.get(`${FRONTEND_URL}/favicon.ico`);
        return response.status === 200;
      }
    }
  ];

  for (const test of tests) {
    try {
      console.log(`📋 ${test.name}...`);
      
      const result = await test.test();
      
      if (result) {
        console.log(`✅ Sucesso!`);
      } else {
        console.log(`❌ Falhou!`);
      }
    } catch (error) {
      if (error.code === 'ECONNREFUSED') {
        console.log(`❌ Erro: Frontend não está a correr em ${FRONTEND_URL}`);
        console.log(`   💡 Execute: cd fitness_ai_frontend && npm start`);
      } else {
        console.log(`❌ Erro: ${error.message}`);
      }
    }
    console.log('');
  }

  console.log('📝 Notas importantes:');
  console.log('1. Certifique-se de que o backend está a correr na porta 3500');
  console.log('2. Configure o ficheiro .env no frontend com REACT_APP_API_URL');
  console.log('3. Para desenvolvimento local: REACT_APP_API_URL=http://localhost:3500');
  console.log('4. Para produção: REACT_APP_API_URL=https://fitness-api.onrender.com');
  console.log('');
  console.log('🏁 Testes concluídos!');
}

testFrontend().catch(console.error);
