
import {motion} from 'framer-motion'
import { fadeIn } from "../../Animation/Varint";
const TextBox = () => {
    return (
        <div className='text-box'>
            <motion.h3 variants={fadeIn('left',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.6}}>First Class Ticket</motion.h3>
            <motion.p variants={fadeIn('right',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.6}} className="container m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus accusantium, quam odio
            repudiandae mollitia eos sapiente quo labore magnam, dignissimos praesentium blanditiis ratione error
            expedita, incidunt rerum corrupti modi enim commodi maxime veniam! Eius repellendus voluptates ducimus
            perspiciatis officiis adipisci quibusdam amet, officia omnis quas id minus ipsam, aliquam qui voluptas quo
            veritatis dolores vero magnam inventore sed numquam dignissimos a nisi. Tempore dolorem provident illo natus
            velit temporibus fugiat odio aperiam a sunt et harum autem sequi officiis quos distinctio quis nihil, modi
            eveniet commodi animi non accusantium! Nesciunt ut voluptatibus cumque et doloribus nihil impedit odio sed.
        </motion.p>
        </div>
    )
}

export default TextBox