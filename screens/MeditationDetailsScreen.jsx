import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function MeditationDetailsScreen({ route }) {
  const { image, text, description } = route.params;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: text });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "%100",
    height: 300,
    borderRadius: 10,
    resizeMode: "cover",
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 30,
    backgroundColor: "#535C91",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    marginVertical: 20,
    color: "#fff",
    fontSize: 20,
  },
  desc: {
    color: "#fff",
    fontWeight: "300",
  },
});
