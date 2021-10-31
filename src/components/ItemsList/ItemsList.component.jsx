import React from 'react';
import ItemForm from '../ItemForm/ItemForm.component';
import SingleItem from '../SingleItem/SingleItem.component';
import Spinner from '../Spinner/Spinner.component';

import './ItemsList.styles.scss';

const ItemsList = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [objectToUpdate, setObjectToUpdate] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [items, setItems] = React.useState([
    {
      ID: 0,
      Name: 'Coffee',
      Description: 'Best Coffee',
      Price: 119,
      selected:false
    },
    {
      ID: 1,
      Name: 'Chocolate',
      Description: 'Best Chocolate',
      Price: 10,
      selected:false
    },
    {
      ID: 2,
      Name: 'Sugar',
      Description: 'Best Sugar',
      Price: 5,
      selected:false
    },
  ]);

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    if (JSON.parse(window.localStorage.getItem('storeItems'))) {
      setItems(JSON.parse(window.localStorage.getItem('storeItems')));
    } else {
      window.localStorage.setItem('storeItems', JSON.stringify(items));
    }
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if(!isModalOpen){
      let copy = [...items].map((u)=>{
        u.selected = false;
        return u
      })
      setItems(copy)
      window.localStorage.setItem('storeItems', JSON.stringify(copy));
    } 
    //eslint-disable-next-line
  }, [isModalOpen])
  
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.ID !== id);
    console.log(updatedItems);
    setItems([...updatedItems]);
    window.localStorage.setItem('storeItems', JSON.stringify(updatedItems));
  };

  const openUpdateModal = (bool, id) => {
    let copy = [...items].map((u)=>{
      u.selected = false;
      return u
    })

    let item = copy.find((item) => item.ID === id)
    item.selected = !item.selected
    setIsModalOpen(!bool);
    setItems(copy)
    setObjectToUpdate(item)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setObjectToUpdate((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItems = items.filter((item) => item.ID !== objectToUpdate.ID);
    const itemsToUpdate = [...updatedItems, objectToUpdate];
    setItems(itemsToUpdate);
    window.localStorage.setItem('storeItems', JSON.stringify(itemsToUpdate));
    setIsModalOpen(false);
  };

  const handleAddProduct = () => {
    setObjectToUpdate({
      ID: Date.now(),
      Name: '',
      Description: '',
      Price: 0,
      selected:false
    });
    setIsModalOpen(true);
  };
  const getFilteredItems = () => {
    const filteredItems = items.filter((item) => {
      return item.Name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return filteredItems;
  };

  return !isLoading ? (
    <div className="show-case">
      <input
        onClick={() => handleAddProduct()}
        className="add"
        type="button"
        value="+ Add"
      />
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search"
        type="text"
        placeholder="🔍 search products"
      />
      <div className="main-container">
        <div className="itemslist-container">
          {getFilteredItems().map((item) => {
            return (
              <SingleItem
                openUpdateModal={openUpdateModal}
                handleDelete={handleDelete}
                key={item.ID}
                data={item}
              />
            );
          })}
        </div>
        <div className="modal-container">
          {isModalOpen ? (
            <ItemForm
              handleSubmit={handleSubmit}
              objectToUpdate={objectToUpdate}
              handleChange={handleChange}
            />
          ) : null}
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default ItemsList;
