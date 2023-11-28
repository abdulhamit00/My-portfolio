import { motion,useScroll,useTransform} from 'framer-motion'
import { useRef } from 'react'
import './parallax.scss'

const Parallax = ({ type }) => {

    const ref =useRef()
    const {scrollYProgress}= useScroll({
        target:ref,
        offset:['start start','end,start']
    })
  
    const yBg = useTransform(scrollYProgress,[0, 1] ,
        ["0%","100%"]);
    const yText = useTransform(scrollYProgress,[0, 1] ,
            ["0%","500%"])
  return (
    <div  className='parallax' 
    ref={ref}
    style={{
    background:
    type==='services' 
    ? 'linear-gradient(180deg,#111132,#0c0c1d)' 
    : 'linear-gradient(180deg,#111132,#505064)'
    }} >
  <motion.h1 style={{y:yBg}} >
    {type==='services' ? 'What can I do??' : 'For More,Scroll Down'}</motion.h1>
  <motion.div style={{y:yBg}} className="mountains"></motion.div>
  <motion.div style={{backgroundImage:`url(${type==='services' ? '/planets.png' :  '/sun.png'})`}} className="planets"></motion.div>
  <motion.div style={{x:yText}} className="stars">
  
  </motion.div>
  
  {type !== 'services' && (
  <motion.img className='down' style={{y: yBg}} src="/icons8-down.gif" alt="Resim Açıklaması" />
  )}
  
    </div>
  )
  }
  

export default Parallax
