import { useNavigate } from "react-router-dom";

const About = () => {
    const navigator = useNavigate();
    return ( 
        <div className='about m-3'>
            <h1 className='pb-3'>About This Project</h1>
            <h5>This website was made to remedy issues people with social anxiety face.
                When one is prone to become nervous in social situations, the instinctual 'fight or flight' response
                results in increased cortisol (sometimes called the 'stress hormone') being released in the body. Cortisol results in
                memory impairment; in the same way that people often cannot recall the events of threatening or frantic situations,
                those who become anxious when socialising may find they cannot remember key information learnt about people
                they have recently met.
            </h5>
            <h5>To help with these issues, I created this website so that one can record information they learn from the people they meet,
                so that they can stop constantly asking the question:
            </h5>
            <h4><i>"Sorry - what was your name again?</i></h4>
            <button
                className="btn btn-primary mt-3"
                onClick={e => {
                    e.preventDefault();
                    navigator('/');
                }}
            >Return</button>
        </div>
     );
}
 
export default About;