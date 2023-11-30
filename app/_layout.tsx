import {
  Feather,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import * as React from "react";
import { useEffect } from "react";
import { Button, Pressable, Text, View, useColorScheme } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <MyDrawer />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
      </Stack>
    </ThemeProvider>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.openDrawer()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{ headerShown: false, detachInactiveScreens: false }}
      >
        <Drawer.Screen name="Tasks" component={MyTabs} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const Tab = createBottomTabNavigator();

function MyTabs({ navigation }) {
  const toggle = () => {
    navigation.toggleDrawer();
  };

  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#777e99",
        tabBarStyle: {
          height: 72,
          backgroundColor: "#242443",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          fontSize: 20,
          paddingTop: 10,
          paddingBottom: 15,
        },
        tabBarItemStyle: {
          width: 100,
        },
      }}
    >
      <Tab.Screen
        name="Menu"
        component={HomeScreen}
        options={{
          title: "Menu",
          tabBarButton: ({ width }) => (
            <Pressable
              style={{
                width: 98,
                height: 46,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              onPress={toggle}
            >
              <Feather
                name="grid"
                size={20}
                style={{ height: 35, position: "absolute", bottom: 3 }}
                color="#777e99"
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                  color: "#777e99",
                  position: "relative",
                }}
              >
                Menu
              </Text>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="file-check-outline"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="date" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mine"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
