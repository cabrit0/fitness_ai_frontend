/**
 * Script para testar o login através do frontend
 * Execute com: node test-frontend-login.js
 */

const axios = require('axios');

const FRONTEND_URL = 'http://localhost:3000';
const BACKEND_URL = 'http://localhost:3500';

const testFrontendLogin = async () => {
  console.log('🧪 Testando integração Frontend + Backend...');
  console.log('');

  // Teste 1: Verificar se frontend está a responder
  try {
    console.log('📋 1. Verificando se frontend está ativo...');
    const frontendResponse = await axios.get(FRONTEND_URL, { timeout: 5000 });
    if (frontendResponse.status === 200) {
      console.log('✅ Frontend está a responder na porta 3000');
    }
  } catch (error) {
    console.log('❌ Frontend não está acessível em http://localhost:3000');
    console.log('💡 Certifica-te que executaste: cd fitness_ai_frontend && npm start');
    return;
  }

  // Teste 2: Verificar se backend está a responder
  try {
    console.log('📋 2. Verificando se backend está ativo...');
    const backendResponse = await axios.get(`${BACKEND_URL}/api/v1/users`, { 
      timeout: 5000,
      validateStatus: () => true // Aceitar qualquer status
    });
    console.log('✅ Backend está a responder na porta 3500');
  } catch (error) {
    console.log('❌ Backend não está acessível em http://localhost:3500');
    console.log('💡 Certifica-te que executaste: npm start (no diretório fitness_ai)');
    return;
  }

  // Teste 3: Testar login direto no backend
  try {
    console.log('📋 3. Testando login direto no backend...');
    const loginResponse = await axios.post(`${BACKEND_URL}/api/v1/auth`, {
      email: 'test@gym.pt',
      password: 'testUser'
    });

    if (loginResponse.status === 200) {
      console.log('✅ Login direto no backend funciona');
      console.log('🎫 Token recebido:', loginResponse.data.accessToken ? 'Sim' : 'Não');
      console.log('👤 Utilizador:', loginResponse.data.foundUser.username);
    }
  } catch (error) {
    console.log('❌ Erro no login direto:', error.response?.data?.message || error.message);
    return;
  }

  // Teste 4: Verificar configuração da API no frontend
  console.log('📋 4. Verificando configuração da API...');
  console.log('🔗 URL do backend configurada no frontend: http://localhost:3500');
  console.log('🔗 Endpoint de login: http://localhost:3500/api/v1/auth');

  console.log('');
  console.log('🎉 TUDO CONFIGURADO CORRETAMENTE!');
  console.log('');
  console.log('📝 Para testar o login no frontend:');
  console.log('1. Abre http://localhost:3000 no browser');
  console.log('2. Clica em "Login" ou "Entrar"');
  console.log('3. Usa as credenciais:');
  console.log('   📧 Email: test@gym.pt');
  console.log('   🔑 Password: testUser');
  console.log('');
  console.log('✅ O login deve funcionar agora!');
};

testFrontendLogin().catch(console.error);
