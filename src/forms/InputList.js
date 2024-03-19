import { useState } from "react";
import Container from "react-bootstrap/Container";

const InputList = ({arr: prop_arr}) => {
    const [arr, setArr] = useState(prop_arr);

    let arrIndex = 3;

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
        console.log(arr);
    }
    const handleDelete = (id) => {
        setArr(
            arr.filter(i => i.id !== id)
        );
    }

    return ( 
        <Container fluid>
            <ul>
                <div className="vertical-input-group">
                    {
                        arr.map((item) => (
                            <div className='input-group'>
                                <li key={item.id}>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder="Add an interest..."
                                        value={ item.val }
                                        onChange={(e) => {
                                            handleEdit({
                                                ...arr,
                                                item: e.target.value
                                            });
                                        }}
                                    />
                                </li>
                            </div>
                        ))
                    }
                    <div className='input-group'>
                        <button
                            className='btn'
                            onClick={ (e) => {
                                e.preventDefault();
                                handleAdd();
                            } }
                        >Add</button>
                    </div>
                </div>
            </ul>
        </Container>
     );
}
 
export default InputList;