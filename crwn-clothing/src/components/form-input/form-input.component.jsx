import React from 'react';
import './form-input.styles.scss';

const FormInput =({handleChange,label,...othrerProps}) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...othrerProps}/>
        {label ?(
            <label 
            className={`${othrerProps.value.length} ? 'shrink': ''} form-input-label`}>
                {label}
            </label>
        ):null}
    </div>
)

export default FormInput;