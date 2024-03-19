import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import NamesInput from './NamesInput';
import DetailsInput from './DetailsInput';
import InputList from './InputList';

const CreatePerson = () => {
    const [characteristics, setCharacteristics] = useState([]);
    const navigator = useNavigate();

    return ( 
        <Container fluid>
            <div className="container container-fluid m-3">
                <h1 className='display-1 '>New Entry</h1>
            </div>
            <hr className='my-4'/>
            <div className='container container-fluid mx-3'>
                <form >
                    <NamesInput fName={''} sName={''} nickName={''} />
                    <DetailsInput whereMet={'ghgj'} workStudy={''} />
                    <InputList arr={[{id: 1, val:'one'}, {id: 2, val: 'two'}]} />
                </form>
            </div>
        </Container>
     );
}
 
export default CreatePerson;