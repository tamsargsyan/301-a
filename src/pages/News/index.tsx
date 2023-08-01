import Background from "../../components/Background";
import Header from "../../components/Header";
import HeaderIcon from "../../assets/info/news.svg";
import SIDE_PATTERN from "../../assets/patterns/side-2.svg";
import PATTERN from "../../assets/patterns/side-3.svg";
import NEWS_1 from "../../assets/news1.png";
import NEWS_2 from "../../assets/news2.png";
import NEWS_3 from "../../assets/news3.jpg";
import "./index.css";
import Button from "../../components/Button";

const News = () => {
  const news = [
    {
      id: 1,
      title: '"301" запускает проект "Библиотека армянской культуры"',
      content:
        "Культурное наследие армянского народа обширно и многогранно. Однако по сей день нет единого ресурса, который дал бы возможность желающим ознакомиться с ним.",
      date: "23.03.2023",
      img: NEWS_1,
    },
    {
      id: 2,
      title: 'Дети из Арцаха отметили новогодние праздники в фонде "301"',
      content:
        '26 декабря фонд "301" принял у себя в гостях детей из Арцаха, которые не могут вернуться в свои дома по причине блокады Лачинского коридора.',
      date: "23.03.2023",
      img: NEWS_2,
    },
    {
      id: 3,
      title: "Дни открытых дверей музыкальной школы",
      content:
        "3-его и 4-го января всех приглашаем участвовать на днях открытых дверей музыкальной школы с альтернативной методикой обучения : проект мудреца 301-Камиля Чалаева — «Дикой Школы»",
      date: "23.03.2023",
      img: NEWS_3,
    },
  ];
  return (
    <Background
      pattern1={SIDE_PATTERN}
      pattern2={PATTERN}
      pattern2None={true}
      style={{ flexDirection: "column", paddingTop: 0 }}>
      <Header
        h1='Новости "301"'
        icon={HeaderIcon}
        style={{
          boxShadow: "0px 0px 16px rgba(49, 58, 75, 0.11)",
          paddingTop: "50px",
          paddingBottom: "40px",
        }}
      />
      <div className='newsContainer'>
        {news.map(item => (
          <div className='news' key={item.id}>
            <div className='newsImg'>
              <img src={item.img} alt={item.title} />
            </div>
            <div className='newsContent'>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        text='Все новости'
        style={{
          color: "#DD264E",
          boxShadow: "-21px 16px 38px 0px rgba(191, 9, 48, 0.21)",
          margin: "50px 0",
        }}
      />
    </Background>
  );
};

export default News;
