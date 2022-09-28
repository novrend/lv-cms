import { Fragment } from "react";
import { Image, ScrollView, View, Text, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home({ navigation }) {
  const style = {
    text: {
      position: "absolute",
      bottom: 0,
      alignSelf: "center",
      marginBottom: 100,
      shadowColor: "black",
      shadowOpacity: 2,
      shadowRadius: 10,
      color: "white",
      fontSize: 36,
      fontWeight: "700",
    },
    button: {
      position: "absolute",
      backgroundColor: "transparent",
      borderRadius: 20,
      borderColor: "white",
      borderWidth: 1,
      shadowColor: "black",
      shadowOpacity: 2,
      shadowRadius: 10,
      height: 50,
      bottom: 0,
      marginBottom: 50,
      alignSelf: "center",
      padding: 10,
      width: 200,
      justifyContent: "center",
    },
    desc: {
      fontSize: 18,
      marginLeft: 25,
      marginTop: 5,
      marginRight: 25,
      marginBottom: 30,
    },
    title: {
      fontSize: 30,
      marginLeft: 25,
      marginTop: 40,
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "700",
      marginLeft: 25,
      marginTop: 10,
    },
    image: { width: 380, height: 380, alignSelf: "center" },
  };
  return (
    <Fragment>
      <Navbar buttonType={false} navigation={navigation} />
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../assets/banner.jpeg")}
            style={{ width: "100%", height: 760 }}
          />
          <Text style={style.text}>FRESH KICKS</Text>
          <TouchableOpacity
            style={style.button}
            onPress={() =>
              navigation.navigate("ProductList", { category: "Shoes" })
            }
          >
            <Text style={{ fontSize: 20, color: "white", alignSelf: "center" }}>
              Discover Shoes
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={style.title}>SERVICES</Text>
        <Image source={require("../assets/banner2.jpeg")} style={style.image} />
        <Text style={style.subtitle}>Virtual or In-Store Appointments</Text>
        <Text style={style.desc}>
          Book a personal shopping experience with a Louis Vuitton Client
          Advisor.
        </Text>
        <Image source={require("../assets/banner3.jpeg")} style={style.image} />
        <Text style={style.subtitle}>Contact Us</Text>
        <Text style={style.desc}>
          Louis Vuitton Client Advisors are always here to help.
        </Text>
        <Footer />
      </ScrollView>
    </Fragment>
  );
}
