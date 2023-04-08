import { FaMicrophoneAltSlash } from 'react-icons/fa'
import { Microfone } from 'components/VoiceRecognizer/styled'
import { NotSupportedWrapper } from './styled'

const NotSupported = () => {
  return (
    <NotSupportedWrapper>
      <Microfone notSupported>
        <FaMicrophoneAltSlash />
      </Microfone>
      <p>
        Browser not supported. Please use{' '}
        <b>
          <a href='https://www.google.com/chrome/'>Google Chrome</a>
        </b>{' '}
        on desktop instead.
      </p>
    </NotSupportedWrapper>
  )
}

export default NotSupported
