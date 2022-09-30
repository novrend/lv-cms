import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import Navbar from "../components/Navbar";
import { GET_CATEGORIES } from "../config/queries";
export default function Home({ navigation }) {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (loading)
    return <ActivityIndicator style={{ height: "75%" }} size="large" />;
  if (error) return <Text>Error! {error.message}</Text>;
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
  return (
    <Fragment>
      <Navbar buttonType={true} navigation={navigation} />
      <View style={{ padding: 25, backgroundColor: "#FFFF", height: "100%" }}>
        <NavComponents item={{ name: "Home" }} />
        <FlatList
          renderItem={NavComponents}
          keyExtractor={(item) => item.id}
          data={data.getCategories}
        ></FlatList>
      </View>
    </Fragment>
  );
}
