import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {Linking} from 'react-native';
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
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  alignItems: 'center',
                }}
                source={require('./Models/Spotify.png')}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontFamily: 'NeueHaasDisplay-Roman',
                  padding: 10,
                }}
                onPress={() =>
                  Linking.openURL(
                    'https://open.spotify.com/playlist/1SeGoo6wWZFg4Kbz27475X?si=AZ-cyEL8Reuy7UMGYrwipQ',
                  )
                }>
                Sportify
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  height: 20,
                  width: 20,

                  resizeMode: 'center',
                  alignItems: 'center',
                }}
                source={require('./Models/instagram.png')}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontFamily: 'NeueHaasDisplay-Roman',
                  padding: 10,
                }}
                onPress={() =>
                  Linking.openURL(
                    'https://www.instagram.com/oneplus_sap/?igshid=yeipvjydv0l7',
                  )
                }>
                Instagram
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#121212',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={styles.listview1}
              onPress={() => {
                //  navigation.navigate('GalleryScreen');
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.listText1}>Gallery</Text>
                <Image
                  style={{
                    height: 60,
                    width: 60,
                    resizeMode: 'contain',
                    margin: 20,
                    alignSelf: 'center',
                    marginBottom: -10,
                  }}
                  source={require('./Models/gallery1.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listview1}
              onPress={() => {
                //  navigation.navigate('TeamScreen');
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  borderColor: '#F50514',
                }}>
                <Text style={styles.listText1}>Team</Text>
                <Image
                  style={{
                    height: 60,
                    width: 60,
                    resizeMode: 'contain',
                    margin: 20,
                    alignSelf: 'center',
                    marginBottom: -10,
                  }}
                  source={require('./Models/team1.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#121212',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={styles.listview1}
              onPress={() => {
                // navigation.navigate('EventsScreen');
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.listText1}>Events</Text>
                <Image
                  style={{
                    height: 60,
                    width: 60,
                    resizeMode: 'contain',
                    margin: 20,
                    alignSelf: 'center',
                    marginBottom: -10,
                  }}
                  source={require('./Models/event1.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listview1}
              onPress={() => {
                // navigation.navigate('CollaborateScreen');
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  borderColor: '#F50514',
                }}>
                <Text style={styles.listText1}>Collab</Text>
                <Image
                  style={{
                    height: 60,
                    width: 60,
                    resizeMode: 'contain',
                    margin: 20,
                    alignSelf: 'center',
                    marginBottom: -10,
                  }}
                  source={require('./Models/collab1.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
          ! Reload to access Gallery !
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
        <TouchableOpacity style={styles.EventScreenButtons} onPress>
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

//
//
//
//
//
//
//collaboration
//
//
//
//
//
//
//

function CollaborateScreen() {
  return (
    <View style={{flex: 1}}>
      <Header titleName="Collaborations" />
      <View style={styles.CollaborateScreen}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'NeueHaasDisplay-Roman',
            color: 'white',
          }}>
          Your Name
        </Text>
        <TextInput
          style={{
            color: 'white',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            width: 300,
            margin: 20,
          }}
          underlineColorAndroid="transparent"
        />
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'NeueHaasDisplay-Roman',
            color: 'white',
          }}>
          Event
        </Text>
        <TextInput
          style={{
            color: 'white',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            width: 300,
            margin: 20,
          }}
          underlineColorAndroid="transparent"
        />
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'NeueHaasDisplay-Roman',
            color: 'white',
          }}>
          Why should we collaborate with you?
        </Text>
        <TextInput
          style={{
            color: 'white',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            width: 300,
            maxHeight: 60,
            margin: 20,
          }}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 2,
            padding: 10,
          }}
          //onPress={() => Alert.alert('ThankYou')}
        >
          <Text style={{color: 'black', fontSize: 25, fontStyle: 'normal'}}>
            Submit
          </Text>
        </TouchableOpacity>
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
  listview1: {
    marginHorizontal: 20,
    marginVertical: 13,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#242424',
    color: '#FFFFFF',
    borderRadius: 12,
    borderColor: '#F50514',
    borderWidth: 0.5,
  },

  listText1: {
    fontSize: 17,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
});
