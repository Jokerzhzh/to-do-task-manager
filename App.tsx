import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import "./assets/css/global.css";
import TabBar from "./conponents/nav/TabBar";
import TopBar from "./conponents/nav/TopBar";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      {/* <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      /> */}
      <StatusBar style="light" />
      <TabBar />
    </View>
  );
}

const darkBackground = "#1A1A2F";
const darkColor = "#fff";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    color: darkColor,
    backgroundColor: darkBackground,
    position: "relative",
  },
  dark: {
    color: darkColor,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
