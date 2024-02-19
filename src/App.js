import React, {useState} from "react";
import './App.css';



function App(){

    // type of exercises
    const [pushup, setpushup] = useState(0);
    const [situps, setsitups] = useState(0);
    const [plank, setplank] = useState(0);
    const [reversecrunch, setreversecrunch] = useState(0);
    const [greeting, setgreeting] = useState(' ');

    //the figures used here are based on online research of how many calories an average person burns by doing this exercises.
    const situpcalories = situps * 0.42;
    const plankcalories = plank * 0.35;
    const reversecrunchcalories = reversecrunch * 0.31;
    const pushupcalories = pushup * 0.32;
    const totalcalories = pushupcalories + situpcalories + plankcalories + reversecrunchcalories;


    const greet = (<p> You have burned <em>{totalcalories}</em> calories Today... Welldone !!! <br></br> Remember, consistency is the key. <em> See you tomorrow!!!</em></p>);
                    

    return(
        <div className="container">
            <h1>Daily exercise monitor</h1>
            <h5>Where do you want to start from today? <br></br>Just click each category you are carrying out, to keep your count</h5>

                <button onClick={() => {setpushup(pushup +1)} }>pushup +</button> {pushup}


                <button onClick={() => {setsitups(situps +1)}}>situps +</button> {situps}


                <button onClick={() => {setplank(plank +1)}}>Plank +</button>  {plank}


                <button onClick={() => {setreversecrunch(reversecrunch +1)}}>Reverse Crunch +</button>
                {reversecrunch}

        <div className ="specialbuttons">
           <button className ="finish" onClick = {()=>{

                                setgreeting(greet);
                                
                                }}>FINISH EXERCISE</button> 

            <button className ="rest" onClick={() => {
                         setpushup(0);
                         setsitups(0);
                         setplank(0);
                         setreversecrunch(0);
                         setgreeting(' ');

            }}>RESET </button>

        </div>
    
        <div className="greetings">
                        {greeting}
                    </div>
    </div>


);


}




export default App;