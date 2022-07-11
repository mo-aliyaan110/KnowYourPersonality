import React, {useState} from 'react';
import axios from 'axios';

function Dialog({show, userId, functionToChangeDial}) {
    const [youareText, setyouareText] = useState('You are a');
    const [personality, setPersonality] = useState('');
    const particularUser = `http://localhost:4000/users/${userId}`;
    const deleteUser = `http://localhost:4000/remove/${userId}`;

    // function to extract the personality field from the data
    const extractPersonality = () => {
        axios.get(particularUser)
        .then((response) => {
            setPersonality(response.data.personality);
        })
        

    }
    // function to delete the data
    const deleteData = () => {
        axios.delete(deleteUser)
        .then((res) => {
            // as I used two variables to display the message, so I have updated data in two variables. 
            // Don't get confuse.
            setyouareText('Your data is');
            setPersonality('Deleted');
            window.location.reload(false);
            
        })
    }
    // code to hide the dialog.
    if (!show){
        return(
            <>
            </>
        )
    }
  return (
    
        <div class="overlay">
            <div class="dialog">

            <div class="dialog__content">
                <h2 class="dialog__title">{youareText} {personality}</h2>
                
            </div>

            <hr />

            <div class="dialog__footer">
                <button class="dialog__cancel" onClick={() => {functionToChangeDial(show)}} >Update</button>
                <button class="dialog__cancel" onClick={extractPersonality} >Reveal!!!</button>
                <button class="dialog__confirm" onClick={deleteData}>Delete</button>
            </div>

            </div>
 
        </div>
    
  )
}

export default Dialog