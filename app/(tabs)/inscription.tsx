import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Inscription() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [pays, setPays] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleRegister = async () => {
    console.log("Tentative d'inscription...");

    try {
      const response = await fetch("http://192.168.1.182:5050/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prenom,
          nom,
          email,
          password: motDePasse,
          telephone,
          pays,
        }),
      });

      const data = await response.json();

      console.log("Réponse API :", data);

      if (response.ok) {
        Alert.alert("Succès", "Compte créé avec succès");
        router.push("/connexion");
      } else {
        Alert.alert("Erreur", data.message || "Impossible de créer le compte");
      }
    } catch (error) {
      console.error("Erreur inscription :", error);
      Alert.alert(
        "Erreur réseau",
        "Impossible de contacter le serveur backend",
      );
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F7F9FC" }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 80,
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
          Prénom
        </Text>

        <TextInput
          value={prenom}
          onChangeText={setPrenom}
          placeholder="Saisir votre prénom"
          placeholderTextColor="#9CA3AF"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 14,
            paddingVertical: 20,
            fontSize: 14,
            color: "#1F2937",
          }}
        />
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
          Nom
        </Text>

        <TextInput
          value={nom}
          onChangeText={setNom}
          placeholder="Saisir votre nom"
          placeholderTextColor="#9CA3AF"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 14,
            paddingVertical: 20,
            fontSize: 14,
            color: "#1F2937",
          }}
        />
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
          Email
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Saisir votre adresse email"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          autoCapitalize="none"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 14,
            paddingVertical: 20,
            fontSize: 14,
            color: "#1F2937",
          }}
        />
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
          Mot de passe
        </Text>

        <TextInput
          value={motDePasse}
          onChangeText={setMotDePasse}
          placeholder="Créer un mot de passe"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 14,
            paddingVertical: 20,
            fontSize: 14,
            color: "#1F2937",
          }}
        />
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
          Pays
        </Text>

        <TextInput
          value={pays}
          onChangeText={setPays}
          placeholder="Saisir votre pays"
          placeholderTextColor="#9CA3AF"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 14,
            paddingVertical: 20,
            fontSize: 14,
            color: "#1F2937",
          }}
        />
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
          Numéro de téléphone
        </Text>

        <TextInput
          value={telephone}
          onChangeText={setTelephone}
          placeholder="Saisir votre numéro"
          placeholderTextColor="#9CA3AF"
          keyboardType="phone-pad"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 14,
            paddingVertical: 20,
            fontSize: 14,
            color: "#1F2937",
          }}
        />
      </View>

      <Pressable
        onPress={handleRegister}
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
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "600" }}>
          Créer un compte
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/connexion")}>
        <Text
          style={{
            fontSize: 15,
            color: "#6B7280",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Vous avez déjà un compte ?{" "}
          <Text style={{ color: "#4F8EF7", fontWeight: "600" }}>
            Se connecter
          </Text>
        </Text>
      </Pressable>
    </ScrollView>
  );
}
