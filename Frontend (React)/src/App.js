import React, { useState } from 'react';
import bgImage from './bgImage.jpg';
import axios from 'axios';
import Dialog from './Dialog';
require('./Css/app.css');


const App = () => {
    const [name, setName] = useState("");
    const [dob, setDob] = useState('');
    const [hobby, setHobby] = useState('');
    
    const [dialog, setDialog] = useState(false);
    const [userId, setUserId] = useState('');
    const [runUpdateApi, setrunUpdateApi] = useState(false);
    
    const postUrl = 'http://localhost:4000/addData';
    const patchUser = `http://localhost:4000/updateUser/${userId}`;

    // function to update the name
    const nameChange = (e) => {
        setName(e.target.value);
    }

    // function to update date of birth
    const dobChange = (e) => {
        setDob(e.target.value);
    }

    // function to update the hobby
    const hobbyChange = (e) => {
        setHobby(e.target.value);
    }
    
    // function to add the data to the backend
    const postData = async() => {
        // if the runupdate is set to false then the post API will run
        
        if(!runUpdateApi){    
            await axios.post(postUrl, {
                name : name,
                dateofbirth : dob,
                hobbies : hobby
            })
            
            .then((res) => {
                setUserId(res.data._id);
                setDialog(true);
                console.log(res.data._id);
                console.log(userId);
                
            })
    }
    // if the runupdate is not set to false then the patch API will run.
    else{
        
        axios.put(patchUser, { "name" : name, "dateofbirth" : dob, "hobbies" : hobby })
        .then((res) => {
            
            
            alert("Updated, Now reveal your personality within 5 SECONDS!");
            setDialog(true);
            setTimeout(() => {
                window.location.reload(1);
            }, 5000)


            
        })
    }

    
    }
    // reset form function
    const resetForm = () => {
        setName('');
        setDob('');
        setHobby('');
    }
    // function to change the dialog value to show and hide the dialog.
    const changeDialog = (data) => {
        
        if(!data){
            setDialog(true);   
        }
        else{
            setDialog(false);
            setrunUpdateApi(true);
        }
    }

    const validate = (values) => {

    }
    
    
    return(
        
        <div className='mainParent' style={{backgroundImage: `url(${bgImage})`}}>
            <Dialog show = {dialog} functionToChangeDial = {changeDialog} userId = {userId}/>
            <div id="appContainer">
                
                <div className='innerMainContainer'>

                    <h1 style={{color : 'dodgerblue'}}> <b>Know your personality! </b> </h1> <br/>

                    <div> <label for='name'>Name </label> </div>
                    <div> <input type='text' name='name' onChange={nameChange} value={name} id='name' /> </div> <br/> <br/>

                    <div> <label for='dateofbirth'>Date of Birth </label> </div>
                    <div> <input type='text' name='name' onChange={dobChange} value={dob} id='dateofbirth' /> </div> <br />

                    
                        <h6 className='h6NoMarPad'><i>Choose hobbies from either 'horse riding', 'singing' or 'dancing'</i></h6> <br/>
                    
                        <label className='h6NoMarPad' for='hobby'>Hobby </label>
                    <div> <input type='text' name='name' onChange={hobbyChange} value={hobby} id='hobby' /> </div> <br/>

                    <div>
                        <button style={{marginRight: '20px', padding: '3px 15px'}} onClick={resetForm}> Reset </button> <button onClick={postData}  style={{padding: '3px 15px'}}> Submit </button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
    
}
export default App;