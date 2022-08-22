import React, {useEffect} from 'react';
import DogsGrid from '../components/Homepage/DogsGrid';
import HeaderHome from '../components/Homepage/HeaderHome';
import {MainContainer} from '../components/Homepage/styles';
import {getAllDogsAction} from '../store/actions/dogsAction';
import {useAppDispatch, useAppSelector} from '../store/hooks';

const HomePage = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const dogsList = useAppSelector(state => state.dogsListState.data);
  const dogsListLoading = useAppSelector(state => state.dogsListState.loading);
  const dogsListMoreloading = useAppSelector(
    state => state.dogsListState.moreLoading,
  );
  const getDogsList = async (page: number) => {
    await dispatch(getAllDogsAction(page) as any);
  };
  const fetchMoreData = async () => {
    await getDogsList(2);
  };
  const gotoDogImage = (url: string) => {
    navigation.navigate('SingleDogScreen', {
      imageUrl: url,
    });
  };
  useEffect(() => {
    getDogsList(1);
  }, []);
  return (
    <MainContainer>
      <HeaderHome />
      <DogsGrid
        data={dogsList}
        loading={dogsListLoading}
        moreLoading={dogsListMoreloading}
        fetchMoreData={fetchMoreData}
        gotoDogImage={gotoDogImage}
      />
    </MainContainer>
  );
};

export default HomePage;
