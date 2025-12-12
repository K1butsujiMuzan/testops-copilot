import { memo } from "react"
import {generateCases} from "../../service/generate.ts"
import { useCases, useIsLoading, useSetIsLoading } from "../../store/useCasesStore.ts"


export default memo(function SendButton() {
  const isLoading = useIsLoading()
  const setIsLoading = useSetIsLoading()
  const cases = useCases()
  const isEmpty: boolean = cases.filter(element => element.content?.length !== 0 && element.content).length === 0

  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      await generateCases()
    } catch (error) {
      console.error('Failed to send cases:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      disabled={isLoading || isEmpty ? true : false}
      type="button"
      onClick={handleSubmit}
      className={'bg-green-300 !text-32 text-white rounded-2xl py-3 block mx-auto px-12 hover:bg-green-400 disabled:opacity-45 disabled:cursor-not-allowed transition-colors duration-300 cursor-pointer'}
    >
      {isLoading ? 'Отправка...' : ' Отправить'}
    </button>
  )
})