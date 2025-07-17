import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderSuccessScreen = ({ navigation }) => {
  const handleBackToHome = () => {
    navigation.navigate('Main', { screen: 'Shop' });
  };

  const handleTrackOrder = () => {
    // In a real app, this would navigate to order tracking
    console.log('Track order pressed');
    navigation.navigate('Main', { screen: 'Account' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.successIcon}>
            <Ionicons name="checkmark" size={60} color="white" />
          </View>
        </View>

        {/* Success Message */}
        <Text style={styles.title}>Your Order has been accepted</Text>
        <Text style={styles.subtitle}>
          Your items has been placed and is on it's way to being processed
        </Text>

        {/* Track Order Button */}
        <TouchableOpacity style={styles.trackButton} onPress={handleTrackOrder}>
          <Text style={styles.trackButtonText}>Track Order</Text>
        </TouchableOpacity>

        {/* Back to Home Button */}
        <TouchableOpacity style={styles.homeButton} onPress={handleBackToHome}>
          <Text style={styles.homeButtonText}>Back to home</Text>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconContainer: {
    marginBottom: 60,
  },
  successIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#53B175',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#181725',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 60,
  },
  trackButton: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  trackButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  homeButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: '100%',
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
  },
});

export default OrderSuccessScreen;
