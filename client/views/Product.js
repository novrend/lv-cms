import { Fragment } from "react";
import { TouchableOpacity, Image, Text, View, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../components/Navbar";
import Slick from "react-native-slick";
export default function Product({ navigation }) {
  const tailwind = useTailwind();
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
              source={require("../assets/product.webp")}
              style={{ width: "100%", height: 400 }}
            />
          </View>
          <View>
            <Image
              source={require("../assets/product2.webp")}
              style={{ width: "100%", height: 400 }}
            />
          </View>
          <View>
            <Image
              source={require("../assets/product3.png")}
              style={{ width: "100%", height: 400 }}
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
            height: "100%",
          }}
        >
          <Text
            style={[tailwind("font-light"), { fontSize: 20, marginBottom: 15 }]}
          >
            Bags
          </Text>
          <Text
            style={[
              tailwind("font-normal"),
              { fontSize: 30, marginBottom: 15 },
            ]}
          >
            AVENUE SLING BAG
          </Text>
          <Text
            style={[
              tailwind("font-normal"),
              { fontSize: 20, marginBottom: 15 },
            ]}
          >
            $1,930.00
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              height: 50,
              justifyContent: "center",
            }}
          >
            <Text
              style={[
                tailwind("text-2xl font-extralight text-white"),
                { alignSelf: "center" },
              ]}
            >
              Place in Cart
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              tailwind("font-light"),
              { fontSize: 20, marginBottom: 15, marginTop: 15 },
            ]}
          >
            The Avenue Sling Bag in Damier Graphite canvas fits urban lifestyles
            perfectly: compact and sporty, with a cool and casual attitude. Its
            “smart” strap adjusts for left- or right-side carry. The
            body-friendly shape and the two zipped compartments keep valuables
            close and secure.
          </Text>
          <Text
            style={[tailwind("font-light"), { fontSize: 20, marginBottom: 15 }]}
          >
            Created by: admin
          </Text>
        </View>
      </ScrollView>
    </Fragment>
  );
}
