import { ScrollView, Text, View } from "react-native";
import Calendrier from "../components/Calendrier";
import Header from "../components/Header";

export default function RendezVous() {
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
            Rendez-vous
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
            Messages
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 26 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#1F2937",
          }}
        >
          Mes Rendez-vous
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginHorizontal: 20,
          marginTop: 14,
          borderRadius: 16,
          padding: 16,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Dr. Gerard Martin
        </Text>

        <Text
          style={{
            color: "#6B7280",
            marginTop: 4,
            fontSize: 13,
          }}
        >
          Jeudi 26 Février 2026 • 14h15
        </Text>

        <View
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
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginHorizontal: 20,
          marginTop: 16,
          borderRadius: 16,
          padding: 16,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 16 }}>Dr. Sarah Chen</Text>
        <Text
          style={{
            color: "#6B7280",
            marginTop: 4,
            fontSize: 13,
          }}
        >
          Mardi 5 Mars 2026 • 17h30
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: 14,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              backgroundColor: "#E5E7EB",
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 55,
            }}
          >
            <Text>Modifier</Text>
          </View>

          <View
            style={{
              backgroundColor: "#FEE2E2",
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 55,
            }}
          >
            <Text style={{ color: "#DC2626" }}>Annuler</Text>
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 28 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#1F2937",
          }}
        >
          Rendez-vous disponibles
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 15,
          marginVertical: 15,
        }}
      >
        <Calendrier />
      </View>
    </ScrollView>
  );
}
