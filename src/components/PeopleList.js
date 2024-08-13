import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const PeopleList = ({ people }) => {
    return ( 
        <div className="peoplelist">
            <ul className='list-group list-group-flush'>
                { people.map((person) => (
                    <li key={ person.id } className='list-group-item list-group-item-action'>
                        <Link to={ `/people/${person.id}` }>
                            <Row>
                                <Col md=''>
                                    <h1 className='display-5'>{ person.fName } {!!person.nickName && <i>"{person.nickName}"</i>} { person.sName }</h1>
                                </Col>
                            </Row>
                            <Row>
                                { !!person.workStudy &&
                                <Col md='auto' className=''>
                                    <p className='mb-0 text-secondary'>Work/study: { person.workStudy } </p>
                                </Col>
                                }
                                { !!person.whereMet &&
                                <Col className=''>
                                    <p className='mb-0 text-secondary'>Met at { person.whereMet }</p>
                                </Col>
                                }
                            </Row>
                        </Link>
                    </li>
                )) }
                <li className='list-group-item-action'>
                <Link to={ '/createPerson' }>
                        <Container fluid>
                            <h1 className="display-2 text-secondary">+</h1>
                        </Container>
                </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default PeopleList;