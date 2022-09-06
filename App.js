import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DependencyProvider } from './src/features/shared/context/DependencyContext';
import {serviceFactory} from './src/services/ServiceFactory';
import { ThemeProvider } from './src/features/shared/context/ThemeContext';
import useAppFont from './src/features/shared/hook/UseAppFont';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/navigation/AppRouter';
import { apiClientFactory } from './src/features/shared/ApiClientFactory';
import { clientInstance } from './src/features/shared/AxiosClient';
import { AuthProvider } from './src/features/shared/context/AuthContext';

export default function App() {
  const fonts = useAppFont();
  const apiClient = apiClientFactory(clientInstance)
  const services = serviceFactory(apiClient);
  if (!fonts) {
    return null;
  }

  return (
    <DependencyProvider services={services}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <AuthProvider>
              <AppRouter/>
            </AuthProvider>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </DependencyProvider>
  );
}
