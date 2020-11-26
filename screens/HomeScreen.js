import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Card from '../components/Card';

import Chip from '../components/Chip';

const SPACING = 16;
const { width, height } = Dimensions.get('screen');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chips}
        keyExtractor={item => item.title}
        data={chipMenu}
        renderItem={({ item }) => {
          return <Chip title={item.title} />;
        }}
      />

      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Card
            navigation={navigation}
            imageSource={{
              uri:
                'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <Card
            navigation={navigation}
            imageSource={{
              uri:
                'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHNob2VzfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <Card
            navigation={navigation}
            imageSource={{
              uri:
                'https://images.unsplash.com/photo-1555529733-257e7d9e2ade?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODV8fHNob2VzfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <Card
            navigation={navigation}
            imageSource={{
              uri:
                'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <Card
            navigation={navigation}
            imageSource={{
              uri:
                'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <Card
            navigation={navigation}
            imageSource={{
              uri:
                'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  chips: {
    padding: 16,
  },
});

/* Internal Data */
const chipMenu = [
  { title: 'All' },
  { title: 'Lifestyle' },
  { title: 'Jordan' },
  { title: 'Running' },
  { title: 'Basketball' },
];
