import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const RestaurantsContainer = () => {
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const [name, setName] = useState('');
  const [_id, setID] = useState('');
  const [image, setImage] = useState('');
  const dishes = useSelector((state: any) => state.dishes.value);
  const [btnDisplay, setBtnDisplay] = useState(true);
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
  const onClickSave = () => {
    updateFields();
    toggleButtons();
  };

  const toggleButtons = () => {
    const tmp = !btnDisplay;
    setBtnDisplay(tmp);
  };
  return (
    <div className="tabs__content">
      <table>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>ID</th>
          <th>Chef</th>
          <th>Houers open</th>
          <th>Dishes of Restaurant</th>
          <th></th>
        </tr>

        {restaurants.map((res: any, key: number) => {
          return (
            <tr key={key}>
              <td className="col col-1">
                <input
                  style={{ background: 'none', border: 'none' }}
                  onChange={(e) => setName(e.target.value)}
                />{' '}
                {res.name}
              </td>
              <td className="col col-2">
                <img className="imgInAdminPage" src={res.image} />
              </td>
              <td className="col col-3">
                {' '}
                <input
                  value={_id}
                  style={{ background: 'none', border: 'none' }}
                  onChange={() => setID(res._id)}
                />
                {res._id}
              </td>
              <td className="col col-3">{res.chef}</td>
              <td className="col col-3">{res.open}</td>
              <td className="col col-3">
                {res.dishesRestaurant.map((dishRes: any) =>
                  dishes.map((dish: any) =>
                    dish._id == dishRes ? (
                      <>
                        {dish.name}
                        <br />{' '}
                      </>
                    ) : (
                      ''
                    )
                  )
                )}
              </td>
              <td>
                {' '}
                <button
                  id="cancelBtn"
                  onClick={toggleButtons}
                  className="buttonToAdmin cancel"
                  style={{
                    visibility: `${btnDisplay ? 'hidden' : 'visible'}`,
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={toggleButtons}
                  id="editBtn"
                  className="buttonToAdmin"
                  style={{
                    visibility: `${!btnDisplay ? 'hidden' : 'visible'}`,
                  }}
                >
                  Edit
                </button>
                <button
                  id="saveBtn"
                  onClick={onClickSave}
                  className="buttonToAdmin save"
                  style={{
                    visibility: `${btnDisplay ? 'hidden' : 'visible'}`,
                  }}
                >
                  Save
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
