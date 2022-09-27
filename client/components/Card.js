import { Text, View, Image } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Fragment } from "react";

export default function Card() {
  const tailwind = useTailwind();

  return (
    <Fragment>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          backgroundColor: "#FFFF",
          height: "100%"
        }}
      >
        <View style={{ margin: 10 }}>
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
        </View>
        <View style={{ margin: 10 }}>
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
        </View>
        <View style={{ margin: 10 }}>
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
        </View>
        <View style={{ margin: 10 }}>
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
        </View>
        <View style={{ margin: 10 }}>
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
        </View>
        <View style={{ margin: 10 }}>
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
        </View>
      </View>
    </Fragment>
  );
}
