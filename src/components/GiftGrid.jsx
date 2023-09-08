import {GridItem} from './GridItem'
import { useGetImages } from '../hooks/useGetImages'


 export const GiftGrid = ({category}) => {
  //OPTION1:
  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const gifts = await getGiftsAsync(category);
  //   setImages(gifts);
  // }

  // useEffect(()=>{
  //   getImages();

  // },[category])
  
  //OPTION2: USE CUSTOM HOOK:
  const {images, isLoading} = useGetImages(category)

  return (
    <>
      <h3>{category}</h3>
      {isLoading && (<h4>Loading content...</h4>)}
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
