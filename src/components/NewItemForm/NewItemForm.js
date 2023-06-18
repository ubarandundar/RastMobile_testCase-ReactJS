import { useState } from 'react';
import classes from './NewItemForm.module.css';
import closeFormButton from '../../assets/Close_round.svg';

function NewItemForm() {
  const [hideForm, setHideForm] = useState(false);

  const handleCancel = () => {
    setHideForm(true);
  };

  return (
    <div className='container'>
    {!hideForm && <form>
        <div onClick={handleCancel}>
          <img src={closeFormButton} alt='close-form-button' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor='link'>Sosyal Medya Linki</label>
            <input type='text' name='link' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor='name'>Sosyal Medya Adı</label>
            <input type='text' name='name' />
        </div>
        <div className='d-flex flex-column'> 
            <label htmlFor='description'>Açıklama</label>
            <input type='text' name='description' />
        </div>
        <div className={classes.buttonsWrapper}>
            <button onClick={handleCancel} className={classes.closeButton} type='button'>Vazgeç</button>
            <button className={classes.saveButton} type='button'>Kaydet</button>
        </div>
    </form>}
    </div>
  )
}

export default NewItemForm;