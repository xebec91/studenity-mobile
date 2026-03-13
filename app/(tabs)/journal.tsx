import { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../components/Header";
import Humeur from "../components/Humeur";

export default function Journal() {
  const [contenuJournal, setContenuJournal] = useState("");
  const [ongletActif, setOngletActif] = useState("ecrire");
  const [historiqueJournal, setHistoriqueJournal] = useState<any[]>([]);
  const [humeur, setHumeur] = useState("");

  const handleJournal = async () => {
    if (!contenuJournal.trim()) {
      Alert.alert("Erreur", "Veuillez écrire quelque chose dans le journal.");
      return;
    }

    if (!humeur) {
      Alert.alert("Erreur", "Veuillez sélectionner une humeur.");
      return;
    }

    try {
      const response = await fetch("http://192.168.1.182:5050/journal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1,
          contenu: contenuJournal,
          humeur: humeur,
        }),
      });

      const data = await response.json();
      console.log("Réponse journal :", data);

      if (response.ok) {
        Alert.alert("Succès", "Journal enregistré");
        setContenuJournal("");
        setHumeur("");
        fetchJournalHistory();
      } else {
        Alert.alert("Erreur", data.message || "Impossible d’enregistrer");
      }
    } catch (error) {
      console.error("Erreur journal :", error);
      Alert.alert("Erreur réseau", "Impossible de contacter le serveur");
    }
  };

  const fetchJournalHistory = async () => {
    try {
      const response = await fetch("http://192.168.1.182:5050/journal/1");
      const data = await response.json();
      console.log("Historique journal :", data);
      setHistoriqueJournal(data);
    } catch (error) {
      console.error("Erreur historique journal :", error);
    }
  };

  useEffect(() => {
    if (ongletActif === "historique") {
      fetchJournalHistory();
    }
  }, [ongletActif]);

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
        <Pressable
          onPress={() => setOngletActif("ecrire")}
          style={{
            backgroundColor:
              ongletActif === "ecrire" ? "#FFFFFF" : "transparent",
            flex: 1,
            paddingVertical: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              color: ongletActif === "ecrire" ? "#1F2937" : "#6B7280",
            }}
          >
            Écrire
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setOngletActif("historique")}
          style={{
            backgroundColor:
              ongletActif === "historique" ? "#FFFFFF" : "transparent",
            flex: 1,
            paddingVertical: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              color: ongletActif === "historique" ? "#1F2937" : "#6B7280",
            }}
          >
            Historique
          </Text>
        </Pressable>
      </View>

      {ongletActif === "ecrire" && (
        <>
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

          <Humeur humeur={humeur} setHumeur={setHumeur} />

          <Pressable
            onPress={handleJournal}
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
          </Pressable>
        </>
      )}

      {ongletActif === "historique" && (
        <View style={{ marginHorizontal: 20, marginTop: 24, marginBottom: 30 }}>
          {historiqueJournal.length === 0 ? (
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                padding: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#6B7280",
                  textAlign: "center",
                }}
              >
                Aucune entrée de journal pour le moment.
              </Text>
            </View>
          ) : (
            historiqueJournal.map((item) => (
              <View
                key={item.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 18,
                  padding: 16,
                  marginBottom: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: "#6B7280",
                    marginBottom: 6,
                  }}
                >
                  {new Date(item.created_at).toLocaleDateString("fr-FR")}
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    color: "#1F2937",
                    lineHeight: 22,
                  }}
                >
                  {item.contenu}
                </Text>

                <Text
                  style={{
                    fontSize: 13,
                    color: "#4F8EF7",
                    marginTop: 8,
                    fontWeight: "600",
                  }}
                >
                  {item.humeur}
                </Text>
              </View>
            ))
          )}
        </View>
      )}
    </ScrollView>
  );
}
