import { Pressable, Text, View } from "react-native";

type HumeurProps = {
  humeur: string;
  setHumeur: (humeur: string) => void;
};

export default function Humeur({ humeur, setHumeur }: HumeurProps) {
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
        <Pressable
          onPress={() => setHumeur("fatigué")}
          style={{
            backgroundColor: humeur === "fatigué" ? "#DBEAFE" : "#F3F4F6",
            borderRadius: 12,
            height: 80,
            width: 58,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>😴</Text>
          <Text style={{ fontSize: 10, marginTop: 4 }}>Fatigué</Text>
        </Pressable>

        <Pressable
          onPress={() => setHumeur("triste")}
          style={{
            backgroundColor: humeur === "triste" ? "#DBEAFE" : "#F3F4F6",
            borderRadius: 12,
            height: 80,
            width: 58,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>😢</Text>
          <Text style={{ fontSize: 10, marginTop: 4 }}>Triste</Text>
        </Pressable>

        <Pressable
          onPress={() => setHumeur("confus")}
          style={{
            backgroundColor: humeur === "confus" ? "#DBEAFE" : "#F3F4F6",
            borderRadius: 12,
            height: 80,
            width: 58,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>😕</Text>
          <Text style={{ fontSize: 10, marginTop: 4 }}>Confus</Text>
        </Pressable>

        <Pressable
          onPress={() => setHumeur("tranquille")}
          style={{
            backgroundColor: humeur === "tranquille" ? "#DBEAFE" : "#F3F4F6",
            borderRadius: 12,
            height: 80,
            width: 58,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>😌</Text>
          <Text style={{ fontSize: 10, marginTop: 4 }}>Tranquille</Text>
        </Pressable>

        <Pressable
          onPress={() => setHumeur("heureux")}
          style={{
            backgroundColor: humeur === "heureux" ? "#DBEAFE" : "#F3F4F6",
            borderRadius: 12,
            height: 80,
            width: 58,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>😁</Text>
          <Text style={{ fontSize: 10, marginTop: 4 }}>Heureux</Text>
        </Pressable>
      </View>
    </View>
  );
}
