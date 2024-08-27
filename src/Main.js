import usePeople from "./hooks/usePeople";
import PeopleList from "./components/PeopleList";

const Main = (props) => {
    const token = props.token;
    const { data: people, isPending, error} = usePeople(token);

    return ( 
        <div className="main flex-shrink-0">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading</div>}
            { people && <PeopleList people={people} /> }
        </div>
     );
}
 
export default Main;