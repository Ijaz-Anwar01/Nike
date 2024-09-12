import './Trending.css'
import trending from '../../assets/homeimg/Trending.png'
const Trending = () => {
  return (
    <div>
        <h2>Trending</h2>
        <div className="trending">

            <div className="banner">
            <img src={trending} alt="" />
            </div>

            <div className="texts">
                <h1>Nike Street Style</h1>
                <h4>A sleek bomber jacket and joggers paired with iconic Air Force 1s for effortless, everyday style.</h4>
            </div>

            <button>Shop</button>

           

        </div>
    </div>
  )
}

export default Trending