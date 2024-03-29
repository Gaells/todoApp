import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
  Home : undefined
  CreateTask: undefined
  EditTask: {
    Task: undefined
  }
  CreateCategory: {
    Category: undefined
  }
}

export type RootStackScreenProps <T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}