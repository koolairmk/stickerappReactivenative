import { Stack } from "expo-router";
import React from "react";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerShown: false,
        }} />
        <Stack.Screen name="+not-found" options={{
          headerTitle: "Oops! Not Found",
        }} />
      </Stack>
      <StatusBar style="light" />
      </>
  )
}
