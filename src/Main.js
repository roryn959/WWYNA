import usePeople from "./hooks/usePeople";
import PeopleList from "./components/PeopleList";

const Main = (props) => {
    const token = props.token;
    const { data: people, isPending, error} = usePeople(token);

    return ( 
        <div className="main flex-shrink-0">
            { error && <div>{ error }</div>}
            { isPending && <div className='ms-3'><h3>Loading...</h3></div>}
            { people && <PeopleList people={people} /> }
        </div>
     );
}
 
export default Main;