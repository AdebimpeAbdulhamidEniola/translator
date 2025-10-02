import React, { type ChangeEvent } from "react";
import { useState } from "react";
import type { JSONValue, LangId } from "./Types";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState<JSONValue | null>()null;
  const [sourceLang, setSourceLang] = useState<LangId | null>(null);
  const [targetLang, setTargetLang] = useState<LangId | null>(null);
  const [isTranslating, setIsTranslating] = useState<boolean>(false); //This handles the loading state of the UI

  const inputTextHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setInputText(event.target.value);
  };

  const sourceLangHandler = (lang: LangId): void => {
    setSourceLang(lang)
  }

  const targetLangHandler = (lang: LangId): void => {
    setTargetLang(lang)
  }

  const outputTextHandler = (translatedText: string): void => {
    setOutputText(translatedText)
  }

  const handleTranslate = async () => {
    const url = "https://api.mymemory.translated.net/get"

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          q: inputText,
          langpair: `${sourceLang}|${targetLang}`,
        }),

         headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok)
        throw new Error(`Response status: ${response.status}`)

       const result: JSONValue= await response.json()
      setOutputText(result)
    }

   

    catch(error) {
      if (error instanceof Error)
        console.error(error.message)
    }
  }

  return (
    <div className="bg-[url('/public/resources/hero_img-sm.jpg')] xl:bg-[url('/public/resources/hero_img.jpg')] w-screen h-screen bg-no-repeat bg-cover bg-center ">
      <div className="gap-4 px-4 flex flex-col justify-center  xl:flex-row xl:items-start xl:pt-32">
        <InputPanel />
        <OutputPanel />
      </div>
    </div>
  );
};

export default App;
