import {cn} from "../../../lib/utils.ts";

interface Props {
  onChange: () => void
  isChecked: boolean
}

export default function Slider({onChange, isChecked}: Props) {
  return (
    <div className={'flex gap-2 text-xl items-center'}>
      <span>UI</span>
      <label htmlFor="type" className={cn(
        'w-12.5 h-6 bg-gray-300 block rounded-xl relative after:content-[""] after:w-6 after:h-6 after:rounded-full after:bg-green-300 after:block after:absolute after:top-0',
        {
          'after:left-0': !isChecked,
          'after:right-0': isChecked
        }
      )}>
        <input
          checked={isChecked}
          className={'w-0 h-0'}
          onChange={onChange}
          type={"checkbox"}
          id="type"
          name="type"
        />
      </label>
      <span>API</span>
    </div>
  )
}