import {useState} from 'react'

export const AddCategory = ({onCategoryValue}) => {
  const [category, setCategory] = useState('');

  const handleInput = (e) => {
    setCategory(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    //OPTION  1:
    //setCategories(categories => [...categories, category]);
    //OPTION2:
    onCategoryValue(category);

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
