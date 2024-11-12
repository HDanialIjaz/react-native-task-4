import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const renderStar = (rating) => {
  const fullStar = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? '★' : '';
  return (
    '★'.repeat(fullStar) +
    halfStar +
    '☆'.repeat(5 - fullStar - (halfStar ? 1 : 0))
  );
};

const Product_Card = ({ card }) => {
  const { uri, name, number, rating } = card;
  return (
    <View style={style.card}>
      <View style={style.imageWraper}>
        <Image
          style={style.image}
          source={{
            uri: uri,
          }}
        />
      </View>
      <Text style={style.text}>{name}</Text>
      <Text style={style.number}>{number}</Text>
      <Text style={style.star}>{renderStar(rating)}</Text>
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    margin: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowOpacity: 0.45,
    shadowRadius: 4,
  },

  imageWraper: {
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  number: {
    fontSize: 18,
    color: 'green',
    padding: 5,
  },
  star: {
    color: 'orange',
    fontSize: 20,
    padding: 5,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default Product_Card;
