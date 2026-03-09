import { Text, View } from "react-native";

export default function ScoreMental() {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        marginHorizontal: 20,
        marginTop: 24,
        borderRadius: 20,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: "#1F2937",
        }}
      >
        Score d’équilibre mental
      </Text>

      <View
        style={{
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: 110,
            height: 110,
            borderRadius: 55,
            borderWidth: 10,
            borderColor: "#EF4444",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
              color: "#1F2937",
            }}
          >
            42
          </Text>
        </View>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#EF4444",
            marginTop: 14,
          }}
        >
          Fatigue mentale
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#6B7280",
            textAlign: "center",
            marginTop: 8,
            lineHeight: 20,
          }}
        >
          Ce score est basé sur votre stress, votre sommeil, votre charge de
          travail et votre humeur.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#FEF2F2",
          borderRadius: 14,
          padding: 14,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#DC2626",
            fontSize: 14,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Nous vous recommandons de prendre rendez-vous avec un psychologue.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#2563EB",
          borderRadius: 14,
          paddingVertical: 14,
          marginTop: 16,
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
          Prendre rendez-vous
        </Text>
      </View>
    </View>
  );
}
