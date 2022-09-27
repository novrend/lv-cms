import { Fragment } from "react";
import { TouchableOpacity, Image, Text, View, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import Navbar from "../components/Navbar";
export default function Product({ navigation }) {
  const tailwind = useTailwind();
  return (
    <Fragment>
      <Navbar buttonType={false} navigation={navigation} />
      <ScrollView>
        <Image
          source={require("../assets/product.jpeg")}
          style={{ width: "100%", height: 400 }}
        />
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
