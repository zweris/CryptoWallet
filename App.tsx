import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {HomeScreen} from 'screens/home/homeScreen';
import {WalletScreen} from 'screens/wallet/walletScreen';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackParamList} from 'models/appStackParamList';
import {Theme} from 'theme/theme';
import {StackHeader} from 'screens/wallet/components/stackHeader';
import {WalletProvider} from 'components/walletContext';

const Stack = createStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={Theme.flex}>
        <StatusBar hidden={true} />
        <View style={Theme.flex}>
          <WalletProvider>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" options={{header: () => null}}>
                {props => <HomeScreen navigation={props.navigation} />}
              </Stack.Screen>
              <Stack.Screen
                name="Wallet"
                options={{header: props => <StackHeader props={props} />}}>
                {props => (
                  <WalletScreen
                    wallet={props.route.params.wallet}
                    navigation={props.navigation}
                  />
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </WalletProvider>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
