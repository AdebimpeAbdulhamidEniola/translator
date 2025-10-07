import { createContext } from "react";
import type {  APIResponse, LangId } from "../Types";

interface TranslatorContextType {
  inputText: string;
  outputText: APIResponse | null;
  inputTextHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
  outputTextHandler: (translatedText: APIResponse) => void;
  sourceLang: LangId | null;
  sourceLangHandler: (lang: LangId) => void;
  targetLang: LangId | null;
  targetLangHandler: (lang: LangId) => void;
  handleTranslate: () => void,
  isTranslating: boolean,
  handleSwap: () => void,
  hasSwap: boolean,
  
}

const TranslatorContext = createContext<TranslatorContextType>({
  inputText: "",
  outputText: null,
  inputTextHandler: () => {},
  outputTextHandler: () => {},
  sourceLang: null,
  targetLang: null,
  sourceLangHandler: () => {},
  targetLangHandler: () => {},
  handleTranslate: () => {},
  isTranslating: false,
  handleSwap: () =>{},
  hasSwap: false,
 });

export default TranslatorContext;