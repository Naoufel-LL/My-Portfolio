import './Project.css'
const Card = ({img,title,desc}) => {
    return (<>
        <div className="card">
            <img src={img} style={{
                width:"800px"
            }}/>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        </>
      );
}
 
export default Card;