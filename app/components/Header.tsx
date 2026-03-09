import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <View>
        <Image
          source={require("../../assets/icons/studenity.png")}
          style={{ width: 130, height: 50 }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 14,
            color: "#6B7280",
          }}
        >
          Préserver votre santé mentale
        </Text>
      </View>

      <Pressable onPress={() => router.push("/compte")}>
        <Image
          source={require("../../assets/icons/user.png")}
          style={{ width: 28, height: 28 }}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}
