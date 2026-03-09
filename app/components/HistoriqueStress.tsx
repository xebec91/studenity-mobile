import { Text, View } from "react-native";

export default function HistoriqueStress() {
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#1F2937",
          }}
        >
          Historique du stress
        </Text>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "#2563EB",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 999,
              marginRight: 8,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              7 jours
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#F3F4F6",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 999,
            }}
          >
            <Text
              style={{
                color: "#374151",
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              30 jours
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
          height: 180,
          backgroundColor: "#F9FAFB",
          borderRadius: 16,
          justifyContent: "flex-end",
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: 120,
          }}
        >
          <View
            style={{
              width: 18,
              height: 50,
              backgroundColor: "#93C5FD",
              borderRadius: 8,
            }}
          />
          <View
            style={{
              width: 18,
              height: 80,
              backgroundColor: "#60A5FA",
              borderRadius: 8,
            }}
          />
          <View
            style={{
              width: 18,
              height: 65,
              backgroundColor: "#3B82F6",
              borderRadius: 8,
            }}
          />
          <View
            style={{
              width: 18,
              height: 95,
              backgroundColor: "#2563EB",
              borderRadius: 8,
            }}
          />
          <View
            style={{
              width: 18,
              height: 70,
              backgroundColor: "#3B82F6",
              borderRadius: 8,
            }}
          />
          <View
            style={{
              width: 18,
              height: 55,
              backgroundColor: "#60A5FA",
              borderRadius: 8,
            }}
          />
          <View
            style={{
              width: 18,
              height: 40,
              backgroundColor: "#93C5FD",
              borderRadius: 8,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text style={{ fontSize: 11, color: "#6B7280" }}>Lun</Text>
          <Text style={{ fontSize: 11, color: "#6B7280" }}>Mar</Text>
          <Text style={{ fontSize: 11, color: "#6B7280" }}>Mer</Text>
          <Text style={{ fontSize: 11, color: "#6B7280" }}>Jeu</Text>
          <Text style={{ fontSize: 11, color: "#6B7280" }}>Ven</Text>
          <Text style={{ fontSize: 11, color: "#6B7280" }}>Sam</Text>
          <Text style={{ fontSize: 11, color: "#6B7280" }}>Dim</Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 13,
          color: "#6B7280",
          marginTop: 14,
          lineHeight: 18,
        }}
      >
        Visualisez l’évolution de votre niveau de stress au fil du temps.
      </Text>
    </View>
  );
}
