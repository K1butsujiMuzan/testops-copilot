import logo from '@public/icons/logo.svg'

export default function Header() {
  return (
    <header className={'bg-gray-200 dark:bg-gray-900 border-b border-black dark:border-white'}>
      <div className={'py-4.5 px-4 mx-auto flex justify-between'}>
        <img
          src={logo}
          alt="clound logo"
          width="271"
          height="52"
        />
      </div>
    </header>
  )
}