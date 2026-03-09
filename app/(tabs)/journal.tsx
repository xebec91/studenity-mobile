import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import Header from "../components/Header";
import Humeur from "../components/Humeur";

export default function Journal() {
  const [contenuJournal, setContenuJournal] = useState("");
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F7F9FC" }}>
      <Header />

      <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "700",
            color: "#1F2937",
          }}
        >
          Journal Personnel
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#6B7280",
            marginTop: 4,
          }}
        >
          Exprimez librement vos pensées
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#DBEAFE",
          marginHorizontal: 20,
          marginTop: 24,
          borderRadius: 18,
          padding: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            backgroundColor: "#4F8EF7",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 14,
          }}
        >
          <Text style={{ fontSize: 20, color: "#FFFFFF" }}>🔒</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "#1F2937",
            }}
          >
            Votre confidentialité est importante
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginTop: 4,
              lineHeight: 18,
            }}
          >
            Votre journal est privé et visible uniquement par vous.
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#E5E7EB",
          marginHorizontal: 20,
          marginTop: 24,
          borderRadius: 14,
          padding: 4,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            flex: 1,
            paddingVertical: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              color: "#1F2937",
            }}
          >
            Écrire
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#6B7280",
            }}
          >
            Historique
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginHorizontal: 20,
          marginTop: 24,
          borderRadius: 20,
          padding: 20,
          minHeight: 200,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#1F2937",
          }}
        >
          À quoi pensez-vous ?
        </Text>

        <TextInput
          value={contenuJournal}
          onChangeText={setContenuJournal}
          placeholder="Écrivez vos pensées ici..."
          placeholderTextColor="#9CA3AF"
          multiline
          textAlignVertical="top"
          style={{
            marginTop: 16,
            fontSize: 14,
            color: "#1F2937",
            minHeight: 160,
          }}
        />
      </View>

      <Humeur />

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
          Enregistrer
        </Text>
      </View>
    </ScrollView>
  );
}
