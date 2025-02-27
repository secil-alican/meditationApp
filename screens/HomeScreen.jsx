import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import MeditationCards from "../components/MeditationCards";

export default function HomeScreen() {
  return (
    <ScrollView>
      <ImageBackground source={require("../assets/images/home.jpeg")}>
        <View style={styles.container}>
          <MeditationCards
            image={require("../assets/images/confidence.jpg")}
            text="Özgüven & Kararlılık Meditasyonu"
            description="Zihnindeki sınırları aşarak, hedeflerine kararlılıkla ilerleyebilirsin. Şimdi derin bir nefes al ve kendi gücünü keşfetmeye başla. ✨"
            audio={require("../assets/audio/özgüvenVeKararlılık.mp3")}
          />
          <MeditationCards
            image={require("../assets/images/deepBreath.jpg")}
            text=" Derin Nefes Meditasyonu"
            description="Zihnini sakinleştirir ve bedenini rahatlatır. Her nefeste stresini bırak, içsel huzuru bul ve anda kal. Derin nefes alarak, zihnini temizle ve kendini yenile. Şimdi derin bir nefes al ve rahatlamaya başla. 🌿"
            audio={require("../assets/audio/derinNefesAlma.mp3")}
          />
          <MeditationCards
            image={require("../assets/images/focus.jpg")}
            text=" Odaklanma Meditasyonu"
            description="Zihnini tek bir noktada toplamanı sağlar. Düşüncelerinin dağılmasına izin verme, sadece şu anki anı hisset. Bu meditasyon, içsel huzuru ve berraklığı artırarak daha derin bir odaklanma sağlar. Şimdi nefesini derinleştir ve tamamen odaklanmaya başla. 🎯"
            audio={require("../assets/audio/odaklanma.mp3")}
          />
          <MeditationCards
            image={require("../assets/images/happy.jpg")}
            text="Mutluluk ve Pozitif Enerji Meditasyonu"
            description="Ruhunu besler ve içindeki pozitif enerjiyi ortaya çıkarır. Her nefeste mutluluğa odaklan, olumsuz düşünceleri bırak ve yaşamın sunduğu güzel şeylere minnettarlık duy. Şimdi gözlerini kapat, derin bir nefes al ve pozitif enerjini hissetmeye başla. 🌟"
            audio={require("../assets/audio/mutluluk.mp3")}
          />
          <MeditationCards
            image={require("../assets/images/loveYourself.jpg")}
            text="Kendini Sevme Meditasyonu"
            description="Kendini olduğu gibi kabul etmeyi ve nazik bir şekilde sevgiyle sarılmayı sağlar. İçindeki olumsuz düşünceleri bırak, kendine şefkat göster ve ruhunu iyileştir. Şimdi derin bir nefes al, kalbini aç ve kendine nazikçe sevgini gönder. 💖"
            audio={require("../assets/audio/kendiniSevme.mp3")}
          />
          <MeditationCards
            image={require("../assets/images/reduceStress.jpg")}
            text="Stres Azaltma Meditasyonu"
            description="Zihnindeki gerginliği ve kaygıyı hafifletir. Derin nefes alarak, tüm stresi vücudundan atıp huzuru bul. Şimdi gözlerini kapat, her nefeste rahatla ve içsel sakinliğe ulaş. 🌿"
            audio={require("../assets/audio/stresiAzaltma.mp3")}
          />
          <MeditationCards
            image={require("../assets/images/sleep.jpg")}
            text="Uyku Meditasyonu"
            description="Zihnini ve bedenini uykuya hazırlayarak rahatlamanı sağlar. Derin nefes al, bedenindeki gerginliği bırak ve huzur içinde uykuya geç. Şimdi gözlerini kapat, bedenini gevşet ve uykuya doğru yelken aç. 🌙"
            audio={require("../assets/audio/uyku.mp3")}
          />
          <MeditationCards
            image={require("../assets/images/yoga.jpg")}
            text="Yoga ile Meditasyon"
            description="Bedenin ve zihnin uyum içinde çalıştığı bir pratiktir. Yoga pozlarıyla bedenini gevşetirken, derin nefesler alarak zihnini sakinleştirirsin. Bu meditasyon türü, dengeyi ve huzuru artırır, içsel dinginliği bulmanı sağlar. Şimdi bedenini nazikçe hareket ettir, nefesini takip et ve içsel huzura ulaş. 🧘‍♀️"
            audio={require("../assets/audio/yoga.mp3")}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginVertical: 20,
  },
});
