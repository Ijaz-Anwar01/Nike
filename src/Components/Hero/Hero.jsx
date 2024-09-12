import './Hero.css'
import shoes from '../../assets/homeimg/freakshoes.jpg'
const Hero = () => {
  return (
   <div>
     <div className='hero-banner'>
      <img src={shoes} alt="" />
      
    </div>
    <br />
    <div className="description">
      <h4>Nike Pegasus 41</h4>
      <h1>  DONT WASTE YOUR ENERGY</h1>
      <h4>Run in Pegasus. fell the responsive energy return to Air Zoom and all-new ReactX foam</h4>
      <button>Shop</button>
      </div>
   </div>
  )
}

export default Hero