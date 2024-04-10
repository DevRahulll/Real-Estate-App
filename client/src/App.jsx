import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/layout/Layout.jsx';
import ListPage from "./pages/listPage/ListPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx"



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
      ]
    }
  ])

  return (
<RouterProvider router={router}/>
  )
}

export default App
