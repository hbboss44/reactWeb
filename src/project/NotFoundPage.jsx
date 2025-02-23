import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (  <>
            <h1>Look's like you've lost your way</h1>
            <h3>404</h3>
            <p>Go to <Link to="/home">Home</Link></p>
    </>);
}
 
export default NotFoundPage;