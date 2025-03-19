import resume from '../Images/Ade-Sulaiman.png'
import "../project/resume.css";

const Resume = () => {
    return ( <>
    <div className="myresume" style={{textAlign:'center'}}>
        <img src={resume} alt="My resume" style={{width:'35rem'}}/>
        </div>
    </> );
}
 
export default Resume;
