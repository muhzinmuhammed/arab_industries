import { Parallax } from 'react-parallax';
import Nasa from '../../assets/nasa.jpg'

const Parallex = () => {
  return (
    <Parallax className='image container mt-10' bgImage={Nasa} strength={800}>
   <div className='content'>
    <span className='img-txt'>A trip to space</span>
   </div>
</Parallax>
  )
}

export default Parallex
