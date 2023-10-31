import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'; // Add this import
import React from 'react';
import './app.css';
import Homepage from './pages/Home/Homepage';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#00C9B7', // Your custom primary color
		},
		secondary: {
			main: '#569D93', // Your custom secondary color
		},
	},
});


function App() {

	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Homepage />
			</ThemeProvider>
		</>
	)
}

export default App
