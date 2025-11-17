import { Alert, Skeleton } from 'antd'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux'
import './PopularSection.css'
import ProductCard from './ProductCard'

const BATCH = 4

const PopularSection = () => {
  const { items, loading, error } = useSelector((s) => s.coffee)
  const [visibleCount, setVisibleCount] = useState(BATCH)
  console.log('PopularSection render, items count:', visibleCount);

  useEffect(() => {
    setVisibleCount(BATCH)
  }, [items])

  const fetchMore = () => {
    console.log('fetchMore called')
    // simulate small load delay and log the new value inside the setter
    setTimeout(() => {
      setVisibleCount((v) => {
        const nv = Math.min(v + BATCH, items.length)
        console.log('visibleCount ->', nv)
        return nv
      })
    }, 250)
  }

  if (loading) { 
    // show skeleton cards while initial data is loading
    return (
      <section className="popular-section">
        <div className="section-header">
          <h2>Popular Right Now</h2>
        </div>
        <div className="popular-scroll-wrap">
          <div className="popular-scroll-inner">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="popular-item" key={`skeleton-${i}`}>
                <div className="product-card-skeleton">
                  <Skeleton active avatar/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) return <div className="grid-error"><Alert message="Error" description={error} type="error" showIcon /></div>

  const visibleItems = items.slice(0, visibleCount)
  console.log('visibleItems', visibleItems.length)
  console.log('items', items.length)

  return (
    <section className="popular-section">
      <div className="section-header">
        <h2>Popular Right Now</h2>
      </div>

      <div className="popular-scroll-wrap">
        <InfiniteScroll
          dataLength={visibleItems.length}
          next={fetchMore}
          hasMore={visibleCount < items.length}
          loader={<div className="load-more"><Skeleton active /></div>}
          horizontal={true}
          className="popular-scroll-inner"
          style={{ display: 'flex', gap: 16, padding: '8px 0', overflowX: 'auto' }}
        >
          {visibleItems.map((it) => (
            <div className="popular-item" key={it.id}>
              <ProductCard item={it} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  )
}

export default PopularSection
