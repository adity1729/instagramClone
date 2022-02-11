import { View, Text , ScrollView } from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import HomeMainContent from '../components/HomeMainContent';
import Stories from '../components/Stories';

export default function Home({navigation}) {
  return (
    <View>
      <HomeHeader></HomeHeader>
      <HomeMainContent navigation={navigation} header={Stories}></HomeMainContent>
      
    </View>
  );
}
