import React, { useState, useEffect } from 'react'
import "./Login.css";
import { useCookies } from 'react-cookie';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",

  });

  const [emailErr, setEmailErr] = useState('');
  const [passwordtErr, setPasswordErr] = useState('');
  // const [cookies, setCookies] = useCookies(['login']);
  const [cookies, setCookies] = useCookies(["login"]);

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedData = cookies.login || [];
    setData(storedData)
  }, [cookies.login]);

  useEffect(() => {
    let login = cookies.login;
    if (login) {
      // alert('jjh')
      navigate("/home");
    }
  }, [cookies.login]);


  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = { ...form }

    let result = true;

    if (form.email === '') {
      setEmailErr("please Enter your Email");
      result = false;
    }
    else if (!form.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setEmailErr('invalid email id');
      result = false;
    }
    else {
      setEmailErr('');
    }

    if (form.password === '') {
      setPasswordErr("please Enter password");
      result = false;

    }
    else if (form.password.length < 4) {
      setPasswordErr('plz enter more then 4 letters')
      result = false;

    }
    else {
      setPasswordErr('');
    }

    if (result) {
      setData([...data, newData]);

      const founduser = data.find((ele) => (ele.email === newData.email))
      const password = data.find((ele) => (ele.password === newData.password))
      if (founduser && password) {
        setCookies('login', true)
        alert('edfe')
        navigate('/home');
      } else {
        alert("wrong Email and Password");
      }

      setForm({

        email: "",
        password: "",
      });
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(setForm)
  }


  return (
    <>
      <section className='section-field'>
        <div className="signin">

          <div className="content">

            <h2>Sign In</h2>

            <div className="form">

              <form onSubmit={handleSubmit}>

                <div className="inputBox">

                  <input className='input-data' required
                    type="text"
                    name="email"
                    value={form.email}
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  <i> Email</i>
                  {emailErr && <span>{emailErr}</span>}

                </div>

                <div className="inputBox">

                  <input className='input-data' type="password" required
                    name="password"
                    value={form.password}
                    autoComplete="off"
                    onChange={handleChange}
                  /> <i>Password</i>
                  {passwordtErr && <span>{passwordtErr}</span>}

                </div>

                <div className="links"> <Link to="#">Forgot Password</Link> <Link to="/register">Signup</Link>

                </div>

                <div className="inputBox">

                  <input className='input-data' type="submit" value="Login" />

                </div>
              </form>
            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Login