import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import RootRouter from './router/RootRouter';
import styles from './App.module.css';


const router = createBrowserRouter([
  {
    path:'/',
    element: <RootRouter />,
    errorElement: <p>Not Found</p>,
    children: [
      {index:true, element:<Main />}
      
    ]
  },

]);

function App() {
  return (
    <div className={styles.app}>
    <RouterProvider router={router}>
    </RouterProvider>
    </div>
  );
}

export default App;
