import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Fragment } from "react";

export default function Card({ navigation }) {
  const tailwind = useTailwind();

  return (
    <Fragment>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            backgroundColor: "#FFFF",
            height: "100%",
          }}
        >
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/image.png")}
              style={[tailwind("bg-stone-100"), { width: 180, height: 180 }]}
            />
            <View
              style={{
                width: 180,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text style={[tailwind("text-black text-base")]}>
                AVENUE SLING BAG
              </Text>
              <Text style={[tailwind("text-black text-sm font-light")]}>
                $1,930.00
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Fragment>
  );
}
