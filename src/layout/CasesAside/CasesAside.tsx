import { useAddCase, useCases, useSetCurrentCase, useCurrentCaseId } from "../../store/useCasesStore.ts";
import ToggleArrow from "../../ui/ToggleArrow/ToggleArrow.tsx";
import { useState } from "react";
import SendButton from "../../ui/SendButton/SendButton.tsx";
import {cn} from "../../../lib/utils.ts";

export default function CasesAside() {
  const cases = useCases()
  const currentCaseId = useCurrentCaseId()
  const setCurrentCase = useSetCurrentCase()
  const addCase = useAddCase()
  const [isOpen, setIsOpen] = useState(true)

  if(!isOpen) {
    return (
      <div className={'absolute bg-gray-200 dark:bg-gray-900 rounded-full top-3.5 left-3.5'}>
        <ToggleArrow isLeft={false} onButtonClick={() => setIsOpen(true)} />
      </div>
    )
  }

  const handleAddCase = () => {
    addCase()
  }

  const handleSelectCase = (id: string) => {
    setCurrentCase(id)
  }

  return(
    <aside className={'bg-gray-200 flex flex-col relative dark:bg-gray-900 font-extrabold border-r w-105 border-black dark:border-white text-black dark:text-white'}>
      <div className={'py-3.5 border-b border-black dark:border-white px-8 flex justify-between items-center'}>
        <span className={'text-green-300 text-32 leading-9.5'}>Список кейсов</span>
        <ToggleArrow isLeft={true} onButtonClick={() => setIsOpen(false)} />
      </div>
      <button
        className={'text-2xl py-6 border-b border-black dark:border-white'}
        type="button"
        onClick={handleAddCase}
      >
        [+ New case]
      </button>
      <div className={'flex flex-col gap-5 justify-between h-full pb-4'}>
        <ul className={'flex flex-col overflow-auto max-h-150 scrollbar-gutter'}>
          {cases.map(element => (
            <li
              key={element.id}
              className={cn(
                'text-2xl leading-7 border-b border-black dark:border-white',
                {
                 'bg-white dark:bg-gray-500' : currentCaseId === element.id,
                 'bg-gray-200 dark:bg-gray-900': currentCaseId !== element.id
                }
              )}
            >
              <button
                type={'button'}
                className={'h-full w-full text-left pl-8 py-5.5'}
                onClick={() => handleSelectCase(element.id)}
              >
                {element.name}
              </button>
            </li>
          ))}
        </ul>
        <SendButton />
      </div>
    </aside>
  )
}