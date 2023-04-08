import { FaMicrophoneAlt } from 'react-icons/fa'
import CloseIcon from '@mui/icons-material/Close'
import useVoiceRecognition from 'hooks/useVoiceRecognition'
import { Microfone, Text, Container, TextWrapper, CloseButton } from './styled'
import NotSupported from 'components/NotSupported'

const VoiceRecognizer = () => {
  const { text, isListening, voiceSupported, toggle, reset } = useVoiceRecognition({ delay: 60000 })

  return (
    <Container>
      {voiceSupported ? (
        <>
          <Microfone onClick={toggle} active={isListening}>
            <FaMicrophoneAlt />
          </Microfone>
          <TextWrapper elevation={3} isBig={isListening || !!text.length}>
            {isListening ||
              (!!text.length && (
                <CloseButton color='default' aria-label='Reset' onClick={reset}>
                  <CloseIcon />
                </CloseButton>
              ))}

            <Text length={text.length}>
              {text}
              {!text && isListening && '...'}
            </Text>
          </TextWrapper>
        </>
      ) : (
        <NotSupported />
      )}
    </Container>
  )
}

export default VoiceRecognizer
