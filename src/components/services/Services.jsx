import React from 'react';
import './services.scss';

const Services = () => {
  return (
    <div className='services'>
      <div className="textContainer2">
        <p>I focus on helping your brand grow 
            <br />and move forward</p>
        <hr />
      </div>
      <div className="titleContainer2">
        <div className="title">
            <img className='name'  src="/people.webp" alt="" />
            <h1 className='h1' ><b className='b'>My Web</b></h1>
        </div>
        <div className="title">
            <img className='name' src="/people.webp" alt="" />
            <h1 className='h1'>Programming <b className='b'>Skills</b></h1>
        </div>
      </div>
      <div className="listContainer2">
        <div className="box">
          <div>
            <img className='icons' src="/icons8-html-48.png" alt="" />
            <img className='icons' src="icons8-css-48.png" alt="" />
          </div>
          <h2 className='h2'>HTML+CSS</h2>
          <p>I have a strong command of HTML and CSS, and I use these skills to craft visually appealing and responsive web layouts. My keen eye for design ensures that your website not only functions flawlessly but also radiates beauty on all devices, creating an engaging user experience.</p>
        </div>
        <div className="box">
          <img className='icons' src="/icons8-javascript-48.png" alt="" />
          <h2 className='h2'>Javascript</h2>
          <p>I have hands-on experience in creating interactive and dynamic web applications using JavaScript. With my expertise in client-side scripting, I not only bring your ideas to life but also elevate the overall user experience, making your website a more engaging and interactive platform.</p>
        </div>
        <div className="box">
          <img className='icons' src="/icons8-react-50.png" alt="" />
          <h2 className='h2'>React.js</h2>
          <p>I have experience in building modern and efficient web applications with React.js. I use the latest features and best practices to create fast, scalable, and user-friendly interfaces that align with your business objectives.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
