import {
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import { Fragment } from "react";
import { GET_PRODUCTS } from "../config/queries";
import { useQuery } from "@apollo/client";
export default function Card({ category, navigation }) {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      name: category,
    },
  });
  if (loading)
    return <ActivityIndicator style={{ height: "75%" }} size="large" />;
  if (error) return <Text>Error! {error.message}</Text>;
  const CardProduct = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ margin: 10 }}
        onPress={() => navigation.navigate("ProductDetail", { id: item.id })}
      >
        <Image
          source={{
            uri: item.Images[0].imgUrl,
          }}
          style={{ backgroundColor: "#f5f5f4", width: 180, height: 180 }}
        />
        <Text
          style={{
            width: 180,
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: 16,
          }}
        >
          {item.name}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "300" }}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(item.price)}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Fragment>
      <View style={{ width: "100%", height: "100%", backgroundColor: "#FFFF" }}>
        <FlatList
          renderItem={CardProduct}
          keyExtractor={(item) => item.id}
          data={data.getProductsByCategory}
          numColumns={2}
          columnWrapperStyle={{ flexWrap: "wrap" }}
          style={{
            alignSelf: "center",
          }}
        />
      </View>
    </Fragment>
  );
}
