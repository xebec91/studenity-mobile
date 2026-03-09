import { Text, View } from "react-native";

export default function SuiviQuotidien() {
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
        ✨ Suivi quotidien
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: "#6B7280",
          marginTop: 6,
        }}
      >
        Check-in rapide en moins de 30 secondes
      </Text>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "600",
          color: "#1F2937",
          marginTop: 20,
        }}
      >
        Niveau de stress
      </Text>

      <View
        style={{
          backgroundColor: "#E5E7EB",
          height: 10,
          borderRadius: 999,
          marginTop: 12,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            backgroundColor: "#0F50D1",
            height: "100%",
            width: "75%",
            borderRadius: 999,
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "600",
          color: "#1F2937",
          marginTop: 20,
        }}
      >
        Votre humeur
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <View
          style={{
            backgroundColor: "#F3F4F6",
            borderRadius: 12,
            height: 80,
            width: 58,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>😴</Text>
          <Text style={{ fontSize: 10, marginTop: 4 }}>Fatigué</Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            borderRadius: 12,
            height: 80,
            width: 58,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>😢</Text>
          <Text style={{ fontSize: 10, marginTop: 4 }}>Triste</Text>
        </View>

        <View
          style={{
            backgroundColor: "#DBEAFE",
            borderRadius: 12,
            height: 80,
            width: 58,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>😕</Text>
          <Text style={{ fontSize: 10, marginTop: 4 }}>Confus</Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            borderRadius: 12,
            height: 80,
            width: 58,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>😌</Text>
          <Text style={{ fontSize: 10, marginTop: 4 }}>Tranquille</Text>
        </View>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            borderRadius: 12,
            height: 80,
            width: 58,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>😁</Text>
          <Text style={{ fontSize: 10, marginTop: 4 }}>Heureux</Text>
        </View>
      </View>
    </View>
  );
}
