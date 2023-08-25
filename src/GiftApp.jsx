import { useState } from "react"

export const GiftApp = () => {
  const [categories, setCategories] = useState(['Jose', 'Emi']);
  const [name, setName] = useState('');

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleAddName = () => {
    setCategories([...categories, name]);
  };

  return (
    <>
        <h2>Gift App</h2>
        <input type="text" onChange={handleInputName}/>
        <button onClick={handleAddName}>Add name</button>
        <ol>
            {categories.map((category) => {
                return <li key={category}>{category}</li>
            })}
        </ol>
       
    </>
  )
}
