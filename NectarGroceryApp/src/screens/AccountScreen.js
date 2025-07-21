import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccountScreen = ({ navigation }) => {
  const accountOptions = [
    {
      id: 1,
      title: 'Orders',
      icon: 'bag-outline',
      onPress: () => console.log('Orders pressed'),
    },
    {
      id: 2,
      title: 'My Details',
      icon: 'person-outline',
      onPress: () => console.log('My Details pressed'),
    },
    {
      id: 3,
      title: 'Delivery Address',
      icon: 'location-outline',
      onPress: () => console.log('Delivery Address pressed'),
    },
    {
      id: 4,
      title: 'Payment Methods',
      icon: 'card-outline',
      onPress: () => console.log('Payment Methods pressed'),
    },
    {
      id: 5,
      title: 'Promo Code',
      icon: 'ticket-outline',
      onPress: () => console.log('Promo Code pressed'),
    },
    {
      id: 6,
      title: 'Notifications',
      icon: 'notifications-outline',
      onPress: () => console.log('Notifications pressed'),
    },
    {
      id: 7,
      title: 'Help',
      icon: 'help-circle-outline',
      onPress: () => console.log('Help pressed'),
    },
    {
      id: 8,
      title: 'About',
      icon: 'information-circle-outline',
      onPress: () => console.log('About pressed'),
    },
  ];

  const AccountOption = ({ item }) => (
    <TouchableOpacity style={styles.optionItem} onPress={item.onPress}>
      <View style={styles.optionLeft}>
        <Ionicons name={item.icon} size={24} color="#181725" />
        <Text style={styles.optionTitle}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#181725" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Ionicons name="person" size={40} color="#7C7C7C" />
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Afsar Hossen</Text>
            <Text style={styles.profileEmail}>imshuvo97@gmail.com</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="create-outline" size={20} color="#53B175" />
          </TouchableOpacity>
        </View>

        {/* Account Options */}
        <View style={styles.optionsContainer}>
          {accountOptions.map((option) => (
            <AccountOption key={option.id} item={option} />
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <View style={styles.logoutContent}>
            <Ionicons name="log-out-outline" size={24} color="#53B175" />
            <Text style={styles.logoutText}>Log Out</Text>
          </View>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#181725',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  profileImageContainer: {
    marginRight: 15,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F2F3F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: '#7C7C7C',
  },
  editButton: {
    padding: 10,
  },
  optionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
    marginLeft: 20,
  },
  logoutButton: {
    marginHorizontal: 20,
    marginVertical: 30,
    backgroundColor: '#F2F3F2',
    borderRadius: 19,
    paddingVertical: 20,
    alignItems: 'center',
  },
  logoutContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#53B175',
    marginLeft: 15,
  },
});

export default AccountScreen;
