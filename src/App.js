import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Topic from './components/Topic/Topic';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';

function App() {

  const router = createBrowserRouter([
   { path: '/',
    element: <Main></Main>, children: [
      { path: '/',
      loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Home></Home>},
      {
        path:'/topic/:topicId',
        loader: async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
        },
        element: <Topic></Topic>
      },
      {
        path: '/statistics',
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics> </Statistics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }


    ]},
    
   {
    path: '*',
    element: <div>Error</div>
   }
  ])
  

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
