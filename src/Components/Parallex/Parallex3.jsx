import { Parallax } from 'react-parallax';
import spaceStation from '../../assets/spaceStation.jpeg'

const Parallex3 = () => {
  return (
    <Parallax className='image' bgImage={spaceStation} strength={800}>
   <div className='content'>
    <span className='img-txt'>A trip to space</span>
   </div>
</Parallax>
  )
}

export default Parallex3
