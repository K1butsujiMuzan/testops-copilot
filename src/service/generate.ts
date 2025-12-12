import axios from "axios"
import type {ICase} from "../shared/types/case.type.ts"
import { useCasesStore } from "../store/useCasesStore.ts"
import {useResponseStore} from "../store/useResponse.ts"

const API_URL = import.meta.env.VITE_API_URL || './api/v1/generate'

interface ICasePost {
  allure_metadata: Pick<ICase, "feature" | "label" | "link" | "manual" | "priority" | "story" | "tags" | "title">
  test_type: string
  user_prompt: string
}

interface ServerResponseItem {
  Index: number
  Status: number
  Err: any
  Data: {
    created: number
    content: string
    refusal: string
    stop_reason: string
  }
}

export const generateCases = async () => {
  const cases = useCasesStore.getState().cases
  const setResponses = useResponseStore.getState().setResponses

  const casesToPost: ICasePost[] = cases.map(caseItem => ({
    allure_metadata: {
      feature: caseItem.feature || "",
      label: caseItem.label || "",
      link: caseItem.link || "",
      manual: caseItem.manual || false,
      priority: caseItem.priority || "",
      story: caseItem.story || "",
      tags: caseItem.tags || "",
      title: caseItem.title || ""
    },
    test_type: caseItem.testType || "UiTest",
    user_prompt: caseItem.content || ""
  }))

  try {
    const response = await axios.post<ServerResponseItem[]>(API_URL, {
      cases: casesToPost
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const serverResponse = response.data

    const contents = serverResponse
      .filter(item => item.Status === 0 && !item.Err)
      .map(item => item.Data.content)
      .filter(content => content && content.trim().length > 0)

    setResponses(contents)

    return serverResponse

  } catch (error) {
    console.error('Error generating cases:', error)
    throw error
  }
}