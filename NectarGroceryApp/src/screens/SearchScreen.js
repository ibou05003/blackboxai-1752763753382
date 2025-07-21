import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const categories = [
    {
      id: 1,
      name: 'Fresh Fruits & Vegetable',
      color: '#53B175',
      borderColor: '#53B175',
    },
    {
      id: 2,
      name: 'Cooking Oil & Ghee',
      color: '#F8A44C',
      borderColor: '#F8A44C',
    },
    {
      id: 3,
      name: 'Meat & Fish',
      color: '#F7A593',
      borderColor: '#F7A593',
    },
    {
      id: 4,
      name: 'Bakery & Snacks',
      color: '#D3B0E0',
      borderColor: '#D3B0E0',
    },
    {
      id: 5,
      name: 'Dairy & Eggs',
      color: '#FDE598',
      borderColor: '#FDE598',
    },
    {
      id: 6,
      name: 'Beverages',
      color: '#B7DFF5',
      borderColor: '#B7DFF5',
    },
  ];

  const renderCategoryItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.categoryCard,
        {
          backgroundColor: item.color + '20',
          borderColor: item.borderColor + '70',
        },
      ]}
      onPress={() => {
        // Navigate to category products
        console.log('Navigate to category:', item.name);
      }}
    >
      <View style={styles.categoryContent}>
        <View style={[styles.categoryImagePlaceholder, { backgroundColor: item.color + '40' }]} />
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#7C7C7C" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#7C7C7C"
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText('')}>
            <Ionicons name="close-circle" size={20} color="#7C7C7C" />
          </TouchableOpacity>
        )}
      </View>

      {/* Categories Grid */}
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.categoriesContainer}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#181725',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#181725',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  categoryImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginBottom: 15,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default SearchScreen;
