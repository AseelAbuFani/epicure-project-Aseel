import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import Close from '../../assets/CloseIcon.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { render } from '@testing-library/react';
import { RestaurantsContainer } from './RestaurantsContainer';

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

  const updateFields = async () => {
    const args = { _id, name, image };
    const resopnse = await axios.post(
      'http://localhost:3001/api/restaurants/updateRestaurant',
      args
    );
    if (resopnse.data.status === 'failure') {
      toast.error(resopnse.data.message);
      return;
    }
    toast.success(resopnse.data.message);
  };

  const toggleButtons = () => {
    const tmp = !btnDisplay;
    setBtnDisplay(tmp);
  };

  return (
    <>
      <img
        style={{ height: '30px', width: '10%' }}
        className="imgInAdminPage"
        src={Close}
        onClick={() => navigate(-1)}
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
        <div className="tabs__content">
          <table>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>ID</th>
              <th>Restaurants of chef</th>
              <th></th>
            </tr>

            {chefs.map((chef: any, key: number) => {
              return (
                <tr key={key}>
                  <td className="col col-1">{chef.name}</td>
                  <td className="col col-2">
                    <img className="imgInAdminPage" src={chef.chefImage} />
                  </td>
                  <td className="col col-3">{chef._id}</td>
                  <td className="col col-3">
                    {chef.chefsRestaurants.map((chefRes: any) =>
                      restaurants.map((res: any) =>
                        res._id == chefRes ? (
                          <>
                            {res.name},<br />{' '}
                          </>
                        ) : (
                          ''
                        )
                      )
                    )}
                  </td>
                  <td>
                    {' '}
                    <button className="buttonToAdmin">Edit</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab4"
        />
        <label htmlFor="tab4" className="tabs__label">
          Dishes
        </label>
        <div className="tabs__content">
          <table>
            <tr>
              <th>Dish Name</th>
              <th>Image</th>
              <th>Dish ID</th>
              <th>Discription</th>
              <th>Restaurant Dish</th>
              <th>Dish Price</th>
              <th></th>
            </tr>

            {dishes.map((dish: any, key: number) => {
              return (
                <tr key={key}>
                  <td className="col col-1">{dish.name}</td>
                  <td className="col col-2">
                    <img className="imgInAdminPage" src={dish.image} />
                  </td>
                  <td className="col col-3">{dish._id}</td>
                  <td className="col col-3">{dish.description}</td>
                  <td className="col col-3">{dish.restaurant}</td>
                  <td className="col col-3">{dish.price}₪</td>
                  <td>
                    {' '}
                    <button className="buttonToAdmin">Edit</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default Admin;
