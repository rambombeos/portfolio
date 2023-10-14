import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'; // Add this import

import React from 'react';
import Homepage from './pages/Homepage';

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
