import Background from "../../components/Background";
import Header from "../../components/Header";
import EMAIL from "../../assets/email.svg";
import "./index.css";

const Contact = () => {
  return (
    <Background>
      <Header
        h1='Напишите нам'
        icon={EMAIL}
        style={{
          boxShadow: "0px 0px 16px rgba(49, 58, 75, 0.11)",
          paddingTop: "50px",
          paddingBottom: "40px",
        }}
      />
      <div className='form'>
        <input placeholder='Ваша имя' />
        <input placeholder='Ваша почта' />
        <textarea>asd</textarea>
      </div>
    </Background>
  );
};

export default Contact;
