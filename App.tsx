import * as React from 'react';
import Toast from 'react-native-toast-message';
import AppNavigator from './src/routes';

export default function App() {
  return (
    <>
      <AppNavigator />
      <Toast />
    </>
  );
}
