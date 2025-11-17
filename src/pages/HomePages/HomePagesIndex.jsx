
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ExploreCategories from '../../components/ExploreCategories'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PopularSection from '../../components/PopularSection'
import { fetchCoffeeRequest } from '../../features/coffee/coffeeSlice'
import './HomePagesIndex.css'

const HomePagesIndex = () => {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((s) => s.coffee)

  useEffect(() => {
    dispatch(fetchCoffeeRequest())
  }, [dispatch])

  return (
    <div className="home-page-root">
      <Header />
      <main className="home-main">
        <PopularSection />

        <ExploreCategories />
      </main>
      <Footer />
    </div>
  )
}

export default HomePagesIndex