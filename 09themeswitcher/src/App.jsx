import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem('themeMode') || 'light'
  );
 
  const lightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  // Apply the theme and store in localStorage
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  return (
    <Router>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme toggle button */}
              <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
              {/* Card component */}
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
