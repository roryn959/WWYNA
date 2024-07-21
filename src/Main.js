import useFetch from "./hooks/useFetch";
import PeopleList from "./PeopleList";

const Main = () => {
    const { data: people, isPending, error} = useFetch('http://localhost:8000/people');

    return ( 
        <div className="main">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading</div>}
            { people && <PeopleList people={people} /> }
        </div>
     );
}
 
export default Main;