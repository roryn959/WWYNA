import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigator = useNavigate();

    return ( 
        <div className='success'>
            <h1 className='my-3 mx-3'>Registration successful!</h1>
            <button
                className='btn btn-lg btn-primary mx-3'
                onClick={e => {
                    e.preventDefault();
                    navigator('/');
                }}>
            Continue</button>
        </div>
     );
}
 
export default Success;