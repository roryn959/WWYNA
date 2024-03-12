import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const PeopleList = ({ people }) => {
    return ( 
        <div className="peoplelist">
            <ListGroup>
                { people.map((person) => (
                    <Link to={ `/people/${person.id}` }>
                        <ListGroup.Item key={ person.id }>
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
                    </Link>
                )) }
            </ListGroup>
        </div>
     );
}
 
export default PeopleList;