import { Fragment } from "react";
import { Image, ScrollView, View, Text, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import { useTailwind } from "tailwind-rn";

export default function Home({ route, navigation }) {
  const tailwind = useTailwind();
  const style = {
    text: {
      position: "absolute",
      bottom: 0,
      alignSelf: "center",
      marginBottom: 100,
      shadowColor: "black",
      shadowOpacity: 2,
      shadowRadius: 10,
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
          <Text style={[tailwind("font-bold text-white text-4xl"), style.text]}>
            FRESH KICKS
          </Text>
          <TouchableOpacity style={style.button}>
            <Text
              style={[tailwind("text-xl text-white"), { alignSelf: "center" }]}
            >
              Discover Shoes
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            tailwind("text-3xl"),
            { marginLeft: 25, marginTop: 40, marginBottom: 20 },
          ]}
        >
          SERVICES
        </Text>
        <Image
          source={require("../assets/banner2.jpeg")}
          style={{ width: 380, height: 380, alignSelf: "center" }}
        />
        <Text
          style={[
            tailwind("text-xl font-bold"),
            { marginLeft: 25, marginTop: 10 },
          ]}
        >
          Virtual or In-Store Appointments
        </Text>
        <Text
          style={[
            tailwind("text-lg"),
            { marginLeft: 25, marginTop: 5, marginRight: 25, marginBottom: 30 },
          ]}
        >
          Book a personal shopping experience with a Louis Vuitton Client
          Advisor.
        </Text>
        <Image
          source={require("../assets/banner3.jpeg")}
          style={{ width: 380, height: 380, alignSelf: "center" }}
        />
        <Text
          style={[
            tailwind("text-xl font-bold"),
            { marginLeft: 25, marginTop: 10 },
          ]}
        >
          Contact Us
        </Text>
        <Text
          style={[
            tailwind("text-lg"),
            { marginLeft: 25, marginTop: 5, marginRight: 25 },
          ]}
        >
          Louis Vuitton Client Advisors are always here to help.
        </Text>
      </ScrollView>
    </Fragment>
  );
}
