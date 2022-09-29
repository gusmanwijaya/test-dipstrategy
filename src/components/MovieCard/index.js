import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Gap from '../Gap';
import Rating from '../Rating';

const MovieCard = ({handleDetail, uri, rating, title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleDetail}
      style={tw.style('w-[50%] mb-5')}>
      <View
        style={tw.style(
          'w-[180px] h-[235px] border-0 border-transparent overflow-hidden rounded-[15px]',
          {
            elevation: 14,
          },
        )}>
        <ImageBackground
          source={{
            uri,
          }}
          style={tw.style('w-full h-full', {
            resizeMode: 'cover',
          })}>
          <View style={tw.style('bg-slate-700 bg-opacity-30 h-full w-full')}>
            <View style={tw.style('px-2 py-2')}>
              <Rating number={rating} />
            </View>
            <Gap height={165} />
            <View style={tw.style('px-2')}>
              <Text
                numberOfLines={1}
                style={tw.style('text-white text-[16px] text-center', {
                  fontFamily: 'Poppins-Regular',
                })}>
                {title}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
