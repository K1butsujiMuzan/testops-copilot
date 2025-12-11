import {cn} from "../../../lib/utils.ts";

interface Props {
  isLeft: boolean
  onButtonClick: () => void
}

export default function ToggleArrow({isLeft, onButtonClick}: Props) {
  return(
    <button className={cn(
      'aspect-square shrink-0 p-2.5 text-black dark:text-white',
        {
          '-scale-x-100': !isLeft
        }
      )}
      type="button"
      onClick={onButtonClick}>
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.2988 11.1367L2.29883 11.1367M2.29883 11.1367L13.9117 21.1367M2.29883 11.1367L13.9117 1.13672" stroke="white" strokeWidth="3"/>
      </svg>
    </button>
  )
}