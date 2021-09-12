import { useState } from "react";

const useInput = (validate) => {
    const [input, setInput] = useState('');
    const [wasTouched, setTouch] = useState(false);

    const isValid = validate(input);
    const hasError = !isValid && wasTouched;

    const blurHandler = () => setTouch(true);
    const inputHandler = (e) => setInput(e.target.value);

    const reset = () => {
        setInput('');
        setTouch(false);
    }

    return {input, isValid, hasError, inputHandler, blurHandler, reset};
}

export default useInput;