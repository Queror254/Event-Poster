import React from 'react';
import Poster from './components/Poster';

const App: React.FC = () => {
  // Optional: Set dark mode by default or based on system preference
  // React.useEffect(() => {
  //   document.documentElement.classList.add('dark');
  // }, []);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center p-2 sm:p-4 md:p-6 selection:bg-yellow-400 selection:text-neutral-900 font-sans">
      <Poster />
    </div>
  );
}

export default App;