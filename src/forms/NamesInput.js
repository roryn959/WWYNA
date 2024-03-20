import { useState } from "react";
import Container from "react-bootstrap/Container";

const NamesInput = (props) => {
    const [fName, setFName] = props.fNameProps;
    const [sName, setSName] = props.sNameProps;
    const [nickName, setNickName] = props.nickNameProps;

    return ( 
        <Container fluid>
            <label htmlFor='names' className='form-label'><h4>Names</h4></label>
            <div className="input-group" id='names'>
                <div className="form-floating">
                    <input 
                        type='text'
                        className='form-control needs-valid'
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
                        className='form-control needs-valid'
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
                        className='form-control needs-valid'
                        id='nickName'
                        placeholder='Nickname'
                        value={ nickName }
                        onChange={ (e) => setNickName(e.target.value)}
                    />
                    <label htmlFor='nickName' className='text-secondary'>Nickname</label>
                </div>
            </div>
            <div className="form-text mx-2 mb-4">Please input at least one of the above.</div>
        </Container>
     );
}
 
export default NamesInput;