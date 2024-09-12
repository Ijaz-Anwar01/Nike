import './Navbar.css'
import favourites from '../../assets/homeimg/heart.png'
import cart_logo from '../../assets/homeimg/cart.png'
import nike_logo from '../../assets/homeimg/nik-logo.png'
import search_icon from '../../assets/homeimg/search-icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <Link to='/'><img src={nike_logo} alt="" /></Link>

      </div>

      <div className="centre">
        <li><Link to='/newfeatured'>New & Featured</Link></li>
        <li><Link to='/men'>Men</Link></li>
        <li><Link to='/women'>Women</Link></li>
        <li><Link to='/kids'>Kids</Link></li>
        <li><a href="">Sale</a></li>
        <li><a href="">Customise</a></li>
        <li><a href="">SNKRS</a></li>
      </div>

      <div className="right">
        <div className="search">
        <img src={search_icon} alt="Search" className="search-icon" />

          <input type="text" placeholder='Search' />
          
          
        </div>

        <div className="cart">
          <li><img src={favourites} alt="" /></li>
          <li><img src={cart_logo} alt="" /></li>
        </div>
      </div>

    </div>
  )
}

export default Navbar