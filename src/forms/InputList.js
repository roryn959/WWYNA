import Container from "react-bootstrap/Container";

const InputList = (props) => {
    const [arr, setArr] = props.arrProps;
    const name = props.name;

    let arrIndex;
    if (arr.length>0){
        arrIndex = arr[arr.length-1].id+1;
    } else {
        arrIndex = 0;
    }

    const handleAdd = () => {
        setArr([
            ...arr,
            {
                id: arrIndex++,
                val: ''
            }
        ]);
    }
    const handleEdit = (newItem) => {
        setArr(arr.map(i => {
            if (i.id === newItem.id){
                return newItem;
            } else {
                return i
            }
        }));
    }
    const handleDelete = (id) => {
        setArr(
            arr.filter(i => i.id !== id)
        );
    }

    return ( 
        <Container fluid>
            <label className='form-label'>
                { name }
            </label>
            <ul className='list-group mb-4'>
                {
                    arr.map(item => (
                            <li key={ item.id } className='list-group-item'>
                                <div className="input-group">
                                    <input
                                        type='text'
                                        className='form-control nohl'
                                        placeholder='Add an interest...'
                                        value={ item.val }
                                        onChange={e => {
                                            handleEdit({
                                                ...item,
                                                val: e.target.value
                                            });
                                        }}
                                    />
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={ e =>{
                                            e.preventDefault();
                                            handleDelete(
                                                item.id
                                            );
                                        }}
                                    >Delete</button>
                                </div>
                            </li>
                    ))
                }
                <li className='list-group-item'>
                    <div className='input-group-item'>
                        <button
                            className='btn btn-outline-secondary'
                            onClick={ e => {
                                e.preventDefault();
                                handleAdd();
                            } }
                        >+</button>
                    </div>
                </li>
            </ul>
        </Container>
     );
}
 
export default InputList;