import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";

let interestIndex = 0;

const CreatePerson = () => {
    const [fName, setFName] = useState('');
    const [sName, setSName] = useState('');
    const [nickName, setNickName] = useState('');
    const [whereMet, setWhereMet] = useState('');
    const [workStudy, setWorkStudy] = useState('');
    const [interests, setInterests] = useState([]);
    const [characteristics, setCharacteristics] = useState([]);
    const navigator = useNavigate();

    const handleAdd = () => {
        setInterests([
            ...interests,
            {
                id: ++interestIndex,
                interest: ''
            }
        ]);
    }
    const handleEdit = (newInterest) => {
        setInterests(interests.map(i => {
            if (i.id === newInterest.id){
                return newInterest;
            } else {
                return i
            }
        }));
    }
    const handleDelete = (id) => {
        setInterests(
            interests.filter(i => i.id !== id)
        );
    }

    return ( 
        <Container fluid>
            <div className="container container-fluid m-3">
                <h1 className='display-1 '>New Entry</h1>
            </div>
            <hr className='my-4'/>
            <div className='container container-fluid mx-3'>
                <form >
                    <label htmlFor='names' className='form-label'><h4>Names</h4></label>
                    <div className="input-group" id='names'>
                        <div className="form-floating">
                            <input 
                                type='text'
                                className='form-control'
                                id='firstName'
                                placeholder='First Name'
                                value={ fName }
                                onChange={ (e) => setFName(e.target.value)}
                            />
                            <label htmlFor='firstName' className='text-secondary'>First Name</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type='text'
                                className='form-control'
                                id='secondName'
                                placeholder='Second Name'
                                value={ sName }
                                onChange={ (e) => setSName(e.target.value)}
                            />
                            <label htmlFor='secondName' className='text-secondary'>Second Name</label>
                        </div>
                        <div className="form-floating">
                            <input 
                                type='text'
                                className='form-control'
                                id='nickName'
                                placeholder='Nickname'
                                value={ nickName }
                                onChange={ (e) => setNickName(e.target.value)}
                            />
                            <label htmlFor='nickName' className='text-secondary'>Nickname</label>
                        </div>
                    </div>
                    <div className="form-text mx-2 mb-4">Please input at least one of the above.</div>

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
                    <ul>
                        <div className="vertical-input-group">
                            { interests.map((interest) => (
                                    <div className='input-group'>
                                        <li key={interest.id}>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder="Add an interest..."
                                                value={ interest.interest }
                                                onChange={(e) => {
                                                    handleEdit({
                                                        ...interest,
                                                        interest: e.target.value
                                                    });
                                                }}
                                            />
                                            <button
                                                className='btn btn-outline-secondary'
                                                onClick={ (e) => {
                                                    e.preventDefault();
                                                    handleDelete(interest.id);
                                                }}
                                            >Remove</button>
                                        </li>
                                    </div>
                                )) 
                            }
                            <button
                                className='btn'
                                onClick={ (e) => {
                                    e.preventDefault();
                                    handleAdd();
                                } }
                            >Add</button>
                        </div>
                    </ul>
                </form>
            </div>
        </Container>
     );
}
 
export default CreatePerson;