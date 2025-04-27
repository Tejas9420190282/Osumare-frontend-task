// App.jsx

import { useState } from "react";
import "./App.css";
import Navbar1 from "./component/Navbar1";
import Real_Estate_Success2 from "./component/Real_Estate_Success2";
import Real_Estate_Focus from "./component/Real_Estate_Focus";
import Our_Services from "./component/Our_Services";
import Navigating_Real_Estate from "./component/Navigating_Real_Estate";
import Diving_Property1 from "./component/Diving_Property1";
import Diving_Property2 from "./component/Diving_Property2";
import Our_Expertise from "./component/Our_Expertise";
import Your_Peace from "./component/Your_Peace";
import Pharma_Partners from "./component/Pharma_Partners";
import Frequently_Asked from "./component/Frequently_Asked";

import End from "./component/End";
import Connect1 from "./component/Connect1";


function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar1 />
            <Real_Estate_Success2 />
            <Real_Estate_Focus />
            <Our_Services />
            <Navigating_Real_Estate />
            <Diving_Property1 />
            <Diving_Property2 />
            <Our_Expertise />
            <Your_Peace />
            <Pharma_Partners />
            <Frequently_Asked />
            <Connect1 />
            <End /> 
        </>
    );
}

export default App;
