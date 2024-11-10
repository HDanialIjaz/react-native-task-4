import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

const Product_Card = () => {
  return (
    <View style = {style.card}>
      <View style = {style.imageWraper}>
        <Image style={style.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsaym1x_R9IVJPmLjk6lupW_zHe0asMb13ZU6NnujqFuDK0YQdWTom13LOLfGpmWFJVsc&usqp=CAU'
          }}
        />
      </View>
      <Text style = {style.text}>Nikon Camera</Text>
      <Text style = {style.number}>$49.99</Text>
      <Text style = {style.star}>★★★★☆</Text>
      <TouchableOpacity style={style.button}>
      <Text style={style.buttonText}>Add to card</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create ({
  card:{
    margin:20,
    padding:10,
    borderRadius:10,
    alignItems:'center',
    shadowOpacity:0.15,
    shadowRadius:4,
    
  },
  
  imageWraper:{
    borderRadius:10,
    margin:10,
  },
  image:{
    width:250,
    height:150,
    borderRadius:30,
    
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    padding:5,
  },
  number:{
    fontSize:18,
    color: 'green',
    padding:5,
  },
  star:{
    color:'orange',
    fontSize:20,
    padding:5,
  },
  button:{
    backgroundColor:'blue',
    borderRadius:20,
    paddingHorizontal:20,
    paddingVertical:15,
    margin:15,
  },
  buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
});
export default Product_Card;
