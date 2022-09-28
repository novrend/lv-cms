import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./views/Home";
import ProductList from "./views/ProductList";
import ProductDetail from "./views/ProductDetail";
import Category from "./views/Category";

export default function App() {
  const Stack = createStackNavigator();
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ cardStyleInterpolator: forFade, headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
