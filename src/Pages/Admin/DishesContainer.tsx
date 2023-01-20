import { useSelector } from 'react-redux';

export const DishesContainer = () => {
  const dishes = useSelector((state: any) => state.dishes.value);
  return (
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
  );
};
