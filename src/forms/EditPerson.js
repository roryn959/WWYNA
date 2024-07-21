import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import NamesInput from './NamesInput';
import DetailsInput from './DetailsInput';
import InputList from './InputList';
import FurtherText from "./FurtherText";
import useFetch from "../hooks/useFetch";

const EditPerson = () => {
    const { id } = useParams();
    const navigator = useNavigate();

    const [fName, setFName] = useState('');
    const [sName, setSName] = useState('');
    const [nickName, setNickName] = useState('');
    const [whereMet, setWhereMet] = useState('');
    const [workStudy, setWorkStudy] = useState('');
    const [interests, setInterests] = useState([]);
    const [characteristics, setCharacteristics] = useState([]);
    const [further, setFurther] = useState('');

    const {data: person, error, isPending } = useFetch('http://localhost:8000/people/' + id);

    useEffect(() => {
        if (person){
            setFName(person.fName);
            setSName(person.sName);
            setNickName(person.nickName);
            setWhereMet(person.whereMet);
            setWorkStudy(person.workStudy);
            let i=0;
            setInterests(
                person.interests.map((interest) => {
                    return {id: i++, val: interest};
                })
            );
            i=0;
            setCharacteristics(
                person.characteristics.map((characteristic) => {
                    return {id: i++, val: characteristic};
                })
            );
            setFurther(person.further);
        }
    }, [person]);

    const flagNameRequired = () => {
        let nameFields = document.querySelectorAll('.needs-valid');
        
        Array.prototype.slice.call(nameFields)
            .forEach(f => {
                f.classList.add('is-invalid')
            });
    }
    const handleSubmit = e => {
        fetch(
            'http://localhost:8000/people/' + id,
            {
                method: 'DELETE'
            }
        );

        const person = {
            'fName': fName,
            'sName': sName,
            'nickName': nickName,
            'whereMet': whereMet,
            'workStudy': workStudy,
            'interests': interests.map(item => (item.val)),
            'characteristics': characteristics.map(item => (item.val)),
            'further': further
        }

        if (!!!person.fName && !!!person.sName && !!!person.nickName){
            flagNameRequired();
            e.stopPropagation();
            return;
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
        <div className="editperson">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { person &&
            <Container fluid>
                <div className="container container-fluid m-3">
                    <h1 className='display-1 '>Edit Entry</h1>
                </div>
                <hr className='my-4'/>
                <div className='container container-fluid mx-3'>
                    <form noValidate>
                        <NamesInput  fName={ fName } setFName = { setFName } sName={ sName } setSName={ setSName } nickName={ nickName } setNickName= { setNickName }/>
                        <DetailsInput whereMet={ whereMet } setWhereMet={ setWhereMet } workStudy={ workStudy } setWorkStudy={ setWorkStudy }/>
                        <InputList name={'Interests'} arr={ interests } setArr={ setInterests } />
                        <InputList name={'Characteristics'} arr={ characteristics } setArr={ setCharacteristics }/>
                        <FurtherText further={ further } setFurther={ setFurther }/>
                        <Container fluid>
                            <button
                                className='btn btn-primary mb-3 me-2'
                                onClick={e => {
                                    e.preventDefault();
                                    handleSubmit(e);
                                }}
                            >Submit</button>
                            <button
                                className='btn btn-secondary mb-3'
                                onClick={e => {
                                    e.preventDefault();
                                    navigator('/');
                                }}
                            >Cancel</button>
                        </Container>
                    </form>
                </div>
            </Container>
            }
        </div>
     );
}
 
export default EditPerson;