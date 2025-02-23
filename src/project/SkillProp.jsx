import "../project/skills.css"


const SkillProp = ({imgSource,imgAlternate,text}) => {
    return (  <>
        <img src={imgSource} alt={imgAlternate} className="skill-logo"/>
        <p className="skill-name">{text}</p>
    </>);
}
 
export default SkillProp;