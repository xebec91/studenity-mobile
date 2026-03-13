import { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import Calendrier from "../components/Calendrier";
import Header from "../components/Header";

type Psychologue = {
  id: number;
  prenom: string;
  nom: string;
  specialite: string;
  description: string;
  email: string;
};

type RendezVousItem = {
  id: number;
  date_rendezvous: string;
  statut: string;
  prenom: string;
  nom: string;
  specialite: string;
};

export default function RendezVous() {
  const [ongletActif, setOngletActif] = useState("rendezvous");
  const [psychologues, setPsychologues] = useState<Psychologue[]>([]);
  const [mesRendezVous, setMesRendezVous] = useState<RendezVousItem[]>([]);

  const fetchPsychologues = async () => {
    try {
      const response = await fetch("http://192.168.1.182:5050/psychologues");
      const data = await response.json();
      console.log("Psychologues :", data);
      setPsychologues(data);
    } catch (error) {
      console.error("Erreur psychologues :", error);
    }
  };

  const fetchMesRendezVous = async () => {
    try {
      const response = await fetch("http://192.168.1.182:5050/rendezvous/1");
      const data = await response.json();
      console.log("Mes rendez-vous :", data);
      setMesRendezVous(data);
    } catch (error) {
      console.error("Erreur rendez-vous :", error);
    }
  };

  const handlePrendreRendezVous = async (psychologueId: number) => {
    try {
      const response = await fetch("http://192.168.1.182:5050/rendezvous", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1,
          psychologue_id: psychologueId,
          date_rendezvous: "2026-03-20 14:00:00",
          statut: "confirmé",
        }),
      });

      const data = await response.json();
      console.log("Nouveau rendez-vous :", data);

      if (response.ok) {
        Alert.alert("Succès", "Rendez-vous enregistré");
        fetchMesRendezVous();
      } else {
        Alert.alert("Erreur", data.message || "Impossible de réserver");
      }
    } catch (error) {
      console.error("Erreur création rendez-vous :", error);
      Alert.alert("Erreur réseau", "Impossible de contacter le serveur");
    }
  };

  useEffect(() => {
    fetchPsychologues();
    fetchMesRendezVous();
  }, []);

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
          Rendez-vous
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#6B7280",
            marginTop: 4,
          }}
        >
          Gérez vos séances
        </Text>
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
          onPress={() => setOngletActif("rendezvous")}
          style={{
            backgroundColor:
              ongletActif === "rendezvous" ? "#FFFFFF" : "transparent",
            flex: 1,
            paddingVertical: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              color: ongletActif === "rendezvous" ? "#1F2937" : "#6B7280",
            }}
          >
            Rendez-vous
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setOngletActif("messages")}
          style={{
            backgroundColor:
              ongletActif === "messages" ? "#FFFFFF" : "transparent",
            flex: 1,
            paddingVertical: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              color: ongletActif === "messages" ? "#1F2937" : "#6B7280",
            }}
          >
            Messages
          </Text>
        </Pressable>
      </View>

      {ongletActif === "rendezvous" && (
        <>
          <View style={{ paddingHorizontal: 20, marginTop: 26 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "#1F2937",
              }}
            >
              Mes rendez-vous
            </Text>
          </View>

          {mesRendezVous.length === 0 ? (
            <View
              style={{
                backgroundColor: "#FFFFFF",
                marginHorizontal: 20,
                marginTop: 14,
                borderRadius: 16,
                padding: 16,
              }}
            >
              <Text style={{ color: "#6B7280", textAlign: "center" }}>
                Aucun rendez-vous pour le moment.
              </Text>
            </View>
          ) : (
            mesRendezVous.map((item) => (
              <View
                key={item.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  marginHorizontal: 20,
                  marginTop: 14,
                  borderRadius: 16,
                  padding: 16,
                }}
              >
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                  Dr. {item.prenom} {item.nom}
                </Text>

                <Text
                  style={{
                    color: "#6B7280",
                    marginTop: 4,
                    fontSize: 13,
                  }}
                >
                  {new Date(item.date_rendezvous).toLocaleString("fr-FR")}
                </Text>

                <Text
                  style={{
                    color: "#4F8EF7",
                    marginTop: 8,
                    fontSize: 13,
                    fontWeight: "600",
                  }}
                >
                  {item.specialite}
                </Text>

                <Text
                  style={{
                    color: item.statut === "confirmé" ? "#059669" : "#DC2626",
                    marginTop: 8,
                    fontSize: 13,
                    fontWeight: "600",
                  }}
                >
                  {item.statut}
                </Text>

                <Pressable
                  style={{
                    backgroundColor: "#4F8EF7",
                    borderRadius: 12,
                    marginTop: 14,
                    paddingVertical: 12,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "600",
                    }}
                  >
                    Rejoindre la visioconférence
                  </Text>
                </Pressable>
              </View>
            ))
          )}

          <View style={{ paddingHorizontal: 20, marginTop: 28 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "#1F2937",
              }}
            >
              Psychologues disponibles
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: 20,
              marginTop: 15,
            }}
          >
            <Calendrier />
          </View>

          {psychologues.map((psy) => (
            <View
              key={psy.id}
              style={{
                backgroundColor: "#FFFFFF",
                marginHorizontal: 20,
                marginTop: 14,
                borderRadius: 16,
                padding: 16,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 16 }}>
                Dr. {psy.prenom} {psy.nom}
              </Text>

              <Text
                style={{
                  color: "#4F8EF7",
                  marginTop: 6,
                  fontSize: 13,
                  fontWeight: "600",
                }}
              >
                {psy.specialite}
              </Text>

              <Text
                style={{
                  color: "#6B7280",
                  marginTop: 8,
                  fontSize: 13,
                  lineHeight: 20,
                }}
              >
                {psy.description}
              </Text>

              <Pressable
                onPress={() => handlePrendreRendezVous(psy.id)}
                style={{
                  backgroundColor: "#4F8EF7",
                  borderRadius: 12,
                  marginTop: 14,
                  paddingVertical: 12,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "600",
                  }}
                >
                  Prendre rendez-vous
                </Text>
              </Pressable>
            </View>
          ))}

          <View style={{ height: 30 }} />
        </>
      )}

      {ongletActif === "messages" && (
        <View style={{ marginHorizontal: 20, marginTop: 24, marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#1F2937",
              marginBottom: 14,
            }}
          >
            Messages récents
          </Text>

          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "#1F2937",
              }}
            >
              Dr. Gerard Martin
            </Text>

            <Text
              style={{
                color: "#6B7280",
                fontSize: 13,
                marginTop: 4,
              }}
            >
              Dernier message • 18h42
            </Text>

            <Text
              style={{
                color: "#1F2937",
                fontSize: 14,
                marginTop: 10,
                lineHeight: 20,
              }}
            >
              Merci pour vos conseils, je me sens un peu mieux aujourd&apos;hui.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "#1F2937",
              }}
            >
              Dr. Sarah Chen
            </Text>

            <Text
              style={{
                color: "#6B7280",
                fontSize: 13,
                marginTop: 4,
              }}
            >
              Dernier message • 16h10
            </Text>

            <Text
              style={{
                color: "#1F2937",
                fontSize: 14,
                marginTop: 10,
                lineHeight: 20,
              }}
            >
              N&apos;oubliez pas de prendre du repos avant votre prochain
              examen.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: 16,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: "#1F2937",
              }}
            >
              Support Studenity
            </Text>

            <Text
              style={{
                color: "#6B7280",
                fontSize: 13,
                marginTop: 4,
              }}
            >
              Dernier message • 09h15
            </Text>

            <Text
              style={{
                color: "#1F2937",
                fontSize: 14,
                marginTop: 10,
                lineHeight: 20,
              }}
            >
              Votre rendez-vous a bien été confirmé pour cette semaine.
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
