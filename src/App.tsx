import "./App.css";
import Background from "./components/Background";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SIDE_PATTERN_2 from "./assets/patterns/side-2.svg";
import SMALL_PATTERN_2 from "./assets/patterns/small-2.svg";
import BIG_PATTERN_2 from "./assets/patterns/big-2.svg";
import BIG_PATTERN_3 from "./assets/patterns/big-3.svg";
import ICON_1 from "./assets/info/1.svg";
import ICON_2 from "./assets/info/2.svg";
import ICON_3 from "./assets/info/3.svg";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Ecosystem from "./pages/Ecosystem";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  const sections = [
    {
      id: 1,
      h1: "НАША МИССИЯ",
      h2: "Наша миссия — обеспечить онтологическую безопасность Армении.",
      p: [
        "Мы запускаем научные проекты, реализовываем культурные инициативы, строим образовательную среду, формируем экспертное сообщество  — это актуализирует систему привычных ценностей и позволяет менять сценарий будущего. Мы верим, что именно такой подход сможет укрепить место армян как носителей уникального  культурного кода в современном мире. Мы выстраиваем те границы Армении, которые никому не под силу нарушить. Мы создаем будущее, в котором армянская цивилизация  уникальна и ценна для мира.",
      ],
      btn: ["Узнать больше"],
      icon: ICON_1,
      pattern1: SIDE_PATTERN_2,
      pattern2: SMALL_PATTERN_2,
      pattern3: BIG_PATTERN_2,
    },
    {
      id: 2,
      h1: "ПОЧЕМУ ЭТО ВАЖНО?",
      h2: "",
      p: [
        "Можем ли мы назвать ныне живущих представителей армянской культуры, известных по всему миру? Нет — Армении нет на современной культурной карте. Многие армяне достигли успеха в области культуры в других странах, однако культура, которую они представляют — американская, французская, русская, но не армянская.В Армении также наблюдается кризис образования; отсутствие общественного договора и системы национальных ценностей, что может вести к необратимым последствиям — потере идентичности, а позже и государственности.Мы верим, что выстраивание границ онтологической безопасности сможет этому противостоять. Для этого нужно определить, чем Армения уникальна для мира. Каким органом на теле планеты может стать наша страна: совестью, памятью, руками, голосом? А может быть быть нейронами или мозжечком? Ответив на этот вопрос, армянская цивилизация сумеет сохранить себя и сможет стать важной большому миру.",
      ],
      btn: undefined,
      icon: ICON_2,
      pattern1: SIDE_PATTERN_2,
      pattern2: SMALL_PATTERN_2,
      pattern3: BIG_PATTERN_3,
    },
    {
      id: 3,
      h1: "ГИПОТЕЗЫ БУДУЩЕГО",
      h2: "",
      p: [
        "Мы разработали четыре основные гипотезы, согласно которым Армения может развиваться и позиционировать себя на карте планеты.",
      ],
      btn: undefined,
      icon: ICON_3,
      pattern1: undefined,
      pattern2: undefined,
      pattern3: undefined,
    },
  ];
  return (
    <div className='App'>
      <Navbar />
      {sections.map(section => (
        <div key={section.id}>
          <Background
            pattern1={section.pattern1}
            pattern2={section.pattern2}
            pattern3={section.pattern3}>
            <Header
              h1={section.h1}
              h2={section.h2}
              p={section.p}
              btns={section.btn}
              icon={section.icon}
            />
          </Background>
          <div className='separatedPart'></div>
        </div>
      ))}
      <About />
      <Projects />
      <Ecosystem />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
