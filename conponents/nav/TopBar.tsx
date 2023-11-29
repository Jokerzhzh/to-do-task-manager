import { Image } from "expo-image";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import avatar from "../../assets/images/avatar.jpg";

const TopBar = () => {
  const [name, setName] = useState("Joshitha");

  const [keepDays, setDays] = useState(1);
  return (
    <View style={styles.TopBar}>
      <Image style={styles.image} source={avatar} />
      <Text style={styles.name}>Hello {name}</Text>
      <Text style={styles.days}>Keep Plan For {keepDays} Day</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TopBar: {
    width: "100%",
    height: 94,
    backgroundColor: "#242443",
    borderEndStartRadius: 20,
    borderEndEndRadius: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#7A12FF",
    borderTopColor: "#242443",
    padding: 20,
    paddingLeft: 16,
    display: "grid",
    gridTemplateColumns: "66px 1fr",
    gridTemplateRows: "auto auto",
    gridTemplateAreas: `
      "image name"
      "image days"
    `,
  },
  image: {
    width: 54,
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 20,
    gridArea: "image",
  },
  name: {
    color: "#fff",
    fontSize: 16,
    gridArea: "name",
  },
  days: {
    color: "#fff",
    fontSize: 18,
    gridArea: "days",
    fontWeight: "bold",
  },
});

export default TopBar;
