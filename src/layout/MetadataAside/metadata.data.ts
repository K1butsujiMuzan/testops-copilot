interface IInputData {
    id: string
    label: string
    placeholder: string
}

export const inputs: IInputData[] = [
    {
       id: 'title',
       label: 'Title',
       placeholder: 'Введите название...'
    },
    {
       id: 'label',
       label: 'Label',
       placeholder: 'Введите владельца...'
    },
    {
       id: 'feature',
       label: 'Feature',
       placeholder: 'Введите особенности...'
    },
    {
       id: 'story',
       label: 'Story',
       placeholder: 'Введите сценарий...'
    },
    {
       id: 'link',
       label: 'Link',
       placeholder: 'Введите ссылку на внешнюю систему...'
    },
    {
       id: 'priority',
       label: 'Priority',
       placeholder: 'Введите приоритет...'
    },
    {
       id: 'tags',
       label: 'Tags',
       placeholder: 'Введите теги (через запятую)...'
    }
]
