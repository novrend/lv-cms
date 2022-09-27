import { Fragment } from "react";
import { Text, View } from "react-native";
import Navbar from "../components/Navbar";
import { useTailwind } from "tailwind-rn";
export default function Home({ navigation }) {
  const tailwind = useTailwind();
  return (
    <Fragment>
      <Navbar buttonType={true} navigation={navigation} />
      <View style={{ padding: 25, backgroundColor: "#FFFF", height: "100%" }}>
        <Text
          style={[tailwind("font-light"), { fontSize: 20, marginBottom: 15 }]}
          onPress={() => navigation.navigate("Home")}
        >
          HOME
        </Text>
        <View
          style={{
            borderBottomColor: "#9ca3af",
            borderBottomWidth: 1,
            marginBottom: 15,
          }}
        />
        <Text
          style={[tailwind("font-light"), { fontSize: 20, marginBottom: 15 }]}
          onPress={() => navigation.navigate("Home")}
        >
          WOMEN
        </Text>
        <View
          style={{
            borderBottomColor: "#9ca3af",
            borderBottomWidth: 1,
            marginBottom: 15,
          }}
        />
        <Text
          style={[tailwind("font-light"), { fontSize: 20, marginBottom: 15 }]}
          onPress={() => navigation.navigate("Home")}
        >
          MEN
        </Text>
        <View
          style={{
            borderBottomColor: "#9ca3af",
            borderBottomWidth: 1,
            marginBottom: 15,
          }}
        />
        <Text
          style={[tailwind("font-light"), { fontSize: 20, marginBottom: 15 }]}
          onPress={() => navigation.navigate("Home")}
        >
          SHOES
        </Text>
        <View
          style={{
            borderBottomColor: "#9ca3af",
            borderBottomWidth: 1,
            marginBottom: 15,
          }}
        />
        <Text
          style={[tailwind("font-light"), { fontSize: 20, marginBottom: 15 }]}
          onPress={() => navigation.navigate("Home")}
        >
          GIFTS
        </Text>
        <View
          style={{
            borderBottomColor: "#9ca3af",
            borderBottomWidth: 1,
            marginBottom: 15,
          }}
        />
        <Text
          style={[tailwind("font-light"), { fontSize: 20, marginBottom: 15 }]}
          onPress={() => navigation.navigate("Home")}
        >
          FRAGRANCES
        </Text>
        <View
          style={{
            borderBottomColor: "#9ca3af",
            borderBottomWidth: 1,
            marginBottom: 15,
          }}
        />
      </View>
    </Fragment>
  );
}
