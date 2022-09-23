import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './screens/SearchScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Entertainment from './screens/Entertainment';
import Health from './screens/Health';
import Technology from './screens/Technology';
import General from './screens/General';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={{flex:1}}>
      <SafeAreaView style={{flex:.1,backgroundColor:'skyblue'}}>
      <Text style={{fontSize:27,paddingTop:20,padding:10}}>Flash News</Text>
    </SafeAreaView>
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarScrollEnabled: true,
      }}>
        <Tab.Screen name="Search" component={SearchScreen} options={{tabBarLabel: ({focused}) => <Text style = {{fontSize: 15, fontWeight: 'bold', }}> SEARCH </Text>}}/>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel: ({focused}) => <Text style = {{fontSize: 15, fontWeight: 'bold', }}> HOME </Text>}}/>
        <Tab.Screen name="International" component={General} options={{tabBarLabel: ({focused}) => <Text style = {{fontSize: 15, fontWeight: 'bold', }}> SCIENCE </Text>}}/>
        <Tab.Screen name="Sports" component={Technology} options={{tabBarLabel: ({focused}) => <Text style = {{fontSize: 15, fontWeight: 'bold', }}> TECHNOLOGY </Text>}}/>
        <Tab.Screen name="Entertainment" component={Entertainment} options={{tabBarLabel: ({focused}) => <Text style = {{fontSize: 15, fontWeight: 'bold', }}>ENTERTAINMENT</Text>}}/>
        <Tab.Screen name="Health" component={Health} options={{tabBarLabel: ({focused}) => <Text style = {{fontSize: 15, fontWeight: 'bold', }}> HEALTH </Text>}}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
