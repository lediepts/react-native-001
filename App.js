import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert, Button, Text } from 'react-native';
import First from './first';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        <Stack.Screen name="first" component={First} options={{ title: 'First' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  const name = "diep"
  return (
    <>
      <Button
        title={`Go to Jane's ${name}`}
        onPress={() =>
          navigation.navigate('Profile', { name })
        }
      />
      <Button
        title={`Go to first`}
        onPress={() =>
          navigation.navigate('first')
        }
      />
    </>

  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile
    <Button
      title="click me"
      onPress={() => {
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed')
          },
          { text: 'OK', onPress: () => console.log('OK Pressed'), style: "destructive" },
        ]);
      }
      }
    />
  </Text>;
};


