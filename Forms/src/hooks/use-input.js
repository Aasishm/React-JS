import { useState } from "react";

const useInput = (value) => {
    const [input, setInput] = useState('');
    const [wasTouched, setTouch] = useState(false);

    const blurHandler = () => setTouch(true);
    const inputHandler = (e) => setInput(e.target.value);

    const reset = () => {
        setInput('');
        setTouch(false);
    }

    return {input, wasTouched, value, inputHandler, blurHandler, reset};
}

export default useInput;