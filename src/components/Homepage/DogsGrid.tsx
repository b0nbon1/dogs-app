import React from 'react';
import {FlatList} from 'react-native';
import getBreedsName from '../../utils/getDogsBreed';
import {
  BreedName,
  Card,
  CardImage,
  GridSView,
  LoaderActivity,
  LoaderContainer,
  LoaderView,
} from './styles';

const DogsGrid = ({
  data,
  fetchMoreData,
  moreLoading,
  loading,
  gotoDogImage,
}: any) => {
  const renderItem = ({item}: {item: string}) => {
    const BreedNameText = getBreedsName(item);
    return (
      <Card onPress={() => gotoDogImage(item)}>
        <CardImage source={{uri: item}} />
        <BreedName>{BreedNameText}</BreedName>
      </Card>
    );
  };

  const renderFooter = () => {
    return <LoaderView>{moreLoading && <LoaderActivity />}</LoaderView>;
  };

  return loading ? (
    <LoaderContainer>
      <LoaderActivity size="large" />
    </LoaderContainer>
  ) : (
    <GridSView>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flexGrow: 1,
        }}
        renderItem={renderItem}
        numColumns={2}
        data={data}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMoreData}
        ListFooterComponent={renderFooter}
      />
    </GridSView>
  );
};

export default DogsGrid;
