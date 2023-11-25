import react from 'react';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import About from '../About/About';
import Contact from '../Contact/Contact';


const Home = ()=>{
    return(
        <section>

<Slider/>
<Services/>
<About/>
<Contact/>
        </section>
    )
}

export default Home;