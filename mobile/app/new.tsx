import { Link } from 'expo-router'
import React from 'react'
import { Switch, Touchable, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from '@expo/vector-icons/Feather'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()

  return (
    <View 
      className="flex-1 px-8"
      style={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-now items-center justify-between">
        <NLWLogo />

        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rouded rounded-full bg-purple-500">
            <Icon name="arrows-left" size={16} color="#FFF" />
          </TouchableOpacity>
        </Link>   
      </View>  

      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch value={true} />
        </View>
      </View>
    </View>  
  )
}