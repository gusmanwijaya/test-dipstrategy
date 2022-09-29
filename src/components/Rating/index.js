import {Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import IconStarOn from '../../assets/icons/ic-star-on.svg';

const Rating = ({number, type, vote_count}) => {
  return (
    <View style={tw.style('flex-row')}>
      <View style={tw.style('flex-row mr-[4px]')}>
        <IconStarOn />
      </View>
      <Text
        style={tw.style(
          `text-[13px] ${
            type === 'DetailMovieScreen' ? 'text-slate-500' : 'text-white'
          }`,
          {
            fontFamily: 'Poppins-Light',
          },
        )}>
        {type === 'DetailMovieScreen'
          ? `${parseFloat(number).toFixed(1)} (${vote_count})`
          : parseFloat(number).toFixed(1)}
      </Text>
    </View>
  );
};

export default Rating;
