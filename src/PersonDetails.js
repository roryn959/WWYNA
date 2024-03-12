import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router";
import useFetch from "./useFetch.js";


const PersonDetails = () => {
    const { id } = useParams();
    const {data: person, error, isPending } = useFetch('http://localhost:8000/people/' + id);

    const conditionalDisplay = ( (s) => {
        if (s === ''){
            return 'text-muted';
        } else {
            return '';
        }
    })

    return ( 
        <div className="person-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { person && 
            <div className='person-info'>
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 className={ `display-1 text-end ` + conditionalDisplay(person.fName) }>
                                { !person.fName && 'First Name'}{ person.fName }
                            </h1>
                        </Col>
                        <Col>
                            <h1 className={ `display-1 ` + conditionalDisplay(person.sName) }>{ !person.sName && 'Second Name'}{ person.sName }</h1>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <h1 className={ `display-3 text-center ` + conditionalDisplay(person.nickName) }>
                        { !person.nickName && 'Nickname' }{ person.nickName }
                    </h1>
                    <hr class="my-4"/>
                </Container>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="p-2 m-3 bg-light border">
                                <h1 className="display-6 text-center">
                                    Where you met
                                </h1>
                                <h3 className={ `text-center ` + conditionalDisplay(person.whereMet) }>
                                    { !person.whereMet && 'Meeting place' }{ person.whereMet }
                                </h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-2 m-3 bg-light border">
                                <h1 className="display-6 text-center">
                                    Where they work/study
                                </h1>
                                <h3 className={ `text-center ` + conditionalDisplay(person.workStudy) }>
                                    { !person.workStudy && 'Work/study area' }{ person.workStudy }
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="p-3 m-3 bg-light border">
                                <h1 className="display-6 text-center">
                                    Their interests
                                </h1>
                                <h3 className={ `text-center text-muted` }>
                                    { !person.interests.length && 'A list of interests...' }
                                </h3>
                                <ul className="list-group">
                                    {
                                        person.interests.map((interest) => (
                                            <li className="list-group-item"><h3 className='text-center'>{ interest }</h3></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-3 m-3 bg-light border">
                                <h1 className="display-6 text-center">
                                    Characteristics
                                </h1>
                                <h3 className={ `text-center text-muted` }>
                                    { !person.characteristics.length && 'A list of characteristics...' }
                                </h3>
                                <ul className="list-group">
                                    {
                                        person.characteristics.map((characteristic) => (
                                            <li className="list-group-item"><h3 className='text-center'>{ characteristic }</h3></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <hr class="my-4"/>
                </Container>
                <div className='d-flex justify-content-center'>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-secondary">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
            }
        </div>
     );
}
 
export default PersonDetails;