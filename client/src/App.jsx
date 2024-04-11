import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/layout/Layout.jsx';
import ListPage from "./pages/listPage/ListPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx"
import SinglePage from "./pages/singlePage/SinglePage.jsx"



function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
      ]
    }
  ])

  return (
<RouterProvider router={router}/>
  )
}

export default App
