import './Spotlight.css'
import rv7 from '../../assets/homeimg/rv7.png'
import killshot from '../../assets/homeimg/killlshot.png'
import p41 from '../../assets/homeimg/pegasus41.png'
import cortez from '../../assets/homeimg/nikecortez.png'
import sbforce from '../../assets/homeimg/sbfroce.png'
import { Link } from 'react-router-dom'

const Spotlight = () => {
  return (
    <div>
      <h2 className='heading'>Classics Spotlight</h2>
      <div className="classics">
        <Link className='one' to={`/product/5`}>
          <div className="cards">
            <img src={sbforce} alt="" />
            <h1>SB FORCE</h1>
          </div>
        </Link>

        <Link className='one' to={`/product/4`}>
          <div className="cards">
            <img src={rv7} alt="" />
            <h1>REVOLUTION 7</h1>
          </div>
        </Link>

        <Link className='one' to={`/product/2`}>
          <div className="cards">
            <img src={killshot} alt="" />
            <h1>KILLSHOT</h1>
          </div>
        </Link>

        <Link className='one' to={`/product/1`}>
          <div className="cards">
            <img src={cortez} alt="" />
            <h1>CORTEZ</h1>
          </div>
        </Link>

        <Link className='one' to={`/product/3`}>
          <div className="cards">
            <img src={p41} alt="" />
            <h1>PEGASUS 41</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Spotlight
