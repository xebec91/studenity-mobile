import { ScrollView, Text, View } from "react-native";
import Header from "./components/Header";

export default function Compte() {
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
          Mon Compte
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#6B7280",
            marginTop: 4,
          }}
        >
          Gérez votre profil et vos paramètres
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginHorizontal: 20,
          marginTop: 24,
          borderRadius: 20,
          padding: 18,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                backgroundColor: "#DBEAFE",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 14,
              }}
            >
              <Text style={{ fontSize: 22, color: "#FFFFFF" }}>👤</Text>
            </View>

            <View>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 16,
                  color: "#1F2937",
                }}
              >
                Lucas Dubois
              </Text>

              <Text
                style={{
                  color: "#6B7280",
                  marginTop: 2,
                  fontSize: 13,
                }}
              >
                Étudiant
              </Text>
            </View>
          </View>

          <Text
            style={{
              backgroundColor: "#DBEAFE",
              color: "#4F8EF7",
              fontWeight: "500",
              borderRadius: 18,
              padding: 15,
            }}
          >
            Modifier
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 16,
            borderRadius: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Email
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            lucas.dubois@universite.fr
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 12,
            borderRadius: 14,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Téléphone
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            +33 6 12 35 47 65
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginHorizontal: 20,
          marginTop: 24,
          borderRadius: 20,
          padding: 18,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              color: "#1F2937",
              marginLeft: 5,
            }}
          >
            🔒 Sécurité
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 16,
            borderRadius: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Téléphone
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            Modifier le numéro de téléphone
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 12,
            borderRadius: 14,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Mot de Passe
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            Modifier le mot de passe
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginHorizontal: 20,
          marginTop: 24,
          borderRadius: 20,
          padding: 18,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              color: "#1F2937",
              marginLeft: 5,
            }}
          >
            ⚙️ Préférences
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 16,
            borderRadius: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Notifications
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            Activé
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 12,
            borderRadius: 14,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Langue
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            Français
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 12,
            borderRadius: 14,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Fuseau Horaire
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            Paris
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginHorizontal: 20,
          marginTop: 24,
          borderRadius: 20,
          padding: 18,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              color: "#1F2937",
              marginLeft: 5,
            }}
          >
            🕵🏼‍♂️ Confidentialité
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 16,
            borderRadius: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Données
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            Exporter mes données
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 12,
            borderRadius: 14,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Mentions Légales
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            Informations Légales
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FEF2F2",
            marginTop: 12,
            borderRadius: 14,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#DC2626",
              fontWeight: "500",
            }}
          >
            ❌ Supprimer mon compte
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginHorizontal: 20,
          marginTop: 24,
          borderRadius: 20,
          padding: 18,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              color: "#1F2937",
              marginLeft: 5,
            }}
          >
            ❓ Aide et Sécurité
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 16,
            borderRadius: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Une Question ?
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            Consulter notre FAQ
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 12,
            borderRadius: 14,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginBottom: 4,
            }}
          >
            Besoin d'aide ?
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#1F2937",
              fontWeight: "500",
            }}
          >
            Contacter l'assistance
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#ffffff",
          marginHorizontal: 20,
          marginTop: 24,
          marginBottom: 30,
          borderRadius: 14,
          paddingVertical: 15,
          alignItems: "center",
          shadowColor: "000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <Text
          style={{
            color: "#1F2937",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Sauvegarder les modifications
        </Text>
      </View>
    </ScrollView>
  );
}
