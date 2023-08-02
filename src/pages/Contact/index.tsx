import Background from "../../components/Background";
import Header from "../../components/Header";
import EMAIL from "../../assets/email.svg";
import "./index.css";
import { useState } from "react";
import Button from "../../components/Button";
import PATTERN_2 from "../../assets/patterns/small-3.svg";

const Contact = () => {
  const [value, setValue] = useState("");
  const handleChange = (txt: string) => {
    setValue(txt);
  };

  return (
    <Background
      style={{ flexDirection: "column", paddingTop: 0 }}
      pattern2={PATTERN_2}
      pattern2LeftStyle={{
        display: "none",
      }}
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
      <form className='formContainer'>
        <div className='formInner'>
          <div className='formInputs'>
            <div className='formGroup'>
              <label htmlFor='name'>Имя</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Ваша имя'
                value={value}
                onChange={e => handleChange(e.target.value)}
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
                value={value}
                onChange={e => handleChange(e.target.value)}
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
              placeholder='Написать '
              rows={4}
              cols={80}
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
          />
        </div>
      </form>
    </Background>
  );
};

export default Contact;
