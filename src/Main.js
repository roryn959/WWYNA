import usePeople from "./hooks/usePeople";
import PeopleList from "./components/PeopleList";

const Main = (props) => {
    const token = props.token;
    const { data: people, isPending, error} = usePeople('http://localhost:8000/people', token);

    return ( 
        <div className="main">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading</div>}
            { people && <PeopleList people={people} /> }
        </div>
     );
}
 
export default Main;