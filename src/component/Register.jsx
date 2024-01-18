
import React, { useState, useEffect } from 'react'
import "./Login.css";
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    contact: "",
  });

  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordtErr, setPasswordErr] = useState('');
  const [contactErr, setContactErr] = useState('');
  const [cookies, setCookies] = useCookies(['lists']);

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = cookies.lists || [];
    setData(storedData)
  }, [cookies.lists]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = { ...form }

    let result = true;
    if (form.userName === '') {
      setNameErr("please Enter your name");
      result = false;
    }
    else if (form.userName.length < 4) {
      setNameErr('pls enter more then 4 letters')
      result = false;

    }
    else {
      setNameErr('');
    }
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
    if (form.contact === '') {
      setContactErr("please Enter your Contact");
      result = false;

    }
    else if (form.contact.length < 4) {
      setContactErr('plz enter more then 4 letters')
      result = false;

    }
    else {
      setContactErr('');
    }
    if (result) {
      setData([...data, newData]);
      setCookies("lists", [...data, newData]);
      navigate("/login");
      alert('form succesfully submitted')
      setForm({
        userName: "",
        email: "",
        password: "",
        contact: "",
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

            <h2>Sign Up</h2>

            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="inputBox">

                  <input className='input-data' type="text" required
                    name="userName"
                    // id="input-item1"
                    value={form.userName}
                    autoComplete="off"
                    onChange={handleChange}
                  /> <i>Username</i>
                  {nameErr && <span>{nameErr}</span>}

                </div>


                <div className="inputBox">

                  <input className='input-data' required
                    type="text"
                    name="email"
                    // id="input-item1"
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
                    // id="input-item1"
                    value={form.password}
                    autoComplete="off"
                    onChange={handleChange}
                  /> <i>Password</i>
                  {passwordtErr && <span>{passwordtErr}</span>}

                </div>

                <div className="inputBox">

                  <input className='input-data' type="number" required
                    name="contact"
                    // id="input-item1"
                    value={form.contact}
                    autoComplete="off"
                    onChange={handleChange}
                  /> <i>Contact Number</i>
                  {contactErr && <span>{contactErr}</span>}

                </div>

                <div className="links"> <Link to="#">Forgot Password</Link> <Link to="/login">Signin</Link>

                </div>

                <div className="inputBox">

                  <input className='input-data' type="submit" value="Register" />

                </div>

              </form>
            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Register