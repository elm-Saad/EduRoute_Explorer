

const FormRow = ({ type, name, value, handleChange, labelText,placeholder='' }) => {
    return (
      <div className='form-control'>
        <label htmlFor={name} className='label'>
          <span className="label-text capitalize">
            {labelText || name}
          </span>  
        </label>
  
        <input
          className='input input-bordered '
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    )
  }
  
  export default FormRow
