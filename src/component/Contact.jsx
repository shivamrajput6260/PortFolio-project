import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import "./ContactPage.css";
const Contact = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    subject: "",
    massage: "",

  });
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [subjectErr, setSubjectErr] = useState('');
  const [massageErr, setMassageErr] = useState(null);
  const [target, setTarget] = useState("");
  const [edit, setEdit] = useState(false);
  const [cookies, setCookies] = useCookies(['lists']);

  //  const  [data, setData] = useState([]);
  const [data, setData] = useState(JSON.parse(localStorage.getItem('lists')) || []);
  // const [data, setData] = useState(JSON.parse(sessionStorage.getItem('lists')) || []);

  const editHandler = (curElem, index) => {
    data.forEach((item, i) => {
      if (i === index) {
        console.log((target));
        console.log(index, i);

        setTarget(index)
        form.userName = data[index].userName;
        form.email = data[index].email;
        form.subject = data[index].subject;
        form.massage = data[index].massage;
        setEdit(true);
      }
    })

  }

  const deleteHandler = (id) => {
    const newList = data.filter((item, index) => index !== id);

    setData(newList);

  }

  useEffect(() => {
    // localStorage.setItem("lists", JSON.stringify(data))
    //  sessionStorage.setItem("lists", JSON.stringify(data))

  }, [data]);

  // useEffect(() => {
  //   const storedData = cookies.lists || [];
  //   setData(storedData)
  // }, [cookies.lists]);



  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { ...form, id: new Date().getTime().toString() }



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

    if (form.subject === '') {
      setSubjectErr("please Enter Subject");
      result = false;

    }
    else if (form.subject.length < 4) {
      setSubjectErr('plz enter more then 4 letters')
      result = false;

    }
    else {
      setSubjectErr('');
    }
    if (form.massage === '') {
      setMassageErr("please Enter your Massage");
      result = false;

    }
    else if (form.massage.length < 4) {
      setMassageErr('plz enter more then 4 letters')
      result = false;

    }
    else {
      setMassageErr('');
    }

    if (result) {
      if (edit) {
        alert('are you edit data')
        data[target] = form;
        setEdit(false);
        // localStorage.setItem('lists', JSON.stringify(data))
        // sessionStorage.setItem('lists', JSON.stringify(data))
      }
      else {
        setData([...data, newData]);
        // localStorage.setItem('lists', JSON.stringify(data))
        // sessionStorage.setItem('lists', JSON.stringify(data))

        // setCookies("lists", [...data, newData], {
        //   path: "/",
        // });
        alert('form succesfully submitted')
      }
    }
  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }



  return (
    <>
      <div className="main-contact" id="Contact">
        <div className="container-registration">
          <div className="registration-form">
            <div className="contact">
              <h1 className="myh4">Hire Me.</h1>
              <p className="para-contact">
                I am available for freelance work. Connect with me via phone:
                <span className="contact-span">01923 088574 </span> or email:{" "}
                <span className="contact-span">admin@example.com</span>
              </p>
            </div>

            <div className="input-field">
              <form onSubmit={handleSubmit}>
                <label htmlFor="input-item1"></label>
                <input
                  type="text"
                  name="userName"
                  id="input-item1"
                  value={form.userName}
                  placeholder="your name *"
                  autoComplete="off"
                  onChange={handleChange}
                />

                {nameErr && <span>{nameErr}</span>}


                <label htmlFor="input-item2"></label>
                <input
                  type="text"
                  name="email"
                  id="input-item2"
                  value={form.email}
                  placeholder="your email "
                  autoComplete="off"
                  onChange={handleChange}
                />

                {emailErr && <span>{emailErr}</span>}

                <label htmlFor="input-item3"></label>
                <input
                  type="text"
                  name="subject"
                  id="input-item3"
                  value={form.subject}
                  autoComplete="off"
                  placeholder="write a subject "
                  onChange={handleChange}
                />

                {subjectErr && <span>{subjectErr}</span>}

                <label htmlFor="input-item4"></label>
                <textarea
                  type="text"
                  name="massage"
                  id="input-item4"
                  value={form.massage}
                  autoComplete="off"
                  placeholder="your massage "
                  onChange={handleChange}
                />
                {massageErr && <span>{massageErr}</span>}
                <br /> <br />

                <button className="submit-btn form-submit-btn" onClick={handleSubmit}>{edit ? 'edit' : 'SUBMIT'}</button>
              </form>
              <div>
                <br />

                <div className="table-data">
                  <table>
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Massage</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map((curElem, index) => {
                          const { userName, email, subject, massage } = curElem;
                          return (
                            <tr className="showdatastyle" key={index}>
                              {<td>{userName}</td>}
                              {<td>{email}</td>}
                              {<td>{subject}</td>}
                              {<td>{massage}</td>}
                              <td> <button onClick={() => editHandler(curElem, index)}>Edit</button></td>
                              <td><button onClick={() => deleteHandler(index)}>Delete</button></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="img-container-about">
            <div className="registration-img"> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
