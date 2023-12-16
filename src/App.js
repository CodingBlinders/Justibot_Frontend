
import HomePage from './Pages/HomePage';
import {NextUIProvider} from "@nextui-org/react";
import './App.css';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <HomePage />
      </div>
    </NextUIProvider>
    
  );
}

export default App;
