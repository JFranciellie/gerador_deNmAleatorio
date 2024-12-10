import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Impede que a tela de splash seja ocultada automaticamente
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const loadApp = async () => {
      try {
        // Simula algum carregamento inicial, como carregamento de recursos
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsReady(true);
      } catch (error) {
        console.error('Erro ao carregar o aplicativo:', error);
      } finally {
        // Esconde a tela de splash depois que o app está pronto
        await SplashScreen.hideAsync();
      }
    };

    loadApp();
  }, []);

  const generateRandomNumber = () => {
    const random = Math.floor(10000 + Math.random() * 90000); // Gera um número de 5 dígitos
    setRandomNumber(random);
  };

  if (!isReady) {
    // Retorna nulo enquanto a tela de splash está ativa
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gerador de Número Aleatório</Text>
      <Button title="Gerar Número" onPress={generateRandomNumber} />
      {randomNumber !== null && (
        <Text style={styles.randomNumber}>O Número Gerado é: {randomNumber}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  randomNumber: {
    marginTop: 20,
    fontSize: 30,
    color: '#333',
  },
});
