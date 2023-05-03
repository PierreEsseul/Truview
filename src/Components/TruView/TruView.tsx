import React, { useState } from 'react';
import './TruView.css';
import SendBack from '../SendBack/SendBack';

function TruView() {
    const [enteredLanguage, setEnteredLanguage] = useState('');
    const [enteredNetwork, setEnteredNetwork] = useState('');
    const [enteredAbout, setEnteredAbout] = useState('');
    const [result, setResult] = useState('');
    const [loader, setLoader] = useState(false);

    const languageChangeHandler = (event : any) => {
        setEnteredLanguage(event.target.value);
    }

    const networkChangeHandler = (event : any) => {
        setEnteredNetwork(event.target.value);
    }

    const aboutChangeHandler = (event : any) => {
        setEnteredAbout(event.target.value);        
    }

    const download = () => {
        setLoader(true);
    }

    const submitHandler = async (event: any) => {
        event.preventDefault();

        const data = {
            language : enteredLanguage,
            network : enteredNetwork,
            about : enteredAbout
        }

        const response : any = await SendBack(data); 

        setResult(response.data);

        setEnteredLanguage('');
        setEnteredNetwork('');
        setEnteredAbout('');
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <div className="form">
                    <label>
                        In which language :
                        <input 
                            type="text" 
                            autoFocus
                            value={enteredLanguage}
                            onChange={languageChangeHandler}
                            />
                    </label>

                    <label>Which social Network
                    <select 
                        value={enteredNetwork}
                        onChange={networkChangeHandler}>
                            <option value="choose" key="1">select</option>
                            <option value="linkedin" key="2">Linkedin</option>
                            <option value="instagram" key="3">Instagram</option>
                            <option value="facebook" key="4">Facebook</option>
                    </select>
                    </label>

                    <label>What will your post be about? </label>
                    <textarea 
                        cols={parseInt("50")} 
                        rows={parseInt("10")} 
                        placeholder='write something here'
                        value={enteredAbout}
                        onChange={aboutChangeHandler}>
                    </textarea>
                

                    <button className="btnSend" type="submit" onClick={download}>Send</button>
                </div>            
            </form>

            <div className='result'>
                {loader ? 
                <>
                    {!result ?
                    <div className='parent-loader'> 
                        <div className='loader'>
                            <p>loading...</p>
                            <div className='loader__icon'></div>
                        </div> 
                    </div>
                    :
                    <p>{result}</p>
                    }
                </>
                :
                <div></div>
                }
            </div>
        </>
    )
}

export default TruView;
