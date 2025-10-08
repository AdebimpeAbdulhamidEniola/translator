import  { useContext } from "react";
import LanguageSelector from "./LanguageSelector";
import TranslatorContext from "../store/TranslatorContext";

const OutputPanel = () => {
  const { outputText, handleSwap, hasSwap } = useContext(TranslatorContext);
  return (
    <>
      <div className="text-white flex-1  xl:max-w-[600px] min-h-[300px] xl:h-[320px] rounded-3xl bg-[rgba(33,41,54,0.8)] xl:basis-1/2">
        <div className="flex pr-9 pt-2">
          <LanguageSelector type={"target"} />
          <button
            className="ml-auto transition-colors hover:bg-[#4d5562] rounded-lg px-4 py-2 border-gray-200/20 border-2 cursor-pointer"
            onClick={handleSwap}
            aria-label="swap text"
          >
            <img src="/resources/Horizontal_top_left_main.svg" alt="click to swap text" />
          </button>
        </div>
        <hr className="text-[#706f6f]" />

        <div className="py-6 min-h-[100px]">
          <p className="text-md font-normal text-white px-4 ">
            {outputText
              ? outputText.responseData.translatedText
              : hasSwap
              ? ""
              : "Je m'appelle Abdulhamid Eniola Adebimpe"}
          </p>
        </div>
      </div>
    </>
  );
};

export default OutputPanel;
