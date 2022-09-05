import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DependencyProvider } from './src/features/shared/context/DependencyContext';
import {serviceFactory} from './src/services/ServiceFactory';
import { ThemeProvider } from './src/features/shared/context/ThemeContext';
import useAppFont from './src/features/shared/hook/UseAppFont';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/navigation/AppRouter';

export default function App() {
  const fonts = useAppFont();
  const services = serviceFactory();
  if (!fonts) {
    return null;
  }

  return (
    <DependencyProvider services={services}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <AppRouter/>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </DependencyProvider>
  );
}
