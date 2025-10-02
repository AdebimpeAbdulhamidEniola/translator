import React from 'react'
import { useState } from 'react'
import type {LangId} from './Types'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [sourceLang, setSourceLang] = useState<LangId | null>(null)
  const [targetLang, setTargetLang] = useState<LangId | null>(null)
  return (
    <div>

    </div>
  )
}

export default App
