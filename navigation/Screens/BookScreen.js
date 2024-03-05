// BookScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookContent } from './BookContent';
import PlayScreen from './PlayScreen';
import { TOP_FUTSAL } from '../data/constList';
import { ScrollView } from 'react-native';

export default function BookScreen() {
  return (
    <SafeAreaView style={{ flex: 1,alignItems:'center' }}>
      <BookContent />
        <PlayScreen list={TOP_FUTSAL} /> 
      
    </SafeAreaView>
  );
}
