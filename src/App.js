import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import Loading from './components/Loading';
import store from './redux/store';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.loadingReducers);

  return (
    <NavigationContainer>
      <Routers />
      <FlashMessage position="bottom" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
