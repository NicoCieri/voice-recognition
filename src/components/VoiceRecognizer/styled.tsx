import styled, { css, keyframes } from 'styled-components'
import { styled as styledUI } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'

export const Container = styled.div`
  padding: 30px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Microfone = styled.div<{ active?: boolean; notSupported?: boolean }>`
  width: 100px;
  height: 100px;
  margin: 20px auto;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s;
  position: relative;
  z-index: 1;
  background: #1976d2;
  box-shadow: 0 0 0px 4px #fff;

  &:hover {
    transform: scale(1.05);
  }

  ${({ notSupported }) =>
    notSupported &&
    css`
      background: #ccc;
      cursor: not-allowed;
    `}

  ${({ active }) =>
    active &&
    css`
      color: white;
      background: red;
      animation: ${pulse} 1.7s infinite;
    `}

  svg {
    font-size: 50px;
  }
`

export const TextWrapper = styledUI(Paper)<{ isBig: boolean }>(({ theme, isBig }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  padding: 0,
  position: 'relative',
  top: -70,
  transition: 'all .3s',
  width: 0,
  minHeight: 0,
  borderRadius: '100%',
  ...(isBig && {
    padding: 20,
    borderRadius: '4px',
    width: '80%',
    minHeight: 400,
  }),
}))

export const CloseButton = styledUI(IconButton)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
}))

export const Text = styled.p<{ length: number }>`
  color: black;
  text-align: center;
  margin: 40px 0;

  ${({ length }) => {
    if (length < 5) {
      return css`
        font-size: 8rem;
        line-height: 8rem;
      `
    }
    if (length < 15) {
      return css`
        font-size: 6rem;
        line-height: 6rem;
      `
    }
    if (length < 30) {
      return css`
        font-size: 4rem;
        line-height: 4rem;
      `
    }
    return css`
      font-size: 2.5rem;
      line-height: 2.5rem;
    `
  }}
`

const pulsation = keyframes`
  0%{
    transform: scale(1)
  }
  50%{
    transform: scale(1.1)
  }
  100%{
    transform: scale(1)
  }
`

const pulse = keyframes`
	0% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4), 0 0 0px 4px #fff;
	}

	50% {
		transform: scale(1.2);
		box-shadow: 0 0 0 50px rgba(255, 255, 255, 0), 0 0 0px 10px #fff;
	}

	100% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0), 0 0 0px 4px #fff;
	}
`
