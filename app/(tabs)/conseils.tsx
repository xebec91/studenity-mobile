import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";

export default function Conseils() {
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
          Conseils & Ressources
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#6B7280",
            marginTop: 4,
          }}
        >
          Soutien pour votre bien-être mental
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
          <Text style={{ fontSize: 20, color: "#FFFFFF" }}>💡</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "#1F2937",
            }}
          >
            Conseil du jour
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginTop: 4,
              lineHeight: 18,
            }}
          >
            Prenez une pause de 10 minutes sans écran aujourd'hui.
          </Text>

          <Text
            style={{
              marginTop: 8,
              fontSize: 15,
              fontWeight: "500",
              color: "#4F8EF7",
            }}
          >
            Fatigue mentale
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 28 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "#1F2937",
          }}
        >
          Conseils Personnalisés
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "48%",
            backgroundColor: "#4F8EF7",
            borderRadius: 18,
            paddingVertical: 22,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>📘</Text>

          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "600",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Stress des examens
          </Text>
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: "#F59E0B",
            borderRadius: 18,
            paddingVertical: 22,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>🤍</Text>

          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "600",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Peur de l'échec
          </Text>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "48%",
            backgroundColor: "#10B981",
            borderRadius: 18,
            paddingVertical: 22,
            alignItems: "center",
            marginTop: 14,
          }}
        >
          <Text style={{ fontSize: 24 }}>😴</Text>

          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "600",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Fatigue mentale
          </Text>
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: "#EF4444",
            borderRadius: 18,
            paddingVertical: 22,
            alignItems: "center",
            marginTop: 14,
          }}
        >
          <Text style={{ fontSize: 24 }}>👨‍👩‍👦</Text>

          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "600",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Pression familiale
          </Text>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "48%",
            backgroundColor: "#8B5CF6",
            borderRadius: 18,
            paddingVertical: 22,
            alignItems: "center",
            marginTop: 14,
          }}
        >
          <Text style={{ fontSize: 24 }}>💰</Text>

          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "600",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Stress financier
          </Text>
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: "#14B8A6",
            borderRadius: 18,
            paddingVertical: 22,
            alignItems: "center",
            marginTop: 14,
          }}
        >
          <Text style={{ fontSize: 24 }}>📱</Text>

          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "600",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Comparaison sociale
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FEE2E2",
          marginHorizontal: 20,
          marginTop: 28,
          marginBottom: 30,
          borderRadius: 18,
          padding: 18,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#EF4444",
          }}
        >
          Besoin d'aide immédiatement ?
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#EF4444",
            marginTop: 10,
            lineHeight: 20,
          }}
        >
          Si vous traversez une crise de santé mentale, demandez de l'aide
          immédiatement.
        </Text>

        <View
          style={{
            backgroundColor: "#EF4444",
            borderRadius: 14,
            marginTop: 18,
            paddingVertical: 14,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Obtenir de l'aide rapidement
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
