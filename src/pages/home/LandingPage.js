import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../../components/AppAppBar';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

export default function LandingPage() {
	const [mode, setMode] = React.useState('light');
	const defaultTheme = createTheme({ palette: { mode } });

	const toggleColorMode = () => {
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
	};

	const router = useRouter();

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
			<Hero />
			<Box sx={{ bgcolor: 'background.default' }}>
				<Features />
				<Divider />
				<Divider />
				<Footer />
			</Box>
		</ThemeProvider>
	);
}
