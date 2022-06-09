import "./style.scss";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

// images
import Girl from "../../assets/images/login-girl.png"
import Logo from "../../assets/images/Logo.svg"

function Login() {
  const history = useHistory()
  const [indicator,setIndicator] = useState({open: false,})
  
  function loginFunction(evt){

    evt.preventDefault()
    const {login, password} = evt.target.elements  ;

    if(!login.value){
      return login.style.border = "1px solid red";
    } else {
     login.style.border = "1px solid #4F7D96";
    }
    if(!password.value){
      return password.style.border = "1px solid red"
    } else {
     password.style.border = "1px solid #4F7D96";
    }
    setIndicator({open:true})
    fetch("https://reqres.in/api/login",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email: login.value, password: password.value})
    })
    .then(res => res.json())
    .then(data => {
      if(data.token){
        setIndicator({open:false})
        history.push("/admin")
      } else {
        setIndicator({open:false, info: "ERROR login or password"})
      }
    })
  }

  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <img src={Girl} alt="girl images" />
        </div>
        <div className="right">
          <img className="logo" src={Logo} alt="logo" />
          {indicator?.info ? (<p style={{marginTop: "-34px", color: "red"}}>{indicator?.info}</p>) : null}
          <form onSubmit={loginFunction}>
            <Input name={"login"} type={"text"} label={"Логин"} inputValue={"eve.holt@reqres.in"} />
            <Input name={"password"} type={"password"} label={"Пароль"} inputValue={"cityslicka"} />
            <div className="security">
              <a href="#">Забыли пароль?</a>
              <button type="submit">Кириш</button>
            </div>
          </form>
          <hr className="line"/>
          <p className="text">Безопасность системы осуществлена на базе стандартов</p>
          <p className="text">O'zDST 1105:2009 Алгоритм шифрования данных</p>
          <p className="text">O'zDST 1192:2009 Процессы формирования и проверки ЭЦП</p>
          <p className="text">Версия 3.0 ГУП UNICON.UZ, OOO UNICON-SOFT 2011-2018</p>
          <button className="large-button" type="button">Ввод ключа</button>
        </div>
      </div>
      <dialog className="dialog" open={indicator.open}>
        <div>
        <div className="spinner"></div>
        </div>
      </dialog>
    </div>
  )
}

function Input({name, type,label, inputValue}){

  const inputRef = useRef();
  const labelRef = useRef()
  const [value, setValue] = useState(inputValue && true)

  useEffect(()=>{
    labelRef.current?.classList.add("label--valid")
  },[])
  
  function Change(evt) {
    const { value } = evt.target;
    setValue(value)
  }

  function Blur(){
    if(!value){
      labelRef.current.classList.remove("label--valid")
    } 
  }
  function Focus(){
    labelRef.current.classList.add("label--valid")
  }

  return (
    <div className="input-wrap">
      <input ref={inputRef} onChange={Change} onFocus={Focus} onBlur={Blur} name={name} className="input" type={type} id={`${name}_${label}_${type}`} defaultValue={inputValue} autoComplete="off"/>
      <label ref={labelRef} className="label" htmlFor={`${name}_${label}_${type}`}>{label}</label>
    </div>
  )
}
export default Login;