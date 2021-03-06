import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingScreen from "./screens/Landing";
import HomeScreen from './screens/Home';
import Faqs from "./screens/Faqs";
import Aboutus from './screens/About Us';

const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer style={styles.navigationContainer}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Digital Currencies" component={LandingScreen} />
        <Tab.Screen name="Faqs" component={Faqs} />
        <Tab.Screen name="About Us" component={Aboutus} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = ({
  navigationContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabNavigator: {

  },
});


export default App;