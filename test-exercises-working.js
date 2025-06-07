/**
 * Script para testar se a API de exercícios está a funcionar
 * Execute com: node test-exercises-working.js
 */

const axios = require('axios');

const BASE_URL = 'http://localhost:3500/api/v1';

const testExercisesWorking = async () => {
  try {
    console.log('🧪 Testando API de Exercícios com nova API key...');
    console.log('');

    // Fazer login
    console.log('📋 1. Fazendo login...');
    const loginResponse = await axios.post(`${BASE_URL}/auth`, {
      email: 'test@gym.pt',
      password: 'testUser'
    });

    const token = loginResponse.data.accessToken;
    console.log('✅ Login bem-sucedido');

    // Testar endpoint de exercícios
    console.log('📋 2. Testando todos os exercícios...');
    
    try {
      const exercisesResponse = await axios.get(`${BASE_URL}/exercises/allExercises`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 segundos timeout
      });

      if (exercisesResponse.status === 200) {
        console.log('✅ API de exercícios funciona!');
        console.log(`📊 Número de exercícios: ${exercisesResponse.data.length}`);
        
        if (exercisesResponse.data.length > 0) {
          const firstExercise = exercisesResponse.data[0];
          console.log('🏋️ Primeiro exercício:');
          console.log(`   Nome: ${firstExercise.name}`);
          console.log(`   Parte do corpo: ${firstExercise.bodyPart}`);
          console.log(`   Músculo alvo: ${firstExercise.target}`);
          console.log(`   Equipamento: ${firstExercise.equipment}`);
        }
      }

    } catch (exerciseError) {
      console.log('❌ Erro na API de exercícios:');
      console.log('📊 Status:', exerciseError.response?.status);
      console.log('📝 Mensagem:', exerciseError.response?.data?.message);
      
      if (exerciseError.response?.status === 401) {
        console.log('🔑 Problema: API key inválida ou expirada');
      } else if (exerciseError.response?.status === 429) {
        console.log('⏰ Problema: Rate limit excedido (muitas requests)');
        console.log('💡 Aguarda alguns minutos antes de tentar novamente');
      }
      return;
    }

    // Testar body parts
    console.log('📋 3. Testando body parts...');
    
    try {
      const bodyPartsResponse = await axios.get(`${BASE_URL}/exercises/allBodyParts`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (bodyPartsResponse.status === 200) {
        console.log('✅ Body parts endpoint funciona!');
        console.log(`📊 Body parts disponíveis: ${bodyPartsResponse.data.length}`);
        console.log(`🎯 Exemplos: ${bodyPartsResponse.data.slice(0, 3).join(', ')}`);
      }

    } catch (bodyPartsError) {
      console.log('❌ Erro no endpoint de body parts:', bodyPartsError.response?.data?.message);
    }

    // Testar target muscles
    console.log('📋 4. Testando target muscles...');
    
    try {
      const targetMusclesResponse = await axios.get(`${BASE_URL}/exercises/allTargetMuscles`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (targetMusclesResponse.status === 200) {
        console.log('✅ Target muscles endpoint funciona!');
        console.log(`📊 Target muscles disponíveis: ${targetMusclesResponse.data.length}`);
        console.log(`🎯 Exemplos: ${targetMusclesResponse.data.slice(0, 3).join(', ')}`);
      }

    } catch (targetMusclesError) {
      console.log('❌ Erro no endpoint de target muscles:', targetMusclesError.response?.data?.message);
    }

    console.log('');
    console.log('🎉 TESTE CONCLUÍDO!');
    console.log('✅ A API de exercícios deve estar a funcionar no frontend agora!');

  } catch (error) {
    console.error('❌ Erro geral:', error.message);
  }
};

testExercisesWorking();
