import {useResponses} from "../../store/useResponse.ts";
import MarkdownPreview from '@uiw/react-markdown-preview'

export default function Main() {
  const responses = useResponses()

  return(
    <main className={'bg-white dark:bg-gray-500 flex flex-col items-center justify-center font-extrabold flex-1 px-13 pt-5 pb-6.5'}>
      {!responses.length && (
        <>
          <h1 className={'text-32 text-green-300 leading-9.5 flex flex-col justify-center'}>TestOps Copilot</h1>
          <p className={'text-xl text-black dark:text-white leading-9'}>Что сегодня будем тестировать?</p>
        </>
      )}
      {responses.length !== 0 && (
        <ul className={'flex flex-col gap-4 items-center max-h-[calc(100dvh-200px)] overflow-auto scrollbar-gutter'}>
          {responses.map(response => (
            <li className={'w-full'}>
              <MarkdownPreview source={response}/>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}