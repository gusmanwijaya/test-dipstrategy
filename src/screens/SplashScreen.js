import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MoviesScreen');
    }, 2000);
  }, [navigation]);

  return (
    <View style={tw.style('flex-1 justify-center items-center')}>
      <Text
        style={tw.style('text-[20px]', {
          fontFamily: 'Poppins-Medium',
        })}>
        Dipstrategy
      </Text>
      <Text
        style={tw.style('text-[14px]', {
          fontFamily: 'Poppins-Light',
        })}>
        Gusman Wijaya, S.Kom
      </Text>
    </View>
  );
};

export default SplashScreen;
