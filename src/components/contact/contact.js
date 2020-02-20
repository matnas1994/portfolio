import React, {useState} from "react";
import axios from "axios";
import { useForm } from '../../hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL} from '../../util/validators';

import Input from "../UI/formElements/input";
import LoadingSpinner from "../UI/loadingSpinner/loadingSpinner";
import './contact.scss';

const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [formState, inputHandler, clearHandler] = useForm({
    email: { 
        value: '',
        isValid: false
    },
    subject: { 
        value: '',
        isValid: false
    },
    message: { 
      value: '',
      isValid: false
    }
  }, false);

  

  const contactSubmitHandler = async event => {
    event.preventDefault();
    if(!formState.isValid){
      setError('Ooops! Something went wrong, please try again later.');
      return;
    }
    try{
        setIsLoading(true);
        const res = await axios.post('https://formspree.io/mwkvjzgl', { 
          email: formState.inputs.email.value,
          subject: formState.inputs.subject.value,
          message: formState.inputs.message.value
        });       
       
        if (res.status === 200) {
          setIsSuccess(true);
          clearHandler();
       }else{
         setError('Ooops! Something went wrong, please try again later.');
       }
       setIsLoading(false);
    }catch(err){
      setIsLoading(false);
      setError('Ooops! Something went wrong, please try again later.');
    }
  }
 
  return (
      <section id="contact" className="contact">
          <div className="contact__header">
            <h2 className="contact__title">CONTACT</h2>
          </div>
          <form className="contact-form" onSubmit={contactSubmitHandler}>
            <Input 
              id="email"
              element="input" 
              type="text" 
              label="Email"
              value={formState.inputs.email.value}
              validators={[VALIDATOR_EMAIL()]} 
              errorText="Please enter a valid address email."
              onInput={inputHandler}
            />
            <Input 
              id="subject"
              element="input" 
              type="text" 
              label="Subject"
              value={formState.inputs.subject.value}
              validators={[VALIDATOR_MINLENGTH(3)]} 
              errorText="Please enter a valid subject (at least 3 characters)."
              onInput={inputHandler}
            />

            <Input 
              id="message"
              element="texterea" 
              type="text" 
              label="Message" 
              value={formState.inputs.message.value}
              validators={[VALIDATOR_MINLENGTH(5)]} 
              errorText="Please enter a valid message (at least 5 characters)."
              onInput={inputHandler}
              rows={5}
            />
            <div className="contact-form__btns">
              {error ? <p className="status status--error">{error}</p> :
              isSuccess?  <p className="status status--success">Thanks!</p> :
              isLoading? <LoadingSpinner/> : <button type="submit" className="btn btn--submit" disabled={!formState.isValid}>SEND MESSAGE</button>}        
                <button type="button" className="btn btn--clean" onClick={clearHandler}>CLEAN</button>  
            </div>
          </form>
      </section>
    )
}

export default Contact