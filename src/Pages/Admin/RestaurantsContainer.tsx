import { TimePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import { write } from 'fs';
import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const RestaurantsContainer = () => {
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const [name, setName] = useState('');
  const [_id, setID] = useState('');
  const [open, setOpen] = useState('');
  const [image, setImage] = useState('');
  const dishes = useSelector((state: any) => state.dishes.value);
  const [btnDisplay, setBtnDisplay] = useState(true);
  const updateFields = async () => {
    const args = { _id, name, image, open };
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

  const notEditableStyle = {
    background: 'none',
    border: 'none',
    textAlign: 'center',
  };
  const editableStyle = {
    background: 'none',
    border: 'solid',
    textAlign: 'center',
  };
  const setter = (ID: any) => {
    const Founded = restaurants.find((e: any) => e._id === ID);
    setName(Founded._id);
  };

  const finalStyle = btnDisplay ? notEditableStyle : editableStyle;

  return (
    <div className="tabs__content">
      <table style={{ width: '100%' }}>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>ID</th>
          <th>Chef</th>
          <th>Hours open</th>
          <th>Dishes of Restaurant</th>

          <th></th>
        </tr>

        {restaurants.map((res: any, key: number) => {
          return (
            <tr key={res._id}>
              <td className="col col-1">
                <input
                  type="text"
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'center',
                  }}
                  defaultValue={res.name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setID(res._id);
                    setImage(image === '' ? res.image : image);
                    setOpen(open === '' ? res.open : open);
                  }}
                />{' '}
              </td>
              <td className="col col-2">
                <img className="imgInAdminPage" src={res.image} />
              </td>
              <td className="col col-3"> {res._id}</td>
              <td className="col col-3">{res.chef}</td>
              <td className="col col-3">
                <input
                  type="text"
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'center',
                  }}
                  defaultValue={res.open}
                  onChange={(a) => {
                    setOpen(a.target.value);
                    setID(res._id);
                    setName(name === '' ? res.name : name);
                    setImage(image === '' ? res.image : image);
                  }}
                />{' '}
              </td>
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
