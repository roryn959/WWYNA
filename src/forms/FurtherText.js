import Container from "react-bootstrap/Container";

const FurtherText = (props) => {
    const [further, setFurther] = props.furtherProps;

    return ( 
        <Container fluid>
            <label className='form-label'>Any other details...</label>
            <textarea
                className='form-control mb-3'
                value={ further }
                onChange={e => {
                    setFurther(e.target.value)
                }}
            />
        </Container>
    );
}
 
export default FurtherText;