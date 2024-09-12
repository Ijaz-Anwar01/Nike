import './Featured.css';
import tshirt from '../../assets/homeimg/sweatshirt.jpg';
import shoes from '../../assets/homeimg/freakshoes.jpg'
import runnin from '../../assets/homeimg/nikerunning.jpg';

const Featured = () => {
  return (

    <div>
    <h2> Featured</h2>

    
    <div className='featured'>

      
      <div className="images">
        <div>
          <img src={runnin} alt="Running shoes" />
          <h4>Run in Pegasus 41</h4>
          <p>Shop</p>
        </div>
        <div>
          <img src={shoes} alt="Freak shoes" />
          <h4>Giannis Freak 6</h4>
          <p>Shop</p>
        </div>
        <div>
          <img src={tshirt} alt="T-shirt" />
          <h4>Nike Phoenix Fleece</h4>
          <p>Shop</p>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Featured;
