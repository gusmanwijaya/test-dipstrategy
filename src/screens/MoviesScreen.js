import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies, setPage} from '../redux/movies/actions';
import {REACT_APP_API_IMAGE} from '@env';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const MoviesScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {movies, page, total_page} = useSelector(
    state => state?.moviesReducers,
  );

  const handlePrevious = () => {
    dispatch(setPage(page <= 1 ? 1 : page - 1));
  };

  const handleNext = () => {
    dispatch(setPage(page === total_page ? total_page : page + 1));
  };

  const handleGoToFirst = () => {
    dispatch(setPage(1));
  };

  const handleGoToEnd = () => {
    dispatch(setPage(total_page));
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, page]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      dispatch(fetchMovies());
    }, 500);
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {movies?.length > 0 ? (
        <>
          <View style={tw.style('flex-row flex-wrap py-5 pl-[16px]')}>
            {movies?.map((value, index) => (
              <MovieCard
                key={index}
                handleDetail={() =>
                  navigation.navigate('DetailMovieScreen', {id: value?.id})
                }
                rating={value?.vote_average}
                title={value?.original_title}
                uri={`${REACT_APP_API_IMAGE}${value?.poster_path}`}
              />
            ))}
          </View>
          <View style={tw.style('pb-6 flex-row justify-center items-center')}>
            <Pagination
              page={page}
              total_page={total_page}
              handleGoToFirst={handleGoToFirst}
              handleGoToEnd={handleGoToEnd}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          </View>
        </>
      ) : (
        <View style={tw.style('flex-1 justify-center items-center')}>
          <Text
            style={tw.style('text-[16px] text-center text-slate-500', {
              fontFamily: 'Poppins-Regular',
            })}>
            Movie not yet available!
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default MoviesScreen;
