import useInput from "../hooks/use-input";

const SimpleInput = () => {

  const {
    input:name,
    wasTouched:nameWasTouched,
    inputHandler:nameInputHandler,
    blurHandler:nameBlurHandler,
    reset:resetName
  } = useInput();

  const {
    input:email,
    wasTouched:emailWasTouched,
    inputHandler:emailInputHandler,
    blurHandler:emailBlurHandler,
    reset:resetEmail
  } = useInput();

  let formIsValid = false;
  const nameIsValid = name.trim().length !== 0;
  const emailIsValid = email.trim().includes('@');
  if(nameIsValid && emailIsValid) formIsValid = true;

  const submitHandler = (e) => {
    e.preventDefault();
    if(!nameIsValid || !emailIsValid) return;
    resetEmail();
    resetName();
  }

  const nameFormValid = nameWasTouched && !nameIsValid ? 'form-control invalid' : 'form-control';
  const emailFormValid = emailWasTouched && !emailIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameFormValid}>
        <label htmlFor='name'>Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
      </div>
      { nameWasTouched && !nameIsValid && <p className='error-text'>Name field should not be blank</p>}
      <div className={emailFormValid}>
        <label htmlFor='email'>Email</label>
        <input 
          type='text' 
          id='email' 
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
      </div>
      { emailWasTouched && !emailIsValid && <p className='error-text'>Entered Email address is not valid</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
