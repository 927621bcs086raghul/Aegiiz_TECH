import { Col, Row } from 'antd'
import './ExploreCategories.css'

const categories = [
  { title: 'Electronics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArXVH71AjDmEsLvDfV1fazOkSNqxhan0-i7CWXSqAGzgkdtS7PJljWsB6qsod372H3yHVncps97DVjDCzx8hw2tGj77L2QO3jblxVCrKrgdzWcAXeuz98fQHAu3oI-xCgldiFeo7ngt_-USJbO68lvmJSVkaphqc2wMWDj2KkKvvYaLOfL3knxt29KAZZmQbF6vAIbN-rSyQlmNE6iLWUgQec9eEDJOzJe9SUyCbFdITAey9xsI0Rq2KXZjRWL7vAi1bO99WnGB_c' },
  { title: 'Apparel', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPx2yRYuJwRFuLgOIXh1v6Ak23-K85SvzWVXRmCQwUP0wpZqCCDiHvPLtGifrjfd6qr39nyD3bdhABVn4SBpmWGuJyWTo80QlIJe-c5_5DC3GplNYWN_KR7y0nEY0v6TskVYW9i3Lb9Cxq2I2_Mtu_iiXdhbi8iH4JmAlOfRiijl87rplEJuIkY6fTPx-V3UQNriaedleRlH6efBOGUagTMf2hcqsGL-lruCS1ePULuYG1TVyPwQPSdo83I2C-KyL86ITebZ-ctso' },
  { title: 'Home Goods', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVCKeSS3DyJu1SuflbyozNpJ7T8rUFR_hPfIejaTOpRYNk8xI5zF8e91unKjnkYkK7a7Jnvi14OWfSuCKp4H0AJZcCq6Hhr4J0M3w9XoAB3_X1mKDpOpktmPrCJyl1lxGfh4ooZ_h4JkP9i2KF2CfE23ZF7fYsVTEoisEnNSbn28wZjzwKLU5f6jvGjRORsaqsDUGv1G-olafUWHCvwU-AHfpA2szovWBKlJ32mYnM9pEmPbkYmfQ7q4hrUDRzd_P2o-pGYH1J2sw' },
  { title: 'Beauty', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaz9SzlUCceuQnRv2uZ_X-mDigbgUJsBORwD2LCI2qOckCTBqL1W4F21gp8QVnjVCtB0XoGSyb9W1HIYc_QhkmU4umo_vaF80eM-3CKyqFAS9bnbT3LPTsqx1C8EyVjNO4SIyjd3kQ49rSZ6sq88gIo2GStgwtvIrklBVxHbQnHqk72ASVmPLi24ONwYt5oMMb_2kD14bL31SvALHNed2fH74suD0D0LMQzce8iPpGYxq1ADELXyJcHkOdB7dYL2whKUUnPMFdneI' },
]

const ExploreCategories = () => {
  return (
    <section className="explore-section">
      <div className="section-header">
        <h2>Explore Our Categories</h2>
      </div>

      <div className="explore-grid">
        <Row gutter={[16, 16]}>
          {categories.map((c) => (
            <Col key={c.title} xs={24} sm={12} lg={6}>
              <a className="category-tile" href="#" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url('${c.img}')`}}>
                <div className="cat-title">{c.title}</div>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default ExploreCategories
