import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreen,
  PinScreen,
  HomeScreen,
  WithdrawScreen,
  SettingScreen,
  OTPScreen,
} from "@features";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { navigationRef } from "./root-navigation";

const Stack = createNativeStackNavigator();
const AuthenStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthenStackScreen = () => {
  return (
    <AuthenStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenStack.Screen name="Login" component={LoginScreen} />
      <AuthenStack.Screen name="OTP" component={OTPScreen} />
      <AuthenStack.Screen name="Pin" component={PinScreen} />
    </AuthenStack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Withdraw"
        component={WithdrawScreen}
        options={{
          tabBarLabel: "Withdraw",
          tabBarIcon: ({ color, size }) => (
            <Icon name="cash-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Authen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Authen" component={AuthenStackScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
