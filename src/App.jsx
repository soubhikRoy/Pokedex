import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Todos from './components/todos/Todos'
import PokedexMain from './components/pokedex/PokedexMain'
import BigBasket from './components/bigbasket/BigBasket'
import QuizBaseComponent from './components/quiz/QuizBaseComponent'
import SimpleForm from './components/form/SimpleForm'
import Home from './components/home/Home'
import ProductsGallery from './components/productsgallery/ProductsGallery'
import Demo from './components/demo/Demo'
import MultiAsync from './components/demo/MultiAsync'
import CustomDropdown from './components/demo/CustomDropdown'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <div>404 nf</div>
    },
    {
      path: '/pokedex',
      element: <PokedexMain />,
      errorElement: <div>404 nf</div>
    },
    {
      path: '/todos',
      element: <Todos />,
      errorElement: <div>404 not found</div>
    },
    {
      path: '/bigbasket',
      element: <BigBasket />,
      errorElement: <div>404 not found</div>
    },
    {
      path: '/quiz',
      element: <QuizBaseComponent />,
      errorElement: <div>404 not found</div>
    },
    {
      path: '/form',
      element: <SimpleForm />,
      errorElement: <div>404 not found</div>
    },
    {
      path: '/products',
      element: <ProductsGallery />,
      errorElement: <div>404 not found</div>
    },
    {
      path: '/demo',
      element: <Demo />,
      errorElement: <div>404 not found</div>
    },
    {
      path: '/multiasync',
      element: <MultiAsync />,
      errorElement: <div>404 not found</div>
    },
    {
      path: '/customdropdown',
      element: <CustomDropdown />,
      errorElement: <div>404 not found</div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App