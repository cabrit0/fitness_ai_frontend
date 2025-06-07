/**
 * Script para testar a API de exercícios
 * Execute com: node test-exercises-api.js
 */

const axios = require('axios');

const BASE_URL = 'http://localhost:3500/api/v1';

const testExercisesAPI = async () => {
  try {
    console.log('🧪 Testando API de Exercícios...');
    console.log('');

    // Primeiro, fazer login para obter token
    console.log('📋 1. Fazendo login...');
    const loginResponse = await axios.post(`${BASE_URL}/auth`, {
      email: 'test@gym.pt',
      password: 'testUser'
    });

    if (loginResponse.status !== 200) {
      console.log('❌ Falha no login');
      return;
    }

    const token = loginResponse.data.accessToken;
    console.log('✅ Login bem-sucedido');

    // Testar endpoint de exercícios
    console.log('📋 2. Testando endpoint de exercícios...');
    
    try {
      const exercisesResponse = await axios.get(`${BASE_URL}/exercises/allExercises`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (exercisesResponse.status === 200) {
        console.log('✅ API de exercícios funciona!');
        console.log(`📊 Número de exercícios: ${exercisesResponse.data.length}`);
        console.log('🏋️ Primeiro exercício:', exercisesResponse.data[0]?.name || 'N/A');
      }

    } catch (exerciseError) {
      console.log('❌ Erro na API de exercícios:');
      console.log('📊 Status:', exerciseError.response?.status);
      console.log('📝 Mensagem:', exerciseError.response?.data?.message);
      console.log('🔍 Erro completo:', exerciseError.response?.data?.error);
      
      if (exerciseError.response?.data?.error?.includes('API key')) {
        console.log('');
        console.log('🔑 PROBLEMA: API Key em falta!');
        console.log('💡 Solução:');
        console.log('1. Vai a https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb');
        console.log('2. Cria conta gratuita');
        console.log('3. Subscreve o plano gratuito (150 requests/mês)');
        console.log('4. Copia a tua API key');
        console.log('5. Adiciona ao ficheiro .env: RAPIDAPI_KEY=tua_chave_aqui');
        console.log('6. Reinicia o servidor');
      }
    }

    // Testar outros endpoints
    console.log('📋 3. Testando endpoint de body parts...');
    
    try {
      const bodyPartsResponse = await axios.get(`${BASE_URL}/exercises/allBodyParts`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (bodyPartsResponse.status === 200) {
        console.log('✅ Body parts endpoint funciona!');
        console.log(`📊 Número de body parts: ${bodyPartsResponse.data.length}`);
      }

    } catch (bodyPartsError) {
      console.log('❌ Erro no endpoint de body parts:', bodyPartsError.response?.data?.message);
    }

  } catch (error) {
    console.error('❌ Erro geral:', error.message);
  }
};

testExercisesAPI();
