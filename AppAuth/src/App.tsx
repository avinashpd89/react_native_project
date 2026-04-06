import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppwriteProvider } from './appwrite/AppwriteContext';
import { Router } from './routes/Router';

function App() {

  return (
    <AppwriteProvider>
      <SafeAreaProvider>
        <StatusBar/>
        <Router />
      </SafeAreaProvider>
    </AppwriteProvider>
  );
}

export default App;
