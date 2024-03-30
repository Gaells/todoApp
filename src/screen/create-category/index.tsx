import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { nanoid } from 'nanoid/non-secure'
import { TextInput } from 'react-native-gesture-handler'
import { Box } from '../../utils/theme'
import { getColors } from '../../utils/helpers'
import { Picker } from '@react-native-picker/picker'


const COLORS = getColors()

const CreateCategory = () => {


  const [newCategory, setNewCategory] = useState<ICategory>({
    id:`category-${nanoid()}`,
    color: {
      code:"",
      id:`color-${nanoid()}`,
      name:""
    }
    ,
    name:""
  }) 

  return (
    <Box flex={1} bg={'gray200'} pb='10'>
      <Box 
        flexDirection='column' 
        alignItems='center'
        justifyContent='space-between'
        mx='4'
      >
        <Box
          width={"100%"}
          mt='5'
          flexDirection='column' 
          alignItems='center'
          justifyContent='center'
        >
          <Box 
            width={"100%"} 
            bg='white' 
            borderRadius='rounded2Xl' 
            alignItems='center' 
            justifyContent='center' 
          p='4'
          >
            <TextInput 
              value={newCategory.name}
              style={{
                fontSize: 20,
                width: "100%",
              }}
              onChangeText={(text) => {
                setNewCategory((prev) => {
                  return {
                    ...prev,
                    name: text,
                  }
                })
              }}
              placeholder='Criar nova Categoria'
            />
            <Box height={20} />
            <Picker>
              {
                COLORS.map(color=> <Picker.Item
                  key={color.id}
                  label={color.name}
                  value={color.id} 
                />)
              }
            </Picker>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CreateCategory

const styles = StyleSheet.create({})