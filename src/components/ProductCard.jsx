
import { Card } from 'antd'
import './ProductCard.css'

const { Meta } = Card

const ProductCard = ({ item }) => {
  const { title, description, image, ingredients } = item

  const shortDesc = typeof description === 'string' ? (description.length > 120 ? description.slice(0, 120) + '...' : description) : ''
  const ingredientsText = Array.isArray(ingredients)
    ? ingredients.join(', ')
    : ingredients && typeof ingredients === 'string'
    ? ingredients
    : ''

  return (
    <Card
      hoverable
      className="product-card"
      cover={<img alt={title} src={image} className="product-image" />}
    >
      <Meta title={title} description={<div className="product-desc">{shortDesc}</div>} />
      {ingredientsText ? (
        <div className="product-ingredients">Ingredients: {ingredientsText}</div>
      ) : null}
    </Card>
  )
}

export default ProductCard
