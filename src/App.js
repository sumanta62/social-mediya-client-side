
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} >

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
