interface Props {
  onChange: () => void
  isChecked: boolean
}

export default function Checkbox({onChange, isChecked}: Props) {
  return (
    <label htmlFor="manual" className={'flex gap-3'}>
      <input
        checked={isChecked}
        className={'w-0 h-0 absolute'}
        onChange={onChange}
        type={"checkbox"}
        id="manual"
        name="manual"
      />
      <span className={'w-6 h-6 bg-gray-300 rounded-sm text-blue-400 flex items-center justify-center'}>
        {isChecked && (
          <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.61914 10.1541L11.6191 18.6541L26.6191 1.65405" stroke="#00A2FF" stroke-width="5"/>
          </svg>
        )}
      </span>
      <span className={'text-xl leading-6'}>Manual test</span>
    </label>
  )
}