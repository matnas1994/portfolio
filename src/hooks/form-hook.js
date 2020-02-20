import {useCallback, useReducer} from 'react';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs){
                if(!state.inputs[inputId]){
                    continue;
                }
                if(inputId === action.inputId){
                    formIsValid = formIsValid && action.isValid;
                } else{
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return { ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId] : {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            }
        case 'RESET':
            return { 
                inputs: {
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
              }, isValid: false
            }
        default:
            return state;
    }
};

export const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs , isValid: initialFormValidity});

    const inputHandler = useCallback((id, value, isValid) => {
            dispatch({
                type: 'INPUT_CHANGE',
                value: value,
                isValid: isValid,
                inputId: id
            });
    }, []);

    const clearHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'RESET',
            initialValue:  {
                inputs: initialInputs , isValid: initialFormValidity}
            });   
    }, [initialInputs, initialFormValidity]);

    return [formState, inputHandler, clearHandler];
};