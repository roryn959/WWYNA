import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigator = useNavigate();

    return ( 
        <div className="notFound">
            <h1 className="m-3">Page not found!</h1>
            <h4 className="m-3">Sorry, the page you're looking for does not exist.</h4>
            <button
                className="btn btn-primary ms-3"
                onClick={e => {
                    e.preventDefault();
                    navigator('/');
                }}
            >Return</button>
        </div>
     );
}
 
export default NotFound;