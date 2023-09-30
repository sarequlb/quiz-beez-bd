import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Homes from './components/Homes/Homes';
import Topics from './components/Topics/Topics';
import Topic from './components/Topic/Topic';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,children:[
        {
          path:'/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Homes></Homes>
        },
        {
          path:'/topic/:quizId',
          loader:async ({ params}) =>{
           return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Topics></Topics>
        },
        // {
        //   path:'/topics',
        //   element:<Topics></Topics>
        // },
        {
          path:'/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'/blogs',
          element:<Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element:<h1>no data found</h1>
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
