// BookScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookContent } from './BookContent';

import { TOP_FUTSAL } from '../data/constList';

import FutsalListScreen from './FutsalListScreen';
import FutsalInfo from './FutsalInfo';

export default function BookScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1,alignItems:'center' }}>
      <BookContent />
        <FutsalListScreen navigation={navigation}  list={TOP_FUTSAL} /> 
      
    </SafeAreaView>
  );
}
