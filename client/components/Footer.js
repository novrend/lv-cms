import { Text, View, Image } from "react-native";
export default function Footer() {
  return (
    <View style={{ width: "100%", backgroundColor: "#171717" }}>
      <Image
        source={require("../assets/lv_white.png")}
        style={{
          alignSelf: "center",
          marginTop: 20,
          marginBottom: 20,
          width: 151,
          height: 16,
        }}
      />
      <View
        style={{
          borderBottomColor: "#E5E7EB",
          borderBottomWidth: 1,
          marginRight: 20,
          marginLeft: 20,
        }}
      />
      <Text style={{ color: "#f5f5f5", margin: 20 }}>
        © 2022 Louis Vuitton. All Rights Reserved.
      </Text>
    </View>
  );
}
