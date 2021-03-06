import './Contact.css'
import ReactTypingEffect from 'react-typing-effect';
const Contact = () => {
    return (  
        <div className="contact-container" id="contact">
            <div className="contact-left">
                <h2><span>A</span>bout <span>M</span>e</h2>
                <p>Hey I'm Naoufel Bahassoune,I'm a Front end Developer with Html Css JavaScript Jquery Boustrap ... ,
                    I will Create your Website for Your Buisness or Your Shop or Your Youtube Channel or Gaming Server
                    with good Design and Responsive for all devices and cool Effects and Animations.
                </p><br />
                <h2><span>W</span>hy <span>M</span>e <span>?</span></h2>
      <ReactTypingEffect eraseDelay={1500} typingDelay={1000}
        text={["Friendly Customer Support", "100% Customer Satisfaction","On-time Delivery"]}
      />
      <br/>
      <h2><span>C</span>ontact <span>M</span>e</h2>
                <h3><span>☎ </span> +212605972830</h3>
    <h3><span>✉ </span> bahassounenaoufel@gmail.com</h3>
            </div>
            <div className="contact-right">
                <h2>Interested to work together?</h2>
                <h2 className="under">Let's talk</h2>
                <form>
                    <div className="inputs">
                        <input required name="name"  placeholder="Your Name"/>
                        <input required name="email"  placeholder="Your Email" />
                    </div>
                    <textarea required  placeholder="Your Message Here ..." />
                    <a href="mailto:naoufelbahassoune@gmail.com">Send </a>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;