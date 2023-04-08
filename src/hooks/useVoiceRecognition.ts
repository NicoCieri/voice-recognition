import { useState, useEffect, useRef } from 'react'

let speech: any
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
if (SpeechRecognition) {
  speech = new SpeechRecognition()
  speech.continuous = true
  speech.interimResults = true
} else {
  speech = null
}

const DEFAULT_DELAY = 10000

interface IuseVoiceRecognition {
  delay?: number
  lang?: string
}

const useVoiceRecognition = ({ delay = DEFAULT_DELAY, lang = 'es-AR' }: IuseVoiceRecognition) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [isListening, setIsListening] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    if (!speech) {
      return
    }
    speech.lang = lang
    speech.onresult = (event: any) => {
      setText(event.results[event.results.length - 1][0].transcript)
    }

    return () => {
      timerRef.current && window.clearTimeout(timerRef.current)
    }
  }, [lang])

  const listen = () => {
    setIsListening(true)
    speech.start()

    timerRef.current = setTimeout(() => {
      setIsListening(false)
      speech.stop()
    }, delay)
  }

  const stopListening = () => {
    setIsListening(false)
    speech.stop()
    timerRef.current && window.clearTimeout(timerRef.current)
  }

  const toggle = () => (isListening ? stopListening : listen)()

  const reset = () => {
    isListening && stopListening()
    setText('')
  }

  return {
    text,
    isListening,
    voiceSupported: !!speech,
    reset,
    toggle,
    listen,
    stopListening,
  }
}

export default useVoiceRecognition
