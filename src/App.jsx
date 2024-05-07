import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainForm from './Pages/MainForm.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainForm />,
  },
  
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

export default App;