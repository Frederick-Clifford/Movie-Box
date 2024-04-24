import NavBar from "./movie_box/components/NavBar"
import ErrorPage from "./movie_box/web_pages/ErrorPage"
import HomePage from "./movie_box/web_pages/HomePage"
import MoviePage from "./movie_box/web_pages/MoviePage"

import { createHashRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <HomePage />
    },

    {
      path: "/movie/:movieCategory/:movieId",
      element: <MoviePage />
    },

    {
      path: "*",
      element: <ErrorPage />
    }
  ])

  return(

    <>

      <NavBar />

      <main>

        <RouterProvider router={router} />

      </main>
    
    </>
  )
}

export default App
