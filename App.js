import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPage from './src/features/Login/LoginPage';
import ProductList from './src/features/products/ProductList';
import { DependencyProvider } from './src/features/shared/context/DependencyContext';
import {serviceFactory} from './src/services/ServiceFactory';
import { ThemeProvider } from './src/features/shared/context/ThemeContext';
import useAppFont from './src/features/shared/hook/UseAppFont';
import WelcomePage from './src/features/Welcome/WelcomePage';
import HomePage from './src/features/Home/HomePage';

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
          {/* <HomePage/> */}
          <ProductList/>
          {/* <WelcomePage /> */}
          {/* <LoginPage/> */}
        </ThemeProvider>
      </SafeAreaProvider>
    </DependencyProvider>
  );
}
