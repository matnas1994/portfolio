import React, {useReducer, useEffect} from 'react';

import { validate } from '../../../util/validators';
import './input.scss';

const inputReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': 
            return{
                ...state,
                isTouched: true
            };  
        default:
            return state;
    }
};


const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {value: props.initialValue || '', isTouched:false, isValid: props.initialValid || false});

    const changeHandler = event => {
        dispatch({type: 'CHANGE', val: event.target.value, validators: props.validators});
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const {id, onInput} = props;
    const {value, isValid} = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, onInput, value, isValid]);

    const element = props.element === 'input' ? 
            (<input 
                id={props.id} 
                type={props.type}
                className='form-input' 
                placeholder={props.placeholder} 
                onChange={changeHandler}
                onBlur={touchHandler}
                value={props.value}
            /> )
            : 
            (<textarea id={props.id} className="form-area" rows={props.rows || 3}  onChange={changeHandler} onBlur={touchHandler}  value={props.value}/>);


    return <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
        <label className='form-label' htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && inputState.isTouched && <p className="error-message">{props.errorText}</p>}
    </div>
};

export default Input;