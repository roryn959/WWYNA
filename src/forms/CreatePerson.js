import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import NamesInput from './NamesInput';
import DetailsInput from './DetailsInput';
import InputList from './InputList';
import FurtherText from "./FurtherText";

const CreatePerson = () => {
    const fNameProps = useState('');
    const sNameProps = useState('');
    const nickNameProps = useState('');
    const whereMetProps = useState('');
    const workStudyProps = useState('');
    const interestsProps = useState([]);
    const characteristicsProps = useState([]);
    const furtherProps = useState('');

    const navigator = useNavigate();

    const handleSubmit = e => {
    
        const person = {
            'fName': fNameProps[0],
            'sName': sNameProps[0],
            'nickName': nickNameProps[0],
            'whereMet': whereMetProps[0],
            'workStudy': workStudyProps[0],
            'interests': interestsProps[0].map(item => (item.val)),
            'characteristics': characteristicsProps[0].map(item => (item.val)),
            'further': furtherProps[0]
        }

        fetch(
            'http://localhost:8000/people',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(person)
            }
        ).then(() => {
            navigator('/');
        })
    }

    return (
        <Container fluid>
            <div className="container container-fluid m-3">
                <h1 className='display-1 '>New Entry</h1>
            </div>
            <hr className='my-4'/>
            <div className='container container-fluid mx-3'>
                <form >
                    <NamesInput  fNameProps={ fNameProps } sNameProps={ sNameProps } nickNameProps={ nickNameProps }/>
                    <DetailsInput whereMetProps={ whereMetProps } workStudyProps={ workStudyProps } />
                    <InputList name={'Interests'} arrProps={ interestsProps } />
                    <InputList name={'Characteristics'} arrProps={ characteristicsProps } />
                    <FurtherText furtherProps={ furtherProps } />
                    <Container fluid>
                        <button
                            className='btn btn-outline-primary mb-3'
                            onClick={e => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >Submit</button>
                    </Container>
                </form>
            </div>
        </Container>
     );
}
 
export default CreatePerson;