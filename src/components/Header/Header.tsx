import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
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
