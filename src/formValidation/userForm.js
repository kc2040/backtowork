import { useState, useEffect, useReducer, useContext, } from 'react';
import cartReducer from '../store/cartReducer';
import CartContext from '../context/cartContext';



const useForm = (callback, validate) => {
    const [cart, setCart] = useReducer(cartReducer, []);
    const { state, dispatch } = useContext(CartContext);

    //const [values, setValues] = useState({});
    const values = state.personalInfo;
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
        //console.log(errors)
    }, [errors]);


    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        return isSubmitting;
    };

    const handleChange = (event) => {
        event.persist();
        const infoChanged = {
            ...state.personalInfo,
            [event.target.name]: event.target.value,
        };
        dispatch({
            type: 'infoChange',
            payload: infoChanged,
        });
        
    };


    const handleClear = (event) => {
        event.persist();
        setErrors('');
    };

    return {
        handleChange,
        handleSubmit,
        handleClear,
        values,
        errors,
    }
};

export default useForm;
