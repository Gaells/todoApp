import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useGlobalStore from '../../store';
import { Box } from '../../utils/theme';

const Home = () => {

  const navigation = useNavigation();


  const { tasks, categories } = useGlobalStore()


  return (
    <View>
      <Text variant="text2XL">Home</Text>
      {
        categories.map(category=> (
        <Box p='4' bg='blu200' key={category.id}>
          <Text color="blu500">{category.name}</Text>
          </Box>)
      )}
      <Pressable 
        onPress={() => {
          navigation.navigate("CreateTask");
      }}>
        <Text variant="text4XL" color="green500">
          Navegue até criação de Tarefa</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})