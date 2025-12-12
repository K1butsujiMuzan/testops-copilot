interface Props {
  id: string
  label: string
  placeholder: string
  value: string
  onChange?: (value: string) => void
}

export default function MainInput({id, label, placeholder, value = '', onChange} :Props) {
  return (
    <div className={'py-2.5 border-b border-black dark:border-white px-7 flex items-center gap-4 justify-between'}>
      <label className={'font-extrabold text-xl'} htmlFor={id}>{label}</label>
      <input
        className={'bg-gray-300 dark:bg-gray-500 text-base leading-5 font-normal outline-none py-1.5 px-4 rounded-3xl flex-1 max-w-100'}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </div>
  )
}