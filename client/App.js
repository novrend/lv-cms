import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
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
    <TailwindProvider utilities={utilities}>
      <SafeAreaView style={{ height: "100%" }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                cardStyleInterpolator: forFade,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ProductList"
              component={ProductList}
              options={{
                cardStyleInterpolator: forFade,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Category"
              component={Category}
              options={{
                headerShown: false,
                cardStyleInterpolator: forFade,
              }}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{
                cardStyleInterpolator: forFade,
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </TailwindProvider>
  );
}
