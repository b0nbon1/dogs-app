import React, {useEffect} from 'react';
import DogsGrid from '../components/Homepage/DogsGrid';
import {MainContainer} from '../components/Homepage/styles';
import {getAllDogsAction} from '../store/actions/dogsAction';
import {useAppDispatch, useAppSelector} from '../store/hooks';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const dogsList = useAppSelector(state => state.dogsListState.data);
  const getDogsList = async (page: number) => {
    await dispatch(getAllDogsAction(page) as any);
  };
  useEffect(() => {
    getDogsList(1);
  }, []);
  return (
    <MainContainer>
      <DogsGrid data={dogsList} />
    </MainContainer>
  );
};

export default HomePage;
