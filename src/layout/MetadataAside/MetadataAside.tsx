import ToggleArrow from "../../ui/ToggleArrow/ToggleArrow.tsx";
import { useCurrentCase, useUpdateCase } from "../../store/useCasesStore.ts";
import { useState, useEffect } from "react";
import MainInput from "../../ui/MainInput/MainInput.tsx";
import Slider from "../../ui/Slider/Slider.tsx";
import Checkbox from "../../ui/Checkbox/Checkbox.tsx";

export default function MetadataAside() {
  const currentCase = useCurrentCase()
  const updateCase = useUpdateCase()
  const [isOpen, setIsOpen] = useState(true)

  const [formData, setFormData] = useState({
    title: '',
    label: '',
    feature: '',
    story: '',
    link: '',
    priority: '',
    tags: '',
    content: '',
    manual: false,
    testType: 'UiTest' as 'UiTest' | 'ApiTest'
  })

  useEffect(() => {
    if (currentCase) {
      setFormData({
        title: currentCase.title || '',
        label: currentCase.label || '',
        feature: currentCase.feature || '',
        story: currentCase.story || '',
        link: currentCase.link || '',
        priority: currentCase.priority || '',
        tags: currentCase.tags || '',
        content: currentCase.content || '',
        manual: currentCase.manual || false,
        testType: currentCase.testType || 'UiTest'
      })
    }
  }, [currentCase])

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    if (currentCase) {
      updateCase(currentCase.id, { [field]: value })
    }
  }

  const handleSliderChange = () => {
    const newValue = formData.testType === 'UiTest' ? 'ApiTest' : 'UiTest'
    handleInputChange('testType', newValue)
  }

  const handleCheckboxChange = () => {
    const newValue = !formData.manual
    handleInputChange('manual', newValue)
  }

  if(!isOpen) {
    return (
      <div className={'absolute bg-gray-200 dark:bg-gray-900 rounded-full top-3.5 right-3.5'}>
        <ToggleArrow isLeft={true} onButtonClick={() => setIsOpen(true)} />
      </div>
    )
  }

  return (
    <aside className={'bg-gray-200 flex flex-col dark:bg-gray-900 border-l w-150 border-black dark:border-white text-black dark:text-white'}>
      <div className={'py-3.5 border-b border-black dark:border-white px-8 flex justify-between items-center font-extrabold'}>
        <ToggleArrow isLeft={false} onButtonClick={() => setIsOpen(false)} />
        <span className={'text-green-300 text-32 leading-9.5'}>Метаданные</span>
      </div>
      <div className={'py-3.5 border-b border-black dark:border-white px-8 flex justify-between items-center font-extrabold'}>
        <Checkbox onChange={handleCheckboxChange} isChecked={formData.manual} />
        <Slider onChange={handleSliderChange} isChecked={formData.testType === 'ApiTest'}/>
      </div>
      <div className={'flex flex-col flex-1 gap-8 pb-8'}>
        <div>
          <MainInput
            id={'title'}
            label={'Title'}
            placeholder={'Введите название...'}
            value={formData.title}
            onChange={(value) => handleInputChange('title', value)}
          />
          <MainInput
            id={'label'}
            label={'Label'}
            placeholder={'Введите владельца...'}
            value={formData.label}
            onChange={(value) => handleInputChange('label', value)}
          />
          <MainInput
            id={'feature'}
            label={'Feature'}
            placeholder={'Введите особенности...'}
            value={formData.feature}
            onChange={(value) => handleInputChange('feature', value)}
          />
          <MainInput
            id={'story'}
            label={'Story'}
            placeholder={'Введите сценарий...'}
            value={formData.story}
            onChange={(value) => handleInputChange('story', value)}
          />
          <MainInput
            id={'link'}
            label={'Link'}
            placeholder={'Введите ссылку на внешнюю систему...'}
            value={formData.link}
            onChange={(value) => handleInputChange('link', value)}
          />
          <MainInput
            id={'priority'}
            label={'Priority'}
            placeholder={'Введите приоритет...'}
            value={formData.priority}
            onChange={(value) => handleInputChange('priority', value)}
          />
          <MainInput
            id={'tags'}
            label={'Tags'}
            placeholder={'Введите теги (через запятую)...'}
            value={formData.tags}
            onChange={(value) => handleInputChange('tags', value)}
          />
        </div>
        <textarea
          name="text"
          id="text"
          className={'bg-gray-500 text-base leading-5 font-normal outline-none py-1.5 px-4 rounded-3xl flex-1 mx-7 resize-none'}
          placeholder={'Опишите что протестировать'}
          value={formData.content}
          onChange={(e) => handleInputChange('content', e.target.value)}
        />
      </div>
    </aside>
  )
}