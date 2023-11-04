import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'; // Add this import
import React from 'react';
import { Provider } from 'react-redux';
import './app.css';
import store from './feature/store';
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
const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#569D93', // Your custom primary color
		},
		secondary: {
			main: '#569D93', // Your custom secondary color
		},
	},
});


function App() {

	return (
		<>
			<Provider store={store}>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Homepage />
				</ThemeProvider>
			</Provider>
		</>
	)
}

export default App
