import React from 'react';
import { View, ScrollView } from 'react-native';
import Product_Card from './card';

const card = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsaym1x_R9IVJPmLjk6lupW_zHe0asMb13ZU6NnujqFuDK0YQdWTom13LOLfGpmWFJVsc&usqp=CAU',
  name: 'Nikon Camera',
  number: '$49.99',
  rating: '0.5',
};

const App = () => {
  return (
    <ScrollView>
      <Product_Card card={card} />
      <Product_Card card={card} />
    </ScrollView>
  );
};
export default App;
