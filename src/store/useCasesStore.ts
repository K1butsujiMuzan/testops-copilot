import { create } from "zustand"
import { type StateCreator } from 'zustand'

export interface ICase {
  id: string
  name: string

  title?: string
  label?: string
  feature?: string
  story?: string
  link?: string
  priority?: string
  tags?: string

  content?: string
  manual: boolean
  testType: TTestType
}

export type TTestType = 'UiTest' | 'ApiTest'

interface ICases {
  cases: ICase[]
  currentCaseId: string
  isLoading: boolean
}

interface ICasesMethods {
  addCase: () => void
  setCurrentCase: (id: string) => void
  updateCase: (id: string, updates: Partial<ICase>) => void
  setIsLoading: (isLoading: boolean) => void
}

interface ICasesStore extends ICasesMethods, ICases {}

const initialCase: ICase = {
  id: crypto?.randomUUID() ?? Date.now().toString(),
  name: 'Case 1',
  title: '',
  label: '',
  feature: '',
  story: '',
  link: '',
  tags: '',
  priority: '',
  content: '',
  manual: false,
  testType: 'UiTest'
}

const casesStore: StateCreator<ICasesStore> = (set, get) => ({
  cases: [initialCase],
  currentCaseId: initialCase.id,
  isLoading: false,
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading })
  },

  addCase: () => {
    const newCase: ICase = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      name: `Case ${get().cases.length + 1}`,
      title: '',
      label: '',
      feature: '',
      story: '',
      link: '',
      tags: '',
      priority: '',
      content: '',
      manual: false,
      testType: 'UiTest'
    }

    set(state => ({
      cases: [...state.cases, newCase],
      currentCaseId: newCase.id
    }))
  },

  setCurrentCase: (id: string) => {
    set({ currentCaseId: id })
  },

  updateCase: (id: string, updates: Partial<ICase>) => {
    set(state => ({
      cases: state.cases.map(caseItem =>
        caseItem.id === id ? { ...caseItem, ...updates } : caseItem
      )
    }))
  }
})

export const useCasesStore = create<ICasesStore>()(casesStore)

export const useCases = () => useCasesStore(state => state.cases)
export const useCurrentCaseId = () => useCasesStore(state => state.currentCaseId)
export const useCurrentCase = () => {
  const cases = useCases()
  const currentCaseId = useCurrentCaseId()
  return cases.find(caseItem => caseItem.id === currentCaseId)
}
export const useAddCase = () => useCasesStore(state => state.addCase)
export const useSetCurrentCase = () => useCasesStore(state => state.setCurrentCase)
export const useUpdateCase = () => useCasesStore(state => state.updateCase)
export const useSetIsLoading = () => useCasesStore(state => state.setIsLoading)
export const useIsLoading = () => useCasesStore(state => state.isLoading)
