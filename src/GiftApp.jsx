import { useState } from "react";
import {AddCategory} from './AddCategory';

export const GiftApp = () => {
  const [categories, setCategories] = useState(['Jose', 'Emi']);

  return (
    <>
        <h2>Gift App</h2>
        <AddCategory setCategories={setCategories}/>
        <ol>
            {categories.map((category) => {
                return <li key={category}>{category}</li>
            })}
        </ol>
       
    </>
  )
}
