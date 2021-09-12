import useInput from '../hooks/use-input';

const BasicForm = () => {

  const {
    input: first,
    isValid: firstIsValid,
    hasError: firstError,
    inputHandler: firstInputHandler,
    blurHandler: firstBlur,
    reset: resetFirst
  } = useInput(value => value.trim() !== '');

  const {
    input: last,
    isValid: lastIsValid,
    hasError: lastError,
    inputHandler: lastInputHandler,
    blurHandler: lastBlur,
    reset: resetLast
  } = useInput(value => value.trim() !== '');

  const {
    input: email,
    isValid: emailIsValid,
    hasError: emailError,
    inputHandler: emailInputHandler,
    blurHandler: emailBlur,
    reset: resetEmail
  } = useInput(value => value.includes('@'));

  const submitHandler = (event) => {
    event.preventDefault();
    emailBlur();
    firstBlur();
    lastBlur();
    if(!emailIsValid || !firstIsValid || !lastIsValid) return;
    resetFirst();
    resetLast();
    resetEmail();
  }

  const firstClass = firstError ? 'form-control invalid' : 'form-control';
  const lastClass = lastError ? 'form-control invalid' : 'form-control';
  const emailClass = emailError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstInputHandler} onBlur={firstBlur} value={first}/>
          {firstError && <p className='error-text'>Invalid First Name</p>}
        </div>
        <div className={lastClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastInputHandler} onBlur={lastBlur} value={last}/>
          {lastError && <p className='error-text'>Invalid Last Name</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailInputHandler} onBlur={emailBlur} value={email}/>
        {emailError && <p className='error-text'>Invalid Email Address</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
