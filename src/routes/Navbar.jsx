import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import { NavLink } from 'react-router-dom';
import { grey } from '@mui/material/colors';

const pages = ['Dashboard'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const isLoggedIn = false;

	return (
		<AppBar position="static" sx={{ backgroundColor: grey[800] }}>
			<Container maxWidth="false">
				<Toolbar disableGutters>
					{/* LOGO */}
					<AirplaneTicketIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<NavLink to="/" style={{ textDecoration: 'none', }}>
						<Typography
							variant="h6"
							noWrap
							sx={{
								display: { xs: 'none', md: 'flex' },
								fontWeight: 700,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
								pr: 1
							}}
						>
							gpt
						</Typography>
					</NavLink>
					<Divider orientation="vertical" variant="middle" flexItem sx={{ borderColor: grey[300] }} />

					{/* Nav options */}
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<NavLink key={page} to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none' }}>
								<Button
									onClick={handleCloseNavMenu}
									sx={{ m: 2, color: 'white', display: 'block' }}
								>
									{page}
								</Button>
							</NavLink>
						))}
					</Box>

					{/* HAMBURGER MENU */}
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					{/* MIDDLE LOGO */}
					<AirplaneTicketIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						gpt
					</Typography>

					{/* Account / Login */}
					{isLoggedIn ? (
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem key={setting} onClick={handleCloseUserMenu}>
										<Typography textAlign="center">{setting}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					) : (
						<Box sx={{ flexGrow: 0 }}>
							<NavLink to="/login" style={{ textDecoration: 'none' }}>
								<Button
									sx={{ my: 2, color: 'white' }}
									startIcon={<LoginRoundedIcon />}
								>
									Login
								</Button>
							</NavLink>
						</Box>
					)}
					{/* Account details */}

				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
