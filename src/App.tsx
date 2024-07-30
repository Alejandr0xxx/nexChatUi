import './App.css'
import Login from './components/public/components/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthVerify from './services/authVerify'

function App() {

  const router = createBrowserRouter([
    {
      errorElement: <h1>Opps!, an error has occurred</h1>,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          element: <AuthVerify />,
          children: [
            {
              path: '/wasa',
              element: <h1>Wasaa!! mai nigga</h1>
            }
          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
