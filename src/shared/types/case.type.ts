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