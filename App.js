import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen() {
  return (
    <View style={styles.HomeScreen}>
      <Text>Home!</Text>
    </View>
  );
}

function GalleryScreen() {
  return (
    <View style={styles.GalleryScreen}>
      <Text>Gallery!</Text>
    </View>
  );
}

function TeamScreen() {
  const [Tdata, setTData] = useState([
    {
      id: '1',
      name: 'Advait Karmakar',
      image: require('./Models/team/1.jpg'),
    },
    {
      id: '2',
      name: 'Atishay Jain',
      image: require('./Models/team/2.jpeg'),
    },
    {
      id: '3',
      name: 'Dev Sabharwal',
      image: require('./Models/team/3.jpg'),
    },
    {
      id: '4',
      name: 'Dhruv Shetty',
      image: require('./Models/team/4.jpg'),
    },
    {
      id: '5',
      name: 'Kaashvi Saxena',
      image: require('./Models/team/5.jpeg'),
    },
    {
      id: '6',
      name: 'Pratyush Agarwal',
      image: require('./Models/team/6.jpg'),
    },
    {
      id: '7',
      name: 'Sarthak Soral',
      image: require('./Models/team/7.jpg'),
    },
    {
      id: '8',
      name: 'Suparna Mukherji',
      image: require('./Models/team/8.jpg'),
    },
  ]);
  const pressIHandler = (id) => {
    console.log(id);
  };
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        paddingVertical: 10,
      }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Tdata}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.TeamCard}
            onPress={() => pressIHandler(item.id)}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.listText}>{item.name}</Text>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  resizeMode: 'center',

                  alignSelf: 'center',
                  alignItems: 'center',
                }}
                source={item.image}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// function TeamScreen() {
//   return (
//     <View style={styles.TeamScreen}>
//       <Text>Team!</Text>
//     </View>
//   );
// }

function EventsScreen() {
  return (
    <View style={styles.EventsScreen}>
      <Text>Events!</Text>
    </View>
  );
}
function CollaborateScreen() {
  return (
    <View style={styles.CollaborateScreen}>
      <Text>Collaboration!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <View>
                <Image
                  style={{height: 24, width: 24, resizeMode: 'contain'}}
                  source={require('./Models/home.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            tabBarLabel: 'Gallery',
            title: 'Gallery',
            tabBarIcon: ({color, size}) => (
              <View>
                <Image
                  style={{height: 24, width: 24, resizeMode: 'contain'}}
                  source={require('./Models/gallery.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Team"
          component={TeamScreen}
          options={{
            tabBarLabel: 'Team',
            tabBarIcon: ({color, size}) => (
              <View>
                <Image
                  style={{height: 24, width: 24, resizeMode: 'contain'}}
                  source={require('./Models/team.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarLabel: 'Events',
            tabBarIcon: ({color, size}) => (
              <View>
                <Image
                  style={{height: 24, width: 24, resizeMode: 'contain'}}
                  source={require('./Models/events.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Collab"
          component={CollaborateScreen}
          options={{
            tabBarLabel: 'Collab',
            tabBarIcon: ({color, size}) => (
              <View>
                <Image
                  style={{height: 25, width: 25, resizeMode: 'contain'}}
                  source={require('./Models/collab.png')}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  GalleryScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  TeamScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  EventsScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  CollaborateScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  TeamCard: {
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#666666',
    color: '#868686',
    borderRadius: 12,
  },
  listText: {
    fontSize: 17,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
});