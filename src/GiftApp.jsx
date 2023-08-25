import { useState } from "react";
import {AddCategory} from './AddCategory';

export const GiftApp = () => {
  const [categories, setCategories] = useState(['Jose', 'Emi']);
  const onCategoryValue = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <>
        <h2>Gift App</h2>
        
        {/* OPTION 1: */}
        {/* <AddCategory setCategories={setCategories}/> */}

        {/* OPTION 2: */}
        <AddCategory onCategoryValue={(value) => onCategoryValue(value)}/>

        <ol>
            {categories.map((category) => {
                return <li key={category}>{category}</li>
            })}
        </ol>
       
    </>
  )
}
