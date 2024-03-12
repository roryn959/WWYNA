import { Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

const PeopleList = ({ people }) => {
    return ( 
        <div className="peoplelist">
            <ListGroup>
                { people.map((person) => (
                    <ListGroup.Item action onClick={() => console.log({person})} key={ person.id }>
                        <Row>
                            <Col md='auto'>
                                <h2>{ person.fName } { person.sName }</h2>
                            </Col>
                            <Col className='align-self-end m-auto'>
                                <p className='mb-0 text-secondary'>{ person.workStudy }</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='auto'>
                                <h3>{ person.nickName }</h3>
                            </Col>
                            <Col className='align-self-end m-auto'>
                            <p className='mb-0 text-secondary'>Met at { person.whereMet }</p>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )) }
            </ListGroup>
        </div>
     );
}
 
export default PeopleList;