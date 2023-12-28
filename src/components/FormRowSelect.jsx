


const FormRowSelect = ({ labelText, name, value, handleChange, list,mimicList=[] }) => {
  console.log(mimicList);
    return (
      <div className='form-control gap-2'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        <select
          name={name}
          value={value}
          id={name}
          onChange={handleChange}
          className='select select-bordered w-full '
        >
          {list.map((itemValue, index) => {
            return (
              <option key={index} value={itemValue}>
                {!(mimicList.length>0)?itemValue:mimicList[index]}
              </option>
            )
          })}
        </select>
      </div>
    )
}
  
export default FormRowSelect