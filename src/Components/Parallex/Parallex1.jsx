import { Parallax } from 'react-parallax';
import Satelite from '../../assets/satellite.jpeg'

const Parallex1 = () => {
  return (
    <Parallax className='image' bgImage={Satelite} strength={800}>
   <div className='content'>
    <span className='img-txt'>A trip to space</span>
   </div>
</Parallax>
  )
}

export default Parallex1
