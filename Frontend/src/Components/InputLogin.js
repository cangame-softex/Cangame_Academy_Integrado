function InputLogin({ type, name, label, value, onChange, onFocus }) {
  return (
    <div className={`grupo_Inputs`}> {/*div para envolver o input e o label*/}
      <input id={name} type={type} name={name} placeholder=" " required value={value}
            onChange={onChange} onFocus={onFocus} />
      <label htmlFor={name} className={`label_Contorno`}>
        {label}
      </label>
    </div>
  );
}

export default InputLogin;