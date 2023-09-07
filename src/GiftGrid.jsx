import  { useEffect, useState } from 'react'
import {getGiftsAsync} from './helpers/getGifts'
import {GridItem} from './GridItem'


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
      <h3>{category}</h3>
      <div className='card-grid'>
            {
              images.map(image => {
                return <GridItem key={image.id} {...image} />
              })
               
            }
      </div>
                
    </>
  )
}
