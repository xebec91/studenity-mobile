import { Text, View } from "react-native";

export default function Humeur() {
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
        Comment vous sentez-vous ?
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: "#6B7280",
          marginTop: 20,
          marginVertical: 5,
        }}
      >
        Exprimez librement ce que vous ressentez :
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
