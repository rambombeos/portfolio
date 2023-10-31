import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'; // Add this import
import React from 'react';
import './app.css';
import Homepage from './pages/Home/Homepage';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {

	return (
		<>
			<ThemeProvider theme={darkTheme}> 
				<CssBaseline />
				<div className="app">
					<Homepage />
				</div>
			</ThemeProvider>
		</>
	)
}

export default App
