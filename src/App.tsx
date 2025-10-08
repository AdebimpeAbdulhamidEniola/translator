import { useState } from "react";
import type { APIResponse, LangId } from "./Types";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";
import TranslatorContext from "./store/TranslatorContext";

const App = () => {
  // Text and translation state
  const [inputText, setInputText] = useState(
    "My name is Abdulhamid Eniola Adebimpe"
  );
  const [outputText, setOutputText] = useState<APIResponse | null>(null);
  const [sourceLang, setSourceLang] = useState<LangId | null>(null);
  const [targetLang, setTargetLang] = useState<LangId | null>(null);
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [hasSwap, setHasSwap] = useState(false);

  const inputTextHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setInputText(event.target.value);
  };

  const sourceLangHandler = (lang: LangId): void => {
    setSourceLang(lang);
  };

  const targetLangHandler = (lang: LangId): void => {
    console.log(sourceLang);
    setTargetLang(lang);
  };

  const outputTextHandler = (translatedText: APIResponse): void => {
    setOutputText(translatedText);
  };

  const handleTranslate = async () => {
    // 1. Build the URL with query parameters
    const query = encodeURIComponent(inputText);
    const langpair = `${sourceLang}|${targetLang}`;
    console.log(sourceLang, targetLang);
    const url = `https://api.mymemory.translated.net/get?q=${query}&langpair=${langpair}`;

    setIsTranslating(true);

    try {
      // Don't translate if already loading or input is empty
      if (isTranslating || inputText.trim().length === 0) {
        return;
      }

      // 2. Use GET method and remove custom headers/body
      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const result: APIResponse = await response.json();
      console.log(result);
      setOutputText(result);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    } finally {
      // Reset loading state whether successful or not
      setIsTranslating(false);
    }
  };
  const handleSwap = () => {
    console.log("handleSwap executing!");
    if (!outputText) return;

    if (sourceLang == null || targetLang == null) return;

    // Store current values in temp variables FIRST
    const tempSourceLang = sourceLang;
    const tempTargetLang = targetLang;

    const newInputText = outputText.responseData.translatedText;

    // swap languages
    setSourceLang(tempTargetLang);
    console.log(sourceLang)
    setTargetLang(tempSourceLang);

    // set input to the translated text
    setInputText(newInputText);

    // reset output so UI is clean
    setOutputText(null);
    setHasSwap(true)
  };

  return (
    <div className=" bg-[url('/resources/hero_img-sm.jpg')] xl:bg-[url('/resources/hero_img.jpg')] overflow-scroll min-w-screen min-h-screen bg-no-repeat bg-cover bg-center pt-4 ">

      <div  className="">
        <img src={'/resources/logo.svg'}  className="mx-auto" alt="logo"/>
      </div>
      <div className="gap-4 px-4 flex flex-col justify-center  xl:flex-row xl:items-start xl:pt-32">
        <TranslatorContext.Provider
          value={{
            inputText,
            outputText,
            inputTextHandler,
            outputTextHandler,
            sourceLang,
            sourceLangHandler,
            targetLang,
            targetLangHandler,
            handleTranslate,
            isTranslating,
            handleSwap,
            hasSwap
          }}
        >
          <InputPanel />
          <OutputPanel />
        </TranslatorContext.Provider>
      </div>
    </div>
  );
};

export default App;
