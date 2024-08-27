import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import sortPeople from '../utils/sortPeople';

const PeopleList = ({ people }) => {
    const [search, setSearch] = useState('');
    const [sortedPeople, setSortedPeople] = useState(people);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(search);
        if (!!search){
            console.log('sorting')
            setSortedPeople(sortPeople(search, people));
        } else {
            console.log('not sorting')
            setSortedPeople(people);
        }
    }

    return ( 
        <div className="peoplelist">
            <Container fluid className='border-bottom border-dark'>
                <form onSubmit={handleSearch}>
                    <div className='input-group d-flex ms-2 my-3 w-50'>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            autoComplete='off'
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                        />
                        <button
                            className='btn btn-outline-primary' type='button' onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </form>
            </Container>
            <ul className='list-group list-group-flush'>
                { sortedPeople.map((person) => (
                    <li key={ person._id } className='list-group-item list-group-item-action'>
                        <Link to={ `/people/${person._id}` }>
                            <Row>
                                <Col md=''>
                                    <h1 className='display-5'>{ person.fName } {!!person.nickName && <i>"{person.nickName}"</i>} { person.sName }</h1>
                                </Col>
                            </Row>
                            <Row>
                                { !!person.workStudy &&
                                <Col md='auto'>
                                    <p className='mb-0 text-secondary'>Work/study: { person.workStudy } </p>
                                </Col>
                                }
                                { !!person.whereMet &&
                                <Col>
                                    <p className='mb-0 text-secondary'>Met at: { person.whereMet }</p>
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