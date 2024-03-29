import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { theme } from '../utils/theme'

interface IGlobalStore {
  categories: ICategory[]
  tasks: ITask[]
}

const useGlobalStore = create<IGlobalStore>()(
  persist((set,get) => ({
    categories: [],
    tasks:[],
  }), 
  {
    name: "todos-store",
    storage: createJSONStorage(() => AsyncStorage)
  })
)

export default useGlobalStore