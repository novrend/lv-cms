import { View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { FontAwesome, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";

export default function Navbar({ buttonType, navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFF" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "#FFFF",
        }}
      >
        {buttonType && (
          <FontAwesome5
            backgroundColor="transparent"
            name="times"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        )}
        {!buttonType && (
          <FontAwesome
            backgroundColor="transparent"
            name="bars"
            size={24}
            color="black"
            onPress={() => navigation.push("Category")}
          />
        )}
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../assets/lv.png")}
            style={{
              alignSelf: "center",
              width: 151,
              height: 16,
            }}
          />
        </TouchableOpacity>
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
    </SafeAreaView>
  );
}
