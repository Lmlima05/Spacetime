import { ScrollView, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'

import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { Link } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()

return (
  <ScrollView
    className="flex-1 px-8"
    contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
>
  <View className="mt-4 flex-row items-center justify-between">
    <NLWLogo />

    <View className="flex-row gap-2">
      <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
        <Icon name="plus" size={16} color="#000" />
      </TouchableOpacity>
    </View>

    <Link href="/new" asChild>
      <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
        <Icon name="plus" size={16} color="#000" />
      </TouchableOpacity>  
    </Link>
  </View>  
</ScrollView>

)
}
