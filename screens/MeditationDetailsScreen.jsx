import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import AntDesign from "@expo/vector-icons/AntDesign";
import Slider from "@react-native-community/slider";

export default function MeditationDetailsScreen({ route }) {
  const { image, text, description, audio } = route.params;
  const [sound, setSound] = useState();
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    navigation.setOptions({ title: text });
  }, []);

  const playSound = async () => {
    const { sound, status } = await Audio.Sound.createAsync(
      audio,
      { positionMillis: position },
      onPlaybackStatusUpdate
    );
    setSound(sound);
    await sound.playAsync();
    setIsPlaying(true);
    setDuration(status.durationMillis);
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isPlaying) {
      setPosition(status.positionMillis);
    }
  };

  const pauseSound = async () => {
    await sound.pauseAsync();
    setIsPlaying(false);
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <ImageBackground
      source={require("../assets/images/home.jpeg")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.desc}>{description}</Text>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onValueChange={setPosition}
          onSlidingComplete={async (value) => {
            if (sound) {
              try {
                await sound.pauseAsync();
                await sound.setPositionAsync(value);
                if (isPlaying) {
                  await sound.playAsync();
                }
              } catch (error) {
                console.log("Hata oluştu:", error);
              }
            }
          }}
          thumbTintColor="#fff"
          minimumTrackTintColor="#fff"
        />

        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formatTime(position)}</Text>
          <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            onPress={isPlaying ? pauseSound : playSound}
          >
            <AntDesign
              name={isPlaying ? "pausecircleo" : "playcircleo"}
              size={40}
              color="#fff"
            />
          </Pressable>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    resizeMode: "cover",
  },
  container: {
    flex:1,
    marginHorizontal: 10,
    marginVertical: 30,
    backgroundColor: "#1B1A55",
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-evenly",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  desc: {
    color: "#fff",
    fontWeight: "300",
  },
  pressed: {
    opacity: 0.5,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    color: "#fff",
    fontSize: 14,
  },
});
