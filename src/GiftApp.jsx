import { useState } from "react";
import {AddCategory} from './AddCategory';
import { GiftGrid } from "./GiftGrid";

export const GiftApp = () => {
  //const [categories, setCategories] = useState(['Jose', 'Emi']);
  const [category, setCategory] = useState('');
  
  const onCategoryValue = (category) => {
    //setCategories([...categories, category]);
    setCategory(category)
  };

  return (
    <>
        <h2>Gift App</h2>
        
        {/* Category component: */}
        {/* OPTION 1: */}
        {/* <AddCategory setCategories={setCategories}/> */}
        {/* OPTION 2: */}
        <AddCategory onCategoryValue={(value) => onCategoryValue(value)}/>
        
        {/* Gift Grid component: */}
        {/* OPTION 1: */}
        <GiftGrid category={category}/>
        {/* OPTION 2: */}
        {/* <ol>
            {categories.map((category) => {
                return <li key={category}>{category}</li>
            })}
        </ol> */}
       
    </>
  )
}
