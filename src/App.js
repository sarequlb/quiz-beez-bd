import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,children:[
        {
          path:'/',
          element:''
        },
        {
          path:'/topics',
          element:<h1>topic</h1>
        },
        {
          path:'/statistics',
          element:<h1>Statistics</h1>
        },
        {
          path:'/blog',
          element:<h1>Blog</h1>
        }
      ]
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
