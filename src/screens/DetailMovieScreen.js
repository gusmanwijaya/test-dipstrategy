import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import {useNavigation, useRoute} from '@react-navigation/native';
import {fetchDetailMovie} from '../redux/movies/actions';
import {useDispatch, useSelector} from 'react-redux';
import {REACT_APP_API_IMAGE} from '@env';
import {WebView} from 'react-native-webview';
import IconBackWhite from '../assets/icons/ic-back-white.svg';
import IconBack from '../assets/icons/ic-back.svg';
import Rating from '../components/Rating';
import Loading from '../components/Loading';
import Gap from '../components/Gap';

const DetailMovieScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const dispatch = useDispatch();

  const {detail} = useSelector(state => state?.moviesReducers);

  useEffect(() => {
    dispatch(fetchDetailMovie(params?.id));
  }, [dispatch, params?.id]);

  const [isWebViewOpen, setIsWebViewOpen] = useState(false);
  const [homePageURL, setHomePageURL] = useState('https://gusmanwijaya.com');

  useEffect(() => {
    setHomePageURL(detail?.homepage);
  }, [detail?.homepage]);

  if (isWebViewOpen) {
    return (
      <>
        <View
          style={tw.style('h-[50px] pb-[10px] pt-[16px] pl-[22px] bg-white')}>
          <TouchableOpacity
            style={tw.style('w-full h-[30px]')}
            activeOpacity={0.7}
            onPress={() => setIsWebViewOpen(false)}>
            <View style={tw.style('flex-row items-center')}>
              <IconBack />
              <Gap width={15} />
              <Text
                style={tw.style('text-[14px] text-slate-500', {
                  fontFamily: 'Poppins-Regular',
                })}>
                Back To App
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <WebView
          source={{uri: homePageURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
        />
      </>
    );
  }

  return (
    <View style={tw.style('flex-1')}>
      <ImageBackground
        source={{uri: `${REACT_APP_API_IMAGE}${detail?.backdrop_path}`}}
        style={tw.style('h-[330px] pt-[26px] pl-[22px]')}>
        <TouchableOpacity
          style={tw.style('w-[30px] h-[30px] justify-center items-center')}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <IconBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={tw.style(
          'bg-white rounded-tl-[40px] rounded-tr-[40px] mt-[-40px] pt-[26px] px-[16px] flex-1',
        )}>
        <View style={tw.style('flex-1')}>
          <View
            style={tw.style('flex-row justify-between items-center mb-[14px]')}>
            <View>
              <Text
                style={tw.style('text-[16px] text-[#020202]', {
                  fontFamily: 'Poppins-Regular',
                })}>
                {detail?.original_title}
              </Text>
              <Rating
                number={detail?.vote_average}
                type="DetailMovieScreen"
                vote_count={detail?.vote_count}
              />
            </View>
            <Text>{detail?.release_date}</Text>
          </View>
          <Text
            style={tw.style('text-[14px] text-[#8D92A3] mb-[16px]', {
              fontFamily: 'Poppins-Regular',
            })}>
            {detail?.overview}
          </Text>
          {detail?.homepage && (
            <>
              <Text
                style={tw.style('text-[14px] text-[#020202] mb-[4px]', {
                  fontFamily: 'Poppins-Regular',
                })}>
                Home page :
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setIsWebViewOpen(true)}>
                <Text
                  style={tw.style('text-[14px] text-[#8D92A3] mb-[16px]', {
                    fontFamily: 'Poppins-Regular',
                  })}>
                  {detail?.homepage}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={tw.style('flex-row items-center py-[16px]')}>
          <View style={tw.style('flex-1')}>
            <Text
              style={tw.style('text-[13px] text-[#8D92A3]', {
                fontFamily: 'Poppins-Regular',
              })}>
              Status :
            </Text>
            <Text
              style={tw.style(
                `text-[13px] ${
                  detail?.status === 'Released'
                    ? 'text-green-500'
                    : 'text-red-500'
                }`,
                {
                  fontFamily: 'Poppins-Light',
                },
              )}>
              {detail?.status}
            </Text>
          </View>
          {detail?.homepage && (
            <View style={tw.style('px-[8px]')}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setIsWebViewOpen(true)}>
                <View style={tw.style('bg-sky-500 p-[12px] rounded-[8px]')}>
                  <Text
                    style={tw.style('text-[14px] text-white text-center', {
                      fontFamily: 'Poppins-Medium',
                    })}>
                    Home Page
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default DetailMovieScreen;
