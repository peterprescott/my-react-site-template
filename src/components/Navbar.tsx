import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { useThemeContext } from '../theme/ThemeContext';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Blank', path: '/blank' },
  ];

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const renderNavItems = () => (
    isMobile ? (
      <>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenMenu}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.label}
              onClick={handleCloseMenu}
              component={RouterLink}
              to={item.path}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </>
    ) : (
      <Box sx={{ display: 'flex', gap: 2 }}>
        {navItems.map((item) => (
          <Button
            key={item.label}
            color="inherit"
            component={RouterLink}
            to={item.path}
            sx={{ fontSize: '1rem' }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    )
  );

  return (
    <AppBar position="static" elevation={0}>
      <Container>
        <Toolbar 
          disableGutters 
          sx={{ 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}
        >
          {renderNavItems()}
          
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              color="inherit"
              href="https://github.com/peterprescott"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/peterprescott"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
