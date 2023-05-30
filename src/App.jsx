
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PopularMovies from './containers/PopularMovies'
import MovieDetails from './containers/MovieDetails'
import Layout from './components/Layout'

function App() {

  return (
    <BrowserRouter>
    <Layout>

    <Routes>
      <Route path='/' element={<PopularMovies />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
    </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
