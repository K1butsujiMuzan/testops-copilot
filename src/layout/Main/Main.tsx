import { useIsLoading } from "../../store/useCasesStore.ts"
import {useResponses} from "../../store/useResponse.ts"
import MarkdownPreview from '@uiw/react-markdown-preview'

export default function Main() {
  const responses = useResponses()
  const isLoading = useIsLoading()

  return(
    <main className={'bg-white dark:bg-gray-500 flex flex-col items-center justify-center font-extrabold flex-1 px-13 pt-5 pb-6.5'}>
      {!responses.length  && !isLoading && (
        <>
          <h1 className={'text-32 text-green-300 leading-9.5 flex flex-col justify-center'}>TestOps Copilot</h1>
          <p className={'text-xl text-black dark:text-white leading-9'}>Что сегодня будем тестировать?</p>
        </>
      )}
      {responses.length !== 0 && !isLoading &&(
        <ul className={'flex flex-col gap-4 items-center max-h-[calc(100dvh-200px)] overflow-auto scrollbar-gutter'}>
          {responses.map((response, index) => (
            <li className={'w-full'} key={`responce-${index}`}>
              <MarkdownPreview source={response}/>
            </li>
          ))}
        </ul>
      )}
      {isLoading && (
        <svg className="w-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a9" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#00A1FF"></stop><stop offset=".3" stopColor="#00A1FF" stopOpacity=".9"></stop><stop offset=".6" stopColor="#00A1FF" stopOpacity=".6"></stop><stop offset=".8" stopColor="#00A1FF" stopOpacity=".3"></stop><stop offset="1" stopColor="#00A1FF" stopOpacity="0"></stop></radialGradient><circle transformOrigin="center" fill="none" stroke="url(#a9)" strokeWidth="15" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transformOrigin="center" fill="none" opacity=".2" stroke="#FF156D" strokeWidth="15" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>
      )}
    </main>
  )
}