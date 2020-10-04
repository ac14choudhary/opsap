import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './components/Header';

//HOMESCREEN//

function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <Header titleName="Home" />
      <View style={styles.HomeScreen}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'NeueHaasDisplay-Roman',
            color: 'white',
          }}>
          One Plus
        </Text>
      </View>
    </View>
  );
}

//Gallery//

function GalleryScreen() {
  return (
    <View style={{flex: 1}}>
      <Header titleName="Gallery" />
      <View style={styles.HomeScreen}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'NeueHaasDisplay-Roman',
            color: 'white',
          }}>
          Gallery
        </Text>
      </View>
    </View>
  );
}

//TEAMSCREEN//

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
    <View style={{flex: 1, paddingBottom: 50}}>
      <Header titleName="Team" />
      <View
        style={{
          backgroundColor: '#121212',
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
                    borderRadius: 30,
                    height: 200,
                    width: 200,

                    resizeMode: 'center',
                    borderColor: '#F50514',

                    alignSelf: 'center',
                    alignItems: 'center',
                  }}
                  source={item.image}
                />
                <View
                  style={{
                    padding: 15,
                    width: '95%',
                    alignSelf: 'center',
                    borderBottomColor: '#2F2F2F',
                    borderColor: '#121212',
                    borderWidth: 1,
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

//EVENTS SCREEN//

function EventsScreen() {
  return (
    <View style={{flex: 1}}>
      <Header titleName="Events" />
      <View style={styles.EventsScreen}>
        <TouchableOpacity style={styles.EventScreenButtons}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.EventText}> Upcoming Events </Text>
            <Image
              style={{
                borderRadius: 30,
                height: 80,
                width: 80,

                resizeMode: 'center',
                borderColor: '#F50514',

                resizeMode: 'contain',
                marginLeft: 40,
              }}
              source={require('./Models/comingsoon.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.EventScreenButtons}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.EventText}> On-Going Events </Text>
            <Image
              style={{
                borderRadius: 30,
                height: 100,
                width: 100,
                resizeMode: 'center',
                borderColor: '#F50514',
                resizeMode: 'contain',
                marginLeft: 40,
              }}
              source={require('./Models/OnEvents.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.EventScreenButtons}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.EventText}> Past Events </Text>
            <Image
              style={{
                borderRadius: 30,
                height: 80,
                width: 80,
                borderColor: '#F50514',

                resizeMode: 'contain',
                marginLeft: 80,
              }}
              source={require('./Models/PastEvents.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CollaborateScreen() {
  return (
    <View style={{flex: 1}}>
      <Header titleName="Collaborations" />
      <View style={styles.CollaborateScreen}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'NeueHaasDisplay-Roman',
            color: 'white',
          }}>
          Collaboration!
        </Text>
      </View>
    </View>
  );
}

//NAVIGATION//

const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#F50514',
          inactiveBackgroundColor: '#242424',
          activeBackgroundColor: '#242424',
        }}>
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

//STYLES//

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  GalleryScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  TeamScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  EventsScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  CollaborateScreen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  TeamCard: {
    padding: 10,
    borderRadius: 12,
  },
  listText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#F50514',
    marginBottom: 10,
    fontFamily: 'NeueHaasDisplay-Mediu',
  },
  EventScreenButtons: {
    borderRadius: 10,
    opacity: 10,
    padding: 20,
    margin: 10,
    backgroundColor: '#242424',
    width: 290,
    height: 125,
  },
  EventText: {
    fontFamily: 'NeueHaasDisplay-Roman',
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
  },
});
