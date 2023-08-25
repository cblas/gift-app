import React, {useState} from 'react'

export const AddCategory = ({setCategories}) => {
  const [category, setCategory] = useState('');

  const handleInput = (e) => {
    setCategory(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setCategories(categories => [...categories, category]);
    setCategory('');
  };

  return (
    <form onSubmit={handleAdd}>
        <input 
            type="text" 
            onChange={handleInput}
            value={category}
            placeholder='Search by category...'
            />

    </form>
  )
}
