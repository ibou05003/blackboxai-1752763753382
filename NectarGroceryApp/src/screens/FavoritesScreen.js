import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Sprite Can',
      unit: '325ml, Price',
      price: 1.99,
      color: '#53B175',
    },
    {
      id: 2,
      name: 'Diet Coke',
      unit: '355ml, Price',
      price: 1.99,
      color: '#F8A44C',
    },
    {
      id: 3,
      name: 'Apple & Grape Juice',
      unit: '2L, Price',
      price: 15.99,
      color: '#F7A593',
    },
    {
      id: 4,
      name: 'Coca Cola Can',
      unit: '325ml, Price',
      price: 4.99,
      color: '#D3B0E0',
    },
    {
      id: 5,
      name: 'Pepsi Can',
      unit: '330ml, Price',
      price: 4.99,
      color: '#FDE598',
    },
  ]);

  const removeFavorite = (id) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    // In a real app, this would add to cart context/state
    console.log('Added to cart:', item.name);
  };

  const FavoriteItem = ({ item }) => (
    <View style={styles.favoriteItem}>
      <View style={styles.itemLeft}>
        <View style={[styles.itemImage, { backgroundColor: item.color + '40' }]} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemUnit}>{item.unit}</Text>
        </View>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeFavorite(item.id)}
        >
          <Ionicons name="close" size={20} color="#B3B3B3" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourite</Text>
      </View>

      {favorites.length === 0 ? (
        <View style={styles.emptyFavorites}>
          <Ionicons name="heart-outline" size={80} color="#B3B3B3" />
          <Text style={styles.emptyFavoritesText}>No favourites yet</Text>
          <Text style={styles.emptyFavoritesSubtext}>Add items to your favourites to see them here</Text>
        </View>
      ) : (
        <>
          {/* Favorites List */}
          <FlatList
            data={favorites}
            renderItem={({ item }) => <FavoriteItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={styles.favoritesList}
            showsVerticalScrollIndicator={false}
          />

          {/* Add All To Cart Button */}
          <View style={styles.bottomSection}>
            <TouchableOpacity 
              style={styles.addAllButton}
              onPress={() => {
                favorites.forEach(item => addToCart(item));
                navigation.navigate('Cart');
              }}
            >
              <Text style={styles.addAllButtonText}>Add All To Cart</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#181725',
  },
  emptyFavorites: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyFavoritesText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#181725',
    marginTop: 20,
    marginBottom: 10,
  },
  emptyFavoritesSubtext: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
  },
  favoritesList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  itemLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 5,
  },
  itemUnit: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  itemRight: {
    alignItems: 'flex-end',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 10,
  },
  removeButton: {
    padding: 5,
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
  addAllButton: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    paddingVertical: 20,
    alignItems: 'center',
  },
  addAllButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default FavoritesScreen;
