/**
 * Hook personalizado para chamadas à API
 * Centraliza a lógica de autenticação e tratamento de erros
 */

import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getAuthHeaders, getDefaultHeaders } from '../config/api';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Obter token de autenticação do Redux store
  const userAccessToken = useSelector((state) => state.login.user?.accessToken);

  const apiCall = useCallback(async (config) => {
    setLoading(true);
    setError(null);

    try {
      // Determinar headers baseado na necessidade de autenticação
      const headers = config.requireAuth 
        ? getAuthHeaders(userAccessToken)
        : getDefaultHeaders();

      // Verificar se autenticação é necessária mas não está disponível
      if (config.requireAuth && !userAccessToken) {
        throw new Error('Utilizador não autenticado');
      }

      const response = await axios({
        ...config,
        headers: {
          ...headers,
          ...config.headers, // Permitir override de headers específicos
        },
      });

      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.message || 
                          'Erro desconhecido';
      setError(errorMessage);
      console.error('Erro na API:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [userAccessToken]);

  // Métodos de conveniência para diferentes tipos de requisições
  const get = useCallback((url, requireAuth = true) => {
    return apiCall({
      method: 'GET',
      url,
      requireAuth,
    });
  }, [apiCall]);

  const post = useCallback((url, data, requireAuth = true) => {
    return apiCall({
      method: 'POST',
      url,
      data,
      requireAuth,
    });
  }, [apiCall]);

  const put = useCallback((url, data, requireAuth = true) => {
    return apiCall({
      method: 'PUT',
      url,
      data,
      requireAuth,
    });
  }, [apiCall]);

  const patch = useCallback((url, data, requireAuth = true) => {
    return apiCall({
      method: 'PATCH',
      url,
      data,
      requireAuth,
    });
  }, [apiCall]);

  const del = useCallback((url, requireAuth = true) => {
    return apiCall({
      method: 'DELETE',
      url,
      requireAuth,
    });
  }, [apiCall]);

  return {
    loading,
    error,
    apiCall,
    get,
    post,
    put,
    patch,
    delete: del,
  };
};

export default useApi;
