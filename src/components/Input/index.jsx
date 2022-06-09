import "./style.scss"


function Input ({label, type, width="240px", placeholder, input, children}){

  return(
    <div className="Input-wrapper" style={{width: width}}>
      <label>{label}</label>
      {input ? (
        <input type={type} placeholder={placeholder}/>
        ) : 
        (
          <select name="" id="" style={{width: width}}>{children}</select>
        )
      }
    </div>
  )
}

export default Input;