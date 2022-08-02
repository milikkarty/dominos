import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.main}>

        <ScrollView style={styles.menu} horizontal>
          <View style={styles.menuItem}>
            <Image />
          </View>
          <View style={styles.menuItem}>
            <Image />
          </View>
          <View style={styles.menuItem}>
            <Image />
          </View>
          <View style={styles.menuItem}>
            <Image />
          </View>
        </ScrollView>

        <ScrollView style={styles.news} horizontal>
          <View style={styles.newsCard}>
            <Image />
            <Text>-30%</Text>
          </View>
          <View style={styles.newsCard}>
            <Image />
            <Text>-30%</Text>
          </View>
          <View style={styles.newsCard}>
            <Image />
            <Text>-30%</Text>
          </View>
          <View style={styles.newsCard}>
            <Image />
            <Text>-30%</Text>
          </View>
          <View style={styles.newsCard}>
            <Image />
            <Text>-30%</Text>
          </View>
        </ScrollView>

        <Text style={styles.heading}>Check out these pizzas!</Text>

        <View style={styles.pizza}>
          <View style={styles.pizzaCard}>
            <Image />
            <Text>Pizza</Text>
          </View>
          <View style={styles.pizzaCard}>
            <Image />
            <Text>Pizza</Text>
          </View>
          <View style={styles.pizzaCard}>
            <Image />
            <Text>Pizza</Text>
          </View>
          <View style={styles.pizzaCard}>
            <Image />
            <Text>Pizza</Text>
          </View>
          <View style={styles.pizzaCard}>
            <Image />
            <Text>Pizza</Text>
          </View>
          <View style={styles.pizzaCard}>
            <Image />
            <Text>Pizza</Text>
          </View>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0
  },
  main: {},
  menu: {
    marginBottom: 20,
    marginHorizontal: 5
  },
  menuItem: {
    backgroundColor: 'blue',
    height: 100,
    marginHorizontal: 20,
    width: 55
  },
  news: {
    paddingBottom: 10,
    marginHorizontal: 20
  },
  newsCard: {
    backgroundColor: 'red',
    height: 100,
    marginHorizontal: 5,
    width: 300
  },
  heading: {
    fontSize: 20,
    marginLeft: 25
  },
  pizza: {
    alignItems: 'center'
  },
  pizzaCard: {
    backgroundColor: 'green',
    height: 200,
    marginVertical: 20,
    width: '80%'
  }
});
