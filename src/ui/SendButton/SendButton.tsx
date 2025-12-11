import {generateCases} from "../../service/generate.ts";


export default function SendButton() {
  const handleSubmit = async () => {
    try {
      const response = await generateCases();
      console.log(response)
    } catch (error) {
      console.error('Failed to send cases:', error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className={'bg-green-300 !text-32 text-white rounded-2xl py-3 block mx-auto px-12 hover:bg-green-400 transition-colors cursor-pointer'}
    >
      Отправить
    </button>
  )
}