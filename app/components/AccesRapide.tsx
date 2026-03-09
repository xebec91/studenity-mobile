import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function AccesRapide() {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        marginHorizontal: 20,
        marginTop: 24,
        borderRadius: 20,
        padding: 20,
        marginVertical: 15,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: "#1F2937",
          marginBottom: 20,
        }}
      >
        Accès rapide
      </Text>

      <Pressable
        onPress={() => router.push("/rendezvous")}
        style={{
          backgroundColor: "#F3F4F6",
          borderRadius: 14,
          padding: 16,
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 16 }}>📅 Prendre rendez-vous</Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/journal")}
        style={{
          backgroundColor: "#F3F4F6",
          borderRadius: 14,
          padding: 16,
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 16 }}>📓 Écrire dans le journal</Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/conseils")}
        style={{
          backgroundColor: "#F3F4F6",
          borderRadius: 14,
          padding: 16,
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 16 }}>💡 Voir un conseil</Text>
      </Pressable>
    </View>
  );
}
