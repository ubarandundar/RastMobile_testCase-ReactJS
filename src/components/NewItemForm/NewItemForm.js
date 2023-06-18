import { useState } from 'react';
import classes from './NewItemForm.module.css';
import closeFormButton from '../../assets/Close_round.svg';

function NewItemForm() {
  const [hideForm, setHideForm] = useState(false);
  const [enteredLink, setEnteredLink] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const handleCancel = () => {
    setHideForm(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
  };

  const formSavingHandler = () => {
    console.log(enteredLink);
    console.log(enteredName);
    console.log(enteredDescription);
    setTimeout( () => setHideForm(true), 500);
  }

  const linkInputChangeHandler = (event) => {
    setEnteredLink(event.target.value);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionInputChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  return (
    <div className='container'>
    {!hideForm && <form onSubmit={formSubmitHandler}>
        <img onClick={handleCancel} src={closeFormButton} alt='close-form-button' />
        <div className='d-flex flex-column'>
            <label htmlFor='link'>Sosyal Medya Linki</label>
            <input value={enteredLink} onChange={linkInputChangeHandler} type='text' name='link' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor='name'>Sosyal Medya Adı</label>
            <input value={enteredName} onChange={nameInputChangeHandler} type='text' name='name' />
        </div>
        <div className='d-flex flex-column'> 
            <label htmlFor='description'>Açıklama</label>
            <input value={enteredDescription} onChange={descriptionInputChangeHandler} type='text' name='description' />
        </div>
        <div className={classes.buttonsWrapper}>
            <button onClick={handleCancel} className={classes.closeButton} type='button'>Vazgeç</button>
            <button onClick={formSavingHandler} className={classes.saveButton} type='submit'>Kaydet</button>
        </div>
    </form>}
    </div>
  )
}

export default NewItemForm;