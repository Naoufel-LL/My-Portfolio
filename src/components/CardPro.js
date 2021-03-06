import './Allproject.css'

const CardPro = ({link,img,title,text}) => {
    return ( 
        <>
        <a href={link} target='_blank'> 
        <div className="cardpro">
            <div className="imgbox">
                <img src={img} />
            </div>
            <div className="cardpro-text">
            <h3>{title}</h3>
            <p>{text}</p>
            </div>
        </div>
        </a>
        </>
     );
}
 
export default CardPro;