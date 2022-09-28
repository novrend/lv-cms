import { Text, Image, TouchableOpacity, FlatList, View } from "react-native";
import { BASE_URL } from "../config";
import { Fragment, useEffect, useState } from "react";
export default function Card({ category, navigation }) {
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    fetch(`${BASE_URL}/category/product?name=${category}`)
      .then((resp) => {
        if (resp?.error) throw resp.json();
        return resp.json();
      })
      .then((resp) => {
        setProducts(resp);
      });
  }, [category]);
  return (
    <Fragment>
      <View style={{ width: "100%", height: "100%", backgroundColor: "#FFFF" }}>
        <FlatList
          renderItem={CardProduct}
          keyExtractor={(item) => item.id}
          data={products}
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
