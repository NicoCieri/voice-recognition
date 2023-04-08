import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        {/* <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton> */}
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} display='flex' alignItems='center' gap='10px'>
          <RecordVoiceOverIcon /> Voice Recognition
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
