import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import calendarIcon from "../../assets/icons/calendar.svg";
import calendar_active from "../../assets/icons/calendar_active.svg";
import menuIcon from "../../assets/icons/menu.svg";
import mineIcon from "../../assets/icons/mine.svg";
import mine_active from "../../assets/icons/mine_active.svg";
import tasksIcon from "../../assets/icons/tasks.svg";
import tasks_active from "../../assets/icons/tasks_active.svg";

const tabs = [
  {
    name: "Menu",
    icon: "Menu",
    icon: menuIcon,
    callback: () => {
      console.log("Click");
    },
  },
  {
    name: "Tasks",
    icon: tasksIcon,
    active: tasks_active,
    callback: () => {
      console.log("GoTo");
    },
  },
  {
    name: "Calendar",
    icon: calendarIcon,
    active: calendar_active,
    callback: () => {
      console.log("GoTo");
    },
  },
  {
    name: "Mine",
    icon: mineIcon,
    active: mine_active,
    callback: () => {
      console.log("GoTo");
    },
  },
];

const TabBar = () => {
  const [nowTab, setNowTab] = useState("Tasks");

  const handleTab = ({ name, callback }: any) => {
    if (name === nowTab) return;
    callback();
    if (name !== "Menu") setNowTab(name);
  };

  return (
    <View style={styles.TabBar}>
      {tabs.map((tab) => (
        <Pressable
          key={tab.name}
          style={styles.tabs}
          underlayColor="transparent"
          onPress={() => handleTab(tab)}
          style={
            nowTab === tab.name
              ? { ...styles.tabs, ...styles.active }
              : styles.tabs
          }
        >
          <Image
            style={styles.images}
            source={nowTab === tab.name ? tab.active : tab.icon}
          />
          <Text
            style={styles.texts}
            style={{
              color: nowTab === tab.name ? activeColor : defaultColor,
            }}
          >
            {tab.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const defaultColor = "#777e99";
const activeColor = "#fff";

const styles = StyleSheet.create({
  TabBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    color: "red",
    position: "absolute",
    bottom: 0,
    padding: 8,
    backgroundColor: "#242443",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: "space-around",
  },
  tabs: {
    flexDirection: "cloumn",
    justifyContent: "space-between",
    alignItems: "center",
    width: 60,
    height: 64,
    fontSize: 12,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  active: {
    borderWidth: 1,
    borderColor: "#7454F8",
    borderStyle: "solid",
    borderRadius: 10,
  },
  images: {
    height: 26,
    width: 26,
  },
  texts: {
    width: "100%",
    textAlign: "center",
    color: defaultColor,
  },
});

export default TabBar;
