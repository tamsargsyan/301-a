import React, { useState } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import EMAIL from "../../assets/email.svg";
import "./index.css";
import Button from "../../components/Button";
import PATTERN_2 from "../../assets/patterns/small-3.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  // console.log("Form Data:", formData);

  return (
    <Background
      style={{ flexDirection: "column", paddingTop: 0 }}
      pattern2={PATTERN_2}
      pattern2LeftStyle={{ display: "none" }}
      pattern2RightStyle={{
        width: "190px",
        height: "190px",
        top: "480px",
      }}>
      <Header
        h1='Напишите нам'
        icon={EMAIL}
        style={{
          boxShadow: "0px 0px 16px rgba(49, 58, 75, 0.11)",
          paddingTop: "50px",
          paddingBottom: "40px",
        }}
      />
      <form className='formContainer' onSubmit={handleSubmit}>
        <div className='formInner'>
          <div className='formInputs'>
            <div className='formGroup'>
              <label htmlFor='name'>Имя</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Ваше имя'
                value={formData.name}
                onChange={handleChange}
                required
                aria-hidden={true}
                className='form'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='email'>Эл. почта</label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='Ваша почта'
                value={formData.email}
                onChange={handleChange}
                required
                aria-hidden={true}
                className='form'
              />
            </div>
          </div>
          <div className='formGroup'>
            <label htmlFor='message'>Сообщение</label>
            <textarea
              id='message'
              name='message'
              placeholder='Написать'
              rows={4}
              cols={80}
              value={formData.message}
              onChange={handleChange}
              className='form'
            />
          </div>
        </div>
        <div className='btns'>
          <Button
            text='Send'
            style={{
              padding: "10px 70px",
              background: "#DD264E",
              boxShadow: "-21px 16px 38px 0px rgba(191, 9, 48, 0.21)",
              color: "#fff",
            }}
            link={false}
            to=''
          />
        </div>
      </form>
    </Background>
  );
};

export default Contact;
