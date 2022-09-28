import { Fragment, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Navbar from "../components/Navbar";
import { BASE_URL } from "../config";
export default function Home({ navigation }) {
  const [categories, setCategories] = useState([]);
  const NavComponents = ({ item }) => {
    return (
      <Fragment>
        <Text
          style={{ fontWeight: "300", fontSize: 20, marginBottom: 15 }}
          onPress={() =>
            item.name === "Home"
              ? navigation.navigate("Home")
              : navigation.navigate("ProductList", { category: item.name })
          }
        >
          {item.name}
        </Text>
        <View
          style={{
            borderBottomColor: "#9ca3af",
            borderBottomWidth: 1,
            marginBottom: 15,
          }}
        />
      </Fragment>
    );
  };
  useEffect(() => {
    fetch(`${BASE_URL}/category`)
      .then((resp) => {
        if (resp?.error) throw resp.json();
        return resp.json();
      })
      .then((resp) => {
        setCategories(resp);
      });
  }, []);
  return (
    <Fragment>
      <Navbar buttonType={true} navigation={navigation} />
      <View style={{ padding: 25, backgroundColor: "#FFFF", height: "100%" }}>
        <NavComponents item={{ name: "Home" }} />
        <FlatList
          renderItem={NavComponents}
          keyExtractor={(item) => item.id}
          data={categories}
        ></FlatList>
      </View>
    </Fragment>
  );
}
