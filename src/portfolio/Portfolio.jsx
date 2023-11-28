import { motion,useScroll,useSpring, useTransform } from 'framer-motion'
import './portfolio.scss' 
import { useRef } from 'react'


const items = [
{
    id:1,
    title:'Youtube-Clone',
    img:'https://www.vectorico.com/wp-content/uploads/2018/02/youtube-dark-squircle-300x300.png',
    desc:'In this project, I created a YouTube-like sharing platform using modern web technologies and React Vite. This project can be a great resource for those interested in web development and looking to learn React. It offers an experience geared towards both development and learning.If you want to see the project live and try the application, simply click on the "See Demo" button.',
   href:'https://visionary-mooncake-160178.netlify.app/'
},
{
    id:2,
    title:'Map-Project',
    img:'https://w7.pngwing.com/pngs/1009/330/png-transparent-computer-icons-map-map-cdr-map-vector-map.png',
    desc:'I am excited to share with you a unique map application that I have developed, showcasing my coding skills and creative vision. This special map application was brought to life using the JavaScript programming language and harnessing the power of the Leaflet map library',
    href:'https://iridescent-cobbler-2c53b8.netlify.app/'
},
{
    id:3,
    title:'Spotify-Clone',
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/1024px-Spotify_App_Logo.svg.png',
    desc:'In this project, I created a Spotify-like music streaming service using modern web technologies and JavaScript. This project can be a valuable resource for those interested in web development and those looking to learn about web technologies. It offers a customized experience for both development and learning purposes.If you want to explore the project live and try the application, simply click on the "See Demo" button.',
    href:'https://652d60ad7cb02b2fde06c151--calm-gecko-965c9c.netlify.app/'
  
},

]

const Single =({item}) =>{
    const ref = useRef()

    const {scrollYProgress} =useScroll({
        target:ref,
        offset:['start start','end,start']
        
    });

    const y = useTransform(scrollYProgress,[0,1],['0%','-300%'])
    return (
    <section ref={ref}>
      <div className='container'>
        <div className="wrapper2">
            <div className="imageContainer">
     <img className='img2' src={item.img} alt="" />
     </div>
     <motion.div className="textContainer3" style={{y:y}}>
        <h2 >{item.title}</h2>
        <p>{item.desc}</p>
        <a className='demo-button' target="_blank" href={item.href}>See Demo</a>
     </motion.div>
     </div>
      </div>
     
        </section>
    )
}

const Portfolio = () => {
 const ref = useRef()

    
    const {scrollYProgress} =useScroll({
    target:ref,
    offset:['end end','start,start']
});

const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping:30,

}
    )


  return (
    <div className='portfolio'ref={ref} >
        <div className="progress">
            <h1 className='featured'>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id} />
        ))}
    </div>
    
  )
}

export default Portfolio



