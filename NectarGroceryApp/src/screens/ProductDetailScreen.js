import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailScreen = ({ navigation, route }) => {
  const { product } = route.params || {};
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const updateQuantity = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const addToCart = () => {
    // In a real app, this would add to cart context/state
    console.log('Added to cart:', product?.name, 'Quantity:', quantity);
    navigation.goBack();
  };

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Product not found</Text>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#181725" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={24} 
            color={isFavorite ? "#53B175" : "#181725"} 
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <View style={[styles.productImage, { backgroundColor: product.color + '40' }]} />
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productUnit}>{product.unit}</Text>
          
          {/* Quantity Selector */}
          <View style={styles.quantitySection}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => updateQuantity(-1)}
            >
              <Ionicons name="remove" size={20} color="#B3B3B3" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => updateQuantity(1)}
            >
              <Ionicons name="add" size={20} color="#53B175" />
            </TouchableOpacity>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>

          {/* Product Details */}
          <View style={styles.detailsSection}>
            <TouchableOpacity style={styles.detailItem}>
              <Text style={styles.detailTitle}>Product Detail</Text>
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.detailItem}>
              <Text style={styles.detailTitle}>Nutritions</Text>
              <View style={styles.nutritionBadge}>
                <Text style={styles.nutritionText}>100gr</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.detailItem}>
              <Text style={styles.detailTitle}>Review</Text>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Ionicons key={star} name="star" size={16} color="#F3603F" />
                ))}
              </View>
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerButton: {
    padding: 5,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#F2F3F2',
    marginHorizontal: 20,
    borderRadius: 25,
    marginBottom: 30,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 25,
  },
  productInfo: {
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 5,
  },
  productUnit: {
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 30,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  quantityButton: {
    width: 45,
    height: 45,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
    marginHorizontal: 20,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: '600',
    color: '#181725',
  },
  detailsSection: {
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    paddingTop: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  detailTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
  },
  nutritionBadge: {
    backgroundColor: '#F2F3F2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 10,
  },
  nutritionText: {
    fontSize: 12,
    color: '#7C7C7C',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
  addToCartButton: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    paddingVertical: 20,
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  errorText: {
    fontSize: 18,
    color: '#181725',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#53B175',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  backButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default ProductDetailScreen;
