import { Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E5E7EB",
          height: 70,
          paddingBottom: 10,
        },

        tabBarActiveTintColor: "#000000",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/home.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="rendezvous"
        options={{
          title: "Rendez-vous",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/calendar.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/book.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="conseils"
        options={{
          title: "Conseils",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/lightbulb.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
