import  { useContext } from "react";
import TranslatorContext from "../store/TranslatorContext";
import { DropDownLanguages, type LangId } from "../Types";
const LanguageSelector = ({ type }: { type: "source" | "target" }) => {
  const { sourceLangHandler, targetLangHandler, sourceLang, targetLang } =
    useContext(TranslatorContext);

  // Determine which language is currently selected
  const selectedLang = type === "source" ? sourceLang : targetLang;

  let detectLangButton;

  const langselectHandler = (languageId: LangId) => {
    if (type === "source") sourceLangHandler(languageId);
    else targetLangHandler(languageId);
  };

  const dropDownElements = DropDownLanguages.map((language) => (
    <option
      key={language.id}
      value={language.id}
      className={`bg-[#2b2f3a] text-white hover:bg-[#4d5562] ${
        selectedLang === language.id ? "bg-[#4d5562]" : ""
      }`}
    >
      {language.name}
    </option>
  ));

  if (type == "source")
    detectLangButton = (
      <button className={`px-4 py-2 hover:rounded-lg hover:bg-[#4d5562]`}
      aria-label="detect language"
       onClick={() => langselectHandler("en")}>
        Detect Language
      </button>
    );

  return (
    <>
      {detectLangButton}
      <button
        className={`px-4 py-2 hover:rounded-lg hover:bg-[#4d5562] ${
          selectedLang === "en" ? "bg-[#4d5562]" : ""
        }`}
        onClick={() => langselectHandler("en")}
        aria-label="english"
      >
        English
      </button>
      <button
        className={`px-4 py-2 hover:rounded-lg hover:bg-[#4d5562] ${
          selectedLang === "fr" ? "bg-[#4d5562]" : ""
        }`}
        onClick={() => langselectHandler("fr")}
        aria-label="French"
      >
        French
      </button>

      <select
        className={` rounded-lg text-white hover:bg-[#4d5562] focus:outline-none border-none ${
          selectedLang && ["es", "it", "ar", "de"].includes(selectedLang)
            ? "bg-[#4d5562]"
            : ""
        }`}
        value={selectedLang || ""}
        onChange={(event) => langselectHandler(event.target.value as LangId)}
      >
        {dropDownElements}
      </select>
    </>
  );
};

export default LanguageSelector;
