import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6eb681',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#00380f',
          height: 50,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="energias"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="earth" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="calculadora"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="calculator" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
