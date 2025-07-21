import React, { useRef } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import VideoCard from '../components/VideoCard';

const sampleVideos = [
  {
    id: '1',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    caption: 'Sample Video One',
    creator: 'User One',
  },
  {
    id: '2',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Sample Video Two',
    creator: 'User Two',
  },
  // Add more sample videos as needed
];

const TikTokScreen = () => {
  const onViewRef = useRef(({ viewableItems }) => {
    // Logic to auto-play the video that is in-view can be implemented here
    // For simplicity, this example does not control playback externally
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 80 });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sampleVideos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard video={item} />}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default TikTokScreen;
