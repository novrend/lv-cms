import { View, Image } from "react-native";
import { FontAwesome, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import { Fragment } from "react";

export default function Navbar({ buttonType, navigation }) {
  return (
    <Fragment>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "#FFFF",
        }}
      >
        {buttonType && <FontAwesome5
          backgroundColor="transparent"
          name="times"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />}
        {!buttonType && <FontAwesome
          backgroundColor="transparent"
          name="bars"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Category")}
        />}
        <Image
          source={require("../assets/lv.png")}
          style={{
            alignSelf: "center",
            width: 151,
            height: 16,
          }}
        />
        <SimpleLineIcons
          style={{ alignSelf: "center" }}
          name="handbag"
          size={24}
          color="black"
        />
      </View>
      <View
        style={{
          borderBottomColor: "#E5E7EB",
          borderBottomWidth: 1,
        }}
      />
    </Fragment>
  );
}
