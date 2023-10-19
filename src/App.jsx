
import './App.css'
import AddCategory from './components/Dashboard/AddCategory/AddCategory';
import Analytics from './components/Dashboard/Analytics/Analytics';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MainDash from './components/Dashboard/Dashboard/MainDash';
import Order from './components/Dashboard/Order/Order';
import Products from './components/Dashboard/Products/Products';
import Home from './components/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "/dashboard/",
          element: <MainDash />,
        },
        {
          path: "/dashboard/category",
          element: <AddCategory />,
        },
        {
          path: "/dashboard/order",
          element: <Order />,
        },
        {
          path: "/dashboard/analytics",
          element: <Analytics />,
        },
        {
          path: "/dashboard/products",
          element: <Products />,
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} >
        <Home />
        <ScrollRestoration />
      </RouterProvider>

    </>
  )
}

export default App
