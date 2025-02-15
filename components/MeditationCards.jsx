import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function MeditationCards({
  image,
  text,
  description,
  audio,
}) {
  const navigation = useNavigation();

  function meditationDetails(image, text, description,audio) {
    navigation.navigate("MeditationDetailsScreen", {
      image: image,
      text: text,
      description: description,
      audio: audio,
    });
  }

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={() => meditationDetails(image, text, description, audio)}
    >
      <View style={styles.containerImage}>
        <Image source={image} style={styles.image} />
        <View style={{ flexWrap: "wrap" }}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    marginVertical: 30,
    borderRadius: 20,
    backgroundColor: "#535C91",
    padding: 5,
    borderRadius: 10,
  },
  image: {
    width: 180,
    height: 200,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 10,
    marginVertical: 10,
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.5,
  },
});
