import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/layout/Layout.jsx';
import ListPage from "./pages/listPage/ListPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx"
import SinglePage from "./pages/singlePage/SinglePage.jsx"
import Profile from "./pages/profilePage/Profile.jsx";



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
        {
          path:"/profile",
          element:<Profile/>
        },
      ]
    }
  ])

  return (
<RouterProvider router={router}/>
  )
}

export default App
