
import React, { useState } from "react";
import Navbar from "../appcomponents/navbar";
import Button from "../appcomponents/button";
import TextArea from "../appcomponents/TextArea";
import Typography from "../appcomponents/Typography";
import InputField from "../appcomponents/InputField";
import SelectOptions from "../appcomponents/SelectOption";



function Home() {

    const [color, setColor] = useState('black');
    const [text, setText] = useState('Hello');

    function ChangeColorText(color,text) {
        setColor(color)
        setText (text)
    }
    


    
    return (
        <div>
            <Navbar text="Whizzy Academy" color="#1e88e5" />
            <h1>My Components</h1>
            <Button text="Clear" color="#d50000" />
            <Button text="Login" color="#1e88e5" />
            <Button text="Cancel" color="#880e4f" />
            <Button text="Submit" color="#003300" />
            <Button text={text} color={color} onClickButton={() => ChangeColorText('red','hey')}/>
            {/* <InputField /> */}
            <TextArea/>
            
            <div>


            <SelectOptions />
            </div>
            
            <div>


            </div>
            <InputField type="text"  placeholder="Username" />
            <InputField type="text" placeholder="Password" />
            <div>

            <h1>input Fields</h1>
                <InputField type="radio" />
                <h1>Radio</h1>
                <InputField type="checkbox" name="Checkbox" />
                <Typography color="red" fontFamily="Ariel" />
                <Typography color="blue" fontFamily="Times New Roman"/>
                <Typography color="green" fontFamily="Lucida Console"/>

                <Button 
            text="Submit" 
            color={color} 
            onClickButton={() => ChangeColorText('blue','hi')
            }/>
                
            
            </div>
        </div>
    )
}

export default Home;