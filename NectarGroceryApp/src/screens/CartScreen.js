import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Bell Pepper Red',
      unit: '1kg, Price',
      price: 4.99,
      quantity: 1,
      color: '#F8A44C',
    },
    {
      id: 2,
      name: 'Egg Chicken Red',
      unit: '4pcs, Price',
      price: 1.99,
      quantity: 1,
      color: '#F7A593',
    },
    {
      id: 3,
      name: 'Organic Bananas',
      unit: '12kg, Price',
      price: 3.00,
      quantity: 1,
      color: '#FDE598',
    },
    {
      id: 4,
      name: 'Ginger',
      unit: '250gm, Price',
      price: 2.99,
      quantity: 1,
      color: '#B7DFF5',
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setCartItems(prevItems => prevItems.filter(item => item.id !== id));
          },
        },
      ]
    );
  };

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Empty Cart', 'Please add items to cart before checkout');
      return;
    }
    
    Alert.alert(
      'Place Order',
      `Total Cost: $${getTotalCost().toFixed(2)}\n\nBy placing an order you agree to our Terms And Conditions`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Place Order',
          onPress: () => {
            navigation.navigate('OrderSuccess');
            setCartItems([]); // Clear cart after successful order
          },
        },
      ]
    );
  };

  const CartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemLeft}>
        <View style={[styles.itemImage, { backgroundColor: item.color + '40' }]} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemUnit}>{item.unit}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.id, -1)}
            >
              <Ionicons name="remove" size={16} color="#B3B3B3" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.id, 1)}
            >
              <Ionicons name="add" size={16} color="#53B175" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.itemRight}>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeItem(item.id)}
        >
          <Ionicons name="close" size={20} color="#B3B3B3" />
        </TouchableOpacity>
        <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Ionicons name="bag-outline" size={80} color="#B3B3B3" />
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <Text style={styles.emptyCartSubtext}>Add items to get started</Text>
        </View>
      ) : (
        <>
          {/* Cart Items */}
          <ScrollView style={styles.cartList} showsVerticalScrollIndicator={false}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ScrollView>

          {/* Checkout Section */}
          <View style={styles.checkoutSection}>
            <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
              <Text style={styles.checkoutButtonText}>
                Go to Checkout
              </Text>
              <View style={styles.totalCostContainer}>
                <Text style={styles.totalCostText}>${getTotalCost().toFixed(2)}</Text>
              </View>
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
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#181725',
    marginTop: 20,
    marginBottom: 10,
  },
  emptyCartSubtext: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
  },
  cartList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  cartItem: {
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
    marginBottom: 15,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    marginHorizontal: 15,
  },
  itemRight: {
    alignItems: 'flex-end',
  },
  removeButton: {
    padding: 5,
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
  },
  checkoutSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
  checkoutButton: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  totalCostContainer: {
    backgroundColor: '#489E67',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  totalCostText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default CartScreen;
