import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

const Card = ({ imageSource, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.cover} />
        <View style={styles.logoWrapper}>
          <Text style={styles.logo}>
            <AntDesign name="star" size={12} color="gold" />
          </Text>
          <Text style={styles.rating}>4.6</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.price}>$99.00</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.name}>Downshifter 12</Text>
            <Text>
              <FontAwesome name="bookmark-o" size={16} color="#666" />
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: (width - 32) / 2 - 6,
    backgroundColor: '#fff',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 12,
    // paddingVertical: 8,
    // paddingHorizontal: 16,
  },
  cover: {
    width: '100%',
    height: width / 2,
  },
  logoWrapper: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    padding: 12,
  },
  logo: {
    marginRight: 4,
  },
  rating: {
    fontWeight: 'bold',
    color: '#222',
  },
  price: {
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  content: {
    padding: 12,
  },

  name: {
    fontSize: 12,
    color: '#666',
  },
});
