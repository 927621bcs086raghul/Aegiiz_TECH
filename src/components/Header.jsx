import { HeartOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { Badge, Button, Input, Layout } from 'antd'
import './Header.css'

const { Header: AntHeader } = Layout

const LogoSvg = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_6_330)">
      <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd" />
    </g>
    <defs>
      <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white" /></clipPath>
    </defs>
  </svg>
)

const Header = () => {
  return (
    <AntHeader className="site-header">
      <div className="header-inner">
        <div className="left-group">
          <div className="brand">
            <div className="brand-icon"><LogoSvg /></div>
            <h2 className="brand-title">Shopify</h2>
          </div>

          <nav className="main-nav">
            <a className="nav-link" href="#">Shop</a>
            <a className="nav-link" href="#">New Arrivals</a>
            <a className="nav-link" href="#">Sale</a>
          </nav>
        </div>

        <div className="right-group">
          <div className="search-wrap">
            <Input prefix={<SearchOutlined />} placeholder="Search" />
          </div>

          <div className="actions">
            <Button type="text" icon={<UserOutlined />} />
            <Button type="text" icon={<HeartOutlined />} />
            <Badge count={3} offset={[0, 0]}>
              <Button type="text" icon={<ShoppingOutlined />} />
            </Badge>
          </div>
        </div>
      </div>
    </AntHeader>
  )
}

export default Header
