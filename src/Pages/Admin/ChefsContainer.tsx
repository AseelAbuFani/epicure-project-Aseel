import { useSelector } from 'react-redux';

export const ChefsContainer = () => {
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const chefs = useSelector((state: any) => state.chefs.value);
  return (
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
  );
};
