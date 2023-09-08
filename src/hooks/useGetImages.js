import { useState, useEffect } from 'react';
import { getGiftsAsync } from '../helpers/getGifts'

//CUSTOM HOOK: 
//Is basicly a function that in this case returns a object
//Also it can return jsx/component result

export const useGetImages = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getImages = async () => {
    setIsLoading(true);
    const gifts = await getGiftsAsync(category);
    setImages(gifts);
    setIsLoading(false);
  }

  useEffect(()=>{
    getImages();

  },[category])
  
    return {
        images: images,
        isLoading: isLoading,
  }
}
