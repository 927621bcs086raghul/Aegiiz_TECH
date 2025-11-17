import { Alert, Col, Row, Spin } from 'antd'
import ProductCard from './ProductCard'
import './ProductGrid.css'

const ProductGrid = ({ items = [], loading = false, error = null }) => {
  if (loading) return <div className="grid-loading"><Spin size="large" /></div>
  if (error) return <div className="grid-error"><Alert message="Error" description={error} type="error" showIcon /></div>

  return (
    <div className="product-grid-wrap">
      <Row gutter={[16, 16]}>
        {items.map((it) => (
          <Col key={it.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard item={it} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductGrid
