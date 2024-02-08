import { motion } from 'framer-motion'
import './navbar.scss'
import SideBar from './sideBar/SideBar'


const Navbar = () => {
  return (
    <div className='navbar'>
     {/* sidebar */}
     <SideBar/>
     <div className="wrapper3">
        <motion.span className='span2'
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        
        ></motion.span>
        <div className='social'>
            <a  target="_blank" href="https://www.instagram.com/a.hamit_bozkurt/" ><img  src="/icons8-instagram-48.png" alt="" /></a>
            <a  target="_blank" href="https://www.linkedin.com/in/a-hamit-bozkurt-a35005203"><img  src="/icons8-linkedin-48.png" alt="" /></a>
            <a target="_blank"  href="https://github.com/abdulhamit00"><img   src="/icons8-github-48.png" alt="" /></a>
          
        </div>
     </div>
    </div>
  )
}

export default Navbar
