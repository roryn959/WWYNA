import { useState } from "react";
import Container from "react-bootstrap/Container";

const DetailsInput = ({whereMet: prop_whereMet, workStudy: prop_workStudy}) => {
    const [whereMet, setWhereMet] = useState(prop_whereMet);
    const [workStudy, setWorkStudy] = useState(prop_workStudy);

    return ( 
        <Container fluid>
            <label htmlFor='details' className='form-label'><h4>Further Details</h4></label>
            <div className='form-floating mb-3'>
                <input
                    type='text'
                    className='form-control'
                    id='whereMet'
                    placeholder='Where you met'
                    value={ whereMet }
                    onChange={ (e) => setWhereMet(e.target.value)}
                />
                <label htmlFor='whereMet' className='text-secondary'>Where you met</label>
            </div>
            <div className='form-floating mb-3'>
                <input
                    type='text'
                    className='form-control'
                    id='workStudy'
                    placeholder='Where they work/study'
                    value={ workStudy }
                    onChange={ (e) => setWorkStudy(e.target.value)}
                />
                <label htmlFor='workStudy' className='text-secondary'>Where they work/study</label>
            </div>
        </Container>
     );
}
 
export default DetailsInput;