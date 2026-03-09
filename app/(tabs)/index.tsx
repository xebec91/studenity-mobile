import { ScrollView, Text, View } from "react-native";

import AccesRapide from "../components/AccesRapide";
import Header from "../components/Header";
import HistoriqueStress from "../components/HistoriqueStress";
import ScoreMental from "../components/ScoreMental";
import SuiviQuotidien from "../components/SuiviQuotidien";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F7F9FC" }}>
      <Header />

      <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "#1F2937",
          }}
        >
          Bonjour Lucas 👋
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#6B7280",
            marginTop: 6,
          }}
        >
          Comment vous sentez-vous aujourd&apos;hui ?
        </Text>
      </View>

      <SuiviQuotidien />

      <ScoreMental />

      <HistoriqueStress />

      <AccesRapide />
    </ScrollView>
  );
}
