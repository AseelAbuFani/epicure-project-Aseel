import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import Close from '../../assets/CloseIcon.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { render } from '@testing-library/react';
import { RestaurantsContainer } from './RestaurantsContainer';
import { ChefsContainer } from './ChefsContainer';
import { DishesContainer } from './DishesContainer';

const Admin = () => {
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const dishes = useSelector((state: any) => state.dishes.value);
  const chefs = useSelector((state: any) => state.chefs.value);

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [_id, setID] = useState('');
  const [image, setImage] = useState('');
  const [btnDisplay, setBtnDisplay] = useState(true);

  const navigate = useNavigate();

  const toggleButtons = () => {
    const tmp = !btnDisplay;
    setBtnDisplay(tmp);
  };

  return (
    <div className="PageLayout">
      <img
        style={{ height: '30px', width: '10%' }}
        className="imgInAdminPage"
        src={Close}
        onClick={() => navigate(-1)}
        alt="exit"
      />

      <div className="tabs">
        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab1"
          defaultChecked
        />

        <label htmlFor="tab1" className="tabs__label">
          Restaurants
        </label>
        <RestaurantsContainer />

        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab3"
        />
        <label htmlFor="tab3" className="tabs__label">
          Chefs
        </label>
        <ChefsContainer />

        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab4"
        />
        <label htmlFor="tab4" className="tabs__label">
          Dishes
        </label>
        <DishesContainer />
      </div>
    </div>
  );
};
export default Admin;
