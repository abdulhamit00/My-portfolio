import { motion } from 'framer-motion'
import './hero.scss'


const textVariants ={
initial: {
    x:-500,
    opacity:0,
},
animate:{
    x: 0,
    opacity:1,
    transition:{
        duration:1,
        staggerChildren:0.1
    },
},
scrollButton:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat:Infinity
    }
}
}



const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className='textContainer' variants={textVariants} initial='initial' animate='animate' >
           <motion.h2 variants={textVariants} >Abdulhamit Bozkurt</motion.h2> 
           <motion.h1 variants={textVariants} >Frontend Developer || React Js. </motion.h1>
        <motion.div variants={textVariants}  >
            
        </motion.div>
        <motion.img  variants={textVariants}  src="/scroll.png" animate='scrollButton' alt="" />
        </motion.div>
        </div>
        <div className="slidingTextContainer" >
            Web Developer
        </div>
      <div className="imageContainer">
        <img className='images' src="d86e4bdd-74cf-495c-80d9-e1d8e7ae319a.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero
