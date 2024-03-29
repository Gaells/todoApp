import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "@shopify/restyle"
import Navigation from './src/navigation';
import theme from './src/utils/theme';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  );
}
