import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Calendrier() {
  const [selectedDate, setSelectedDate] = useState<number | null>(13);

  const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const monthName = "Mars";
  const year = 2026;
  const monthIndex = 2; // Mars = 2 car Janvier = 0

  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();

  const getDaysInMonth = () => {
    const days: { day: number | null; disabled: boolean }[] = [];

    // Ajustement pour commencer la semaine le lundi
    const startDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    for (let i = 0; i < startDayIndex; i++) {
      days.push({
        day: null,
        disabled: true,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        disabled: false,
      });
    }

    const totalDays = Math.ceil(days.length / 7) * 7;
    const remainingDays = totalDays - days.length;

    for (let i = 0; i < remainingDays; i++) {
      days.push({
        day: null,
        disabled: true,
      });
    }

    return days;
  };

  const renderDays = () => {
    const days = getDaysInMonth();
    const weeks = [];

    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7);

      weeks.push(
        <View key={i} style={styles.week}>
          {week.map((dayObj, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (!dayObj.disabled) {
                  setSelectedDate(dayObj.day);
                }
              }}
              style={[
                styles.day,
                {
                  backgroundColor:
                    dayObj.day === selectedDate ? "#4F8EF7" : "transparent",
                  opacity: dayObj.disabled ? 0 : 1,
                },
              ]}
            >
              <Text
                style={{
                  color: dayObj.day === selectedDate ? "#FFFFFF" : "#1F2937",
                  fontWeight: dayObj.day === selectedDate ? "600" : "400",
                }}
              >
                {dayObj.day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>,
      );
    }

    return weeks;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.month}>
          {monthName} {year}
        </Text>
      </View>

      <View style={styles.weekLabels}>
        {weekDays.map((day) => (
          <Text key={day} style={styles.dayLabel}>
            {day}
          </Text>
        ))}
      </View>

      {renderDays()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 14,
  },
  month: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },
  weekLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  dayLabel: {
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
    color: "#6B7280",
    fontSize: 12,
  },
  week: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  day: {
    flex: 1,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
    borderRadius: 10,
  },
});
