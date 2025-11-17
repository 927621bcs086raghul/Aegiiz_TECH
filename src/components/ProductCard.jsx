
import { Button, Card } from 'antd'
import './ProductCard.css'

const { Meta } = Card

const ProductCard = ({ item }) => {
  const { title, description, image, ingredients } = item

  return (
    <Card
      hoverable
      className="product-card"
      cover={<img alt={title} src={image} className="product-image" />}
    >
      <div className="product-overlay">
        <div className="overlay-content">
          <p className="overlay-desc">{description?.slice(0,120)}{description && description.length>120 ? '...' : ''}</p>
          <Button type="primary" className="view-button" onClick={() => console.log('View', title)}>View</Button>
        </div>
      </div>

      <Meta title={title} description={<div className="product-desc">{description?.slice(0,120)}{description && description.length>120 ? '...' : ''}</div>} />
      {ingredients && (
        <div className="product-ingredients">Ingredients: {Array.isArray(ingredients) ? ingredients.join(', ') : String(ingredients)}</div>
      )}
    </Card>
  )
}

export default ProductCard
