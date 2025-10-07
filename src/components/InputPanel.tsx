import React ,{useContext} from 'react'
import LanguageSelector from './LanguageSelector'
import TranslatorContext from '../store/TranslatorContext'


const InputPanel = () => {
  const {inputText, inputTextHandler,isTranslating, handleTranslate,sourceLang} = useContext(TranslatorContext)

  const languages = {
    en: 'en-us',
    fr: 'fr-fr',
    es: 'es-es',
    de: 'de-de',
    ar: 'ar-sa',
    it: 'it-it'
  } as const

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(inputText);
    if (sourceLang !== null)
      utterance.lang = languages[sourceLang as keyof typeof languages] || 'en-us';
    else
      utterance.lang = 'en-us';
    console.log('speaking');
    console.log(inputText)

    window.speechSynthesis.speak(utterance);
  }

  return (
    <>
        <div className="mt-10 flex-1 rounded-3xl xl:basis-1/2 xl:max-w-[600px] xl:h-[320px] bg-[#212936CC] flex flex-col xl:mt-0 min-h-[300px]">
        <div className="flex gap-3 mt-5 ml-8 font-['DM_Sans'] text-white overflow-auto">
          <LanguageSelector  type={"source"}/>
        </div>
        <hr className="text-[#706f6f]" />
        <textarea
          className="px-4 w-full h-50 resize-y min-h-[100px] text-white focus:outline-none flex-1"
          maxLength= {500}
          value={inputText}
          onChange={ inputTextHandler }
        />

        <p className="text-[#d2d5da]/75 text-right text-sm mr-8">{`${inputText.length} / 500 `}</p>
        <div className="p-1 flex gap-3 mb-3">
          <button
            className="rounded-lg px-4 py-2 transition-colors hover:bg-[#4d5562] border-gray-200/20 border-2 cursor-pointer mr-3"
            onClick={handleSpeak}
          >
            <img src="/resources/sound_max_fill.svg" />
          </button>

          <button
            className="transition-colors hover:bg-[#4d5562] rounded-lg px-4 py-2 border-gray-200/20 border-2 cursor-pointer"
          >
            <img src="/resources/Copy.svg" />
          </button>

          <button
            className="ml-auto mr-8 transition-colors bg-[#263FA9] rounded-lg px-4 py-2 text-white inline-flex gap-3 border-gray-200/20 border-1 hover:border-gray-100 cursor-pointer"
            onClick={handleTranslate}
          >
            <img src="/resources/Sort_alfa.svg" />
            {isTranslating? 'Translating': 'Translate'}
          </button>
        </div>
      </div>

    </>
  )
}

export default InputPanel
