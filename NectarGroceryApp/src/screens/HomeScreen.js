import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const exclusiveOffers = [
    {
      id: 1,
      name: 'Red Apple',
      price: '$4.99',
      unit: '1kg, Price',
      color: '#F8A44C',
    },
    {
      id: 2,
      name: 'Organic Bananas',
      price: '$4.99',
      unit: '7pcs, Price',
      color: '#F7A593',
    },
  ];

  const bestSelling = [
    {
      id: 1,
      name: 'Bell Pepper Red',
      price: '$4.99',
      unit: '1kg, Price',
      color: '#F8A44C',
    },
    {
      id: 2,
      name: 'Ginger',
      price: '$4.99',
      unit: '250gm, Price',
      color: '#F7A593',
    },
  ];

  const ProductCard = ({ item, onPress }) => (
    <TouchableOpacity style={[styles.productCard, { backgroundColor: item.color + '20' }]} onPress={onPress}>
      <View style={styles.productImageContainer}>
        <View style={[styles.productImagePlaceholder, { backgroundColor: item.color + '40' }]} />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productUnit}>{item.unit}</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={20} color="#4C4F4D" />
            <Text style={styles.locationText}>Dhaka, Banasree</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#7C7C7C" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
          />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
            <Text style={styles.bannerSubtitle}>Get Up To 40% OFF</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bannerImageContainer}>
            <View style={styles.bannerImagePlaceholder} />
          </View>
        </View>

        {/* Exclusive Offer */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Exclusive Offer</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {exclusiveOffers.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onPress={() => navigation.navigate('ProductDetail', { product: item })}
              />
            ))}
          </ScrollView>
        </View>

        {/* Best Selling */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best Selling</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {bestSelling.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onPress={() => navigation.navigate('ProductDetail', { product: item })}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
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
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '600',
    color: '#4C4F4D',
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
    color: '#7C7C7C',
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#53B175',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },
  bannerButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  bannerImageContainer: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#181725',
  },
  seeAllText: {
    fontSize: 16,
    color: '#53B175',
    fontWeight: '600',
  },
  horizontalScroll: {
    paddingLeft: 20,
  },
  productCard: {
    width: 173,
    marginRight: 15,
    borderRadius: 18,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  productImageContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  productImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 5,
  },
  productUnit: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 15,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
  },
  addButton: {
    backgroundColor: '#53B175',
    width: 45,
    height: 45,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
