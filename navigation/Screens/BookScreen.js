// BookScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookContent } from './BookContent';
import PlayScreen from './PlayScreen';
import { TOP_FUTSAL } from '../data/constList';
import { ScrollView } from 'react-native';
import FutsalListScreen from './FutsalListScreen';

export default function BookScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1,alignItems:'center' }}>
      <BookContent />
        <FutsalListScreen navigation={navigation}  list={TOP_FUTSAL} /> 
       
    </SafeAreaView>
  );
}
