import { styled } from 'nativewind'

import blurBg from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'

import { ImageBackground } from "react-native";
import { StatusBar } from 'expo-status-bar'
import { Slot, SplashScreen, Stack } from 'expo-router'
import React from 'react'

const StyledStripes = styled(Stripes)

export default function layout() {

  export default function App() {
    const [hasLoadedFonts] = useFonts({
      Roboto_400Regular,
      Roboto_700Bold,
      BaiJamjuree_700Bold,
    })

    if (!hasLoadedFonts) {
      return <SplashScreen />
    }

  return (
    <ImageBackground 
      source={blurBg}
      className="relative bg-gray-900 flex-1"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />
      <StatusBar style="light" translucent />
      <Stack 
        screenOptions={{
          headerShown: false,
          contentStyle: { background: 'transparent' },
        }}
      />
    </ImageBackground>
  )
}