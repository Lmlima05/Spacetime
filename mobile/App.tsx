import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text} from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground 
    source={blurBg}
      className="bg-gray-900 flex-1 items-center justify-center"
    >
        <Text className="text-gray-50 font-bold text-5xl">RocketSeat</Text>
        <StatusBar style="light" translucent />
    </ImageBackground>
  )
}