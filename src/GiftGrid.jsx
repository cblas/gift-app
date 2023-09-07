import  { useEffect, useState } from 'react'
import {getGiftsAsync} from './helpers/getGifts'


 export const GiftGrid = ({category}) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const gifts = await getGiftsAsync(category);
    setImages(gifts);
  }

  useEffect(()=>{
    getImages();

  },[category])
  

  return (
    <>
          <ul>
            {
              images.map(({id, title}) => {
                return <li key={id}>{title}</li>
              })
               
            }
           
          </ul>
    </>
  )
}
