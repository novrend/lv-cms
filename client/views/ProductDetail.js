import { BASE_URL } from "../config";
import { Fragment, useEffect, useState } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../components/Navbar";
import Slick from "react-native-slick";
import Footer from "../components/Footer";

export default function ProductDetail({ route, navigation }) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`${BASE_URL}/product/${route.params.id}`)
      .then((resp) => {
        if (resp?.error) throw resp.json();
        return resp.json();
      })
      .then((resp) => {
        setProduct(resp);
      });
  }, []);
  const style = {
    dot: {
      backgroundColor: "#949494",
      width: 6,
      height: 6,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    },
    activeDot: {
      backgroundColor: "black",
      width: 6,
      height: 6,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    },
    backButton: {
      left: 0,
      top: 0,
      position: "absolute",
      marginTop: 15,
      marginLeft: 15,
      borderRadius: 25,
      backgroundColor: "white",
      padding: 8,
      shadowColor: "#171717",
      shadowOpacity: 0.3,
      shadowRadius: 4,
      shadowOffset: { width: 2, height: 4 },
    },
    image: { width: "100%", height: 400 },
  };
  const CarouselButton = ({ left }) => {
    return (
      <Text
        style={{
          backgroundColor: "white",
          padding: 10,
          marginLeft: left ? -10 : 0,
          marginRight: left ? 0 : -10,
        }}
      >
        <Ionicons
          name={left ? "chevron-back-sharp" : "chevron-forward-sharp"}
          size={24}
          color="black"
        />
      </Text>
    );
  };
  return (
    <Fragment>
      <Navbar buttonType={false} navigation={navigation} />
      <FlatList></FlatList>
      <ScrollView style={{ position: "relative" }}>
        <Slick
          style={{ height: 400 }}
          showsButtons
          prevButton={<CarouselButton left={true} />}
          nextButton={<CarouselButton left={false} />}
          dot={<View style={style.dot} />}
          activeDot={<View style={style.activeDot} />}
          loop={true}
        >
          <View>
            <Image
              source={{
                uri: product.mainImg,
              }}
              style={style.image}
            />
          </View>
          <View>
            <Image
              source={{ uri: product?.Images?.[0]?.imgUrl }}
              style={style.image}
            />
          </View>
          <View>
            <Image
              source={{ uri: product?.Images?.[1]?.imgUrl }}
              style={style.image}
            />
          </View>
        </Slick>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.backButton}
        >
          <Ionicons name="chevron-back" size={15} color="black" />
        </TouchableOpacity>
        <View
          style={{
            padding: 20,
            paddingLeft: 30,
            backgroundColor: "#FFFF",
          }}
        >
          <Text style={{ fontWeight: "300", fontSize: 20, marginBottom: 15 }}>
            {product?.Category?.name}
          </Text>
          <Text style={{ fontSize: 30, marginBottom: 15 }}>{product.name}</Text>
          <Text style={{ fontSize: 20, marginBottom: 15 }}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              height: 50,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontSize: 24,
                fontWeight: "200",
              }}
            >
              Place in Cart
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 20,
              marginBottom: 15,
              marginTop: 15,
            }}
          >
            {product.description}
          </Text>
          <Text style={{ fontWeight: "300", fontSize: 20, marginBottom: 15 }}>
            Created by: {product?.User?.username}
          </Text>
        </View>
        <Footer />
      </ScrollView>
    </Fragment>
  );
}
