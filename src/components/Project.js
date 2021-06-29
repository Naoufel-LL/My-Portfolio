import './Project.css'
import Card from './Card'
import Carousel from 'react-elastic-carousel';
import pic1 from './images/project1.PNG'
import pic2 from './images/project2.PNG'
import pic3 from './images/project4.PNG'
import pic4 from './images/project7.PNG'
const Project = () => {
    return (  
      <>

        <div id="projects" className="project">
            <div className="tit">
                <h3> <svg viewBox="0 0 640 512">
      <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
    </svg> Lastest Projects</h3>
    <h4>Here are My Projects Hope You Like it <span>❤</span> </h4>
            </div>
        <Carousel className="carousel">
              <Card img={pic4} title="Clutch.GG" desc="A Valorant Stats WebApp"/>
            <Card img={pic1} title="TeslaClone" desc="Full TeslaWebApp using ReactJs 👨‍💻⚡"/>
            <Card img={pic2} title="PizzaWebApp" desc="Responsive WebApp 😀 For Pizza Delivery 🍕🛵"/>
            <Card img={pic3} title="GymWebApp" desc="Gym WebApp🥊 using ReactJs 😀👨‍💻"/>
            </Carousel> 
        </div>
             </>
     );
}
 
export default Project;