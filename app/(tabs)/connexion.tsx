import { Image, ScrollView, Text, View } from "react-native";

export default function Connexion() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F7F9FC" }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 150,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              backgroundColor: "#ffffff",
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
              elevation: 4,
            }}
          >
            <Image
              source={require("../../assets/icons/logo.png")}
              style={{ width: 150, height: 80 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View style={{ marginTop: 40, marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 15,
            color: "#1F2937",
            marginBottom: 8,
            marginLeft: 10,
            fontWeight: "600",
          }}
        >
          Email
        </Text>

        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 14,
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: "#9CA3AF", fontSize: 14 }}>
            Saisir votre adresse email
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 15,
            color: "#1F2937",
            marginBottom: 8,
            marginLeft: 10,
            fontWeight: "600",
          }}
        >
          Mot de Passe
        </Text>

        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 14,
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: "#9CA3AF", fontSize: 14 }}>
            Entrer votre mot de passe
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#4F8EF7",
          marginHorizontal: 20,
          marginTop: 24,
          marginBottom: 30,
          borderRadius: 14,
          paddingVertical: 15,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Se connecter
        </Text>
      </View>

      <Text
        style={{
          fontSize: 15,
          color: "#6B7280",
          textAlign: "center",
        }}
      >
        Vous n'avez pas de compte ?{" "}
        <Text style={{ color: "#4F8EF7", fontWeight: "600" }}>
          Créer un compte
        </Text>
      </Text>
    </ScrollView>
  );
}
