import { Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useTailwind } from "tailwind-rn";
import { BASE_URL } from "../config";
import { Fragment, useEffect, useState } from "react";
export default function Card({ category, navigation }) {
  const tailwind = useTailwind();
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
          style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
        />
        <Text
          style={[
            tailwind("text-black text-base"),
            {
              width: 180,
              flexDirection: "row",
              flexWrap: "wrap",
            },
          ]}
        >
          {item.name}
        </Text>
        <Text style={[tailwind("text-black text-sm font-light")]}>
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
      <FlatList
        renderItem={CardProduct}
        keyExtractor={(item) => item.id}
        data={products}
        numColumns={2}
        columnWrapperStyle={{ flexWrap: "wrap" }}
        style={{
          backgroundColor: "#FFFF",
          alignSelf: "center",
          height: "100%",
        }}
      />
    </Fragment>
  );
}
