import Header from "../../components/Header";
import Button from "../../components/Button";
import DropDown from "../../components/Dropdown";
import ICON from "../../assets/info/4.svg";
import { MenuProps } from "antd";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Fragment } from "react";
import { projectsData, typeBtn } from "../../pages/OurProject/projectsData";

const items: MenuProps["items"] = [
  {
    label: <span>страна остроумия</span>,
    key: "0",
  },
  {
    label: <span>страна креономики и сенсаномики</span>,
    key: "1",
  },
  {
    label: <span>«Красная книга» древнейших культур</span>,
    key: "3",
  },
  {
    label: <span>сетевое государство</span>,
    key: "4",
  },
];

interface Props {
  handleClick: (arg: number) => void;
  activeProjects: any;
  typedProject: any;
  setTypedProject: any;
}

const ProjectsFiltering: React.FC<Props> = ({
  handleClick,
  activeProjects,
  typedProject,
  setTypedProject,
}) => {
  const windowSize = useWindowSize();

  return (
    <div className='filteringWrapper'>
      <Header
        h1='НАШИ ПРОЕКТЫ'
        p={[
          "За несколько лет работы фонда «301. Земля мудрости» мы запустили ряд важных проектов по направлениям образования, культуры, науки и инноваций и целостного развития территории. ",
        ]}
        icon={ICON}
      />
      {windowSize.width > 800 ? (
        <div className='filteringBtnsWrapper'>
          {projectsData.map((project, i) => (
            <button
              key={i}
              className={`${activeProjects === i && "activeProjectBtn"}`}
              onClick={() => handleClick(i)}>
              {project.name}
            </button>
          ))}
        </div>
      ) : (
        <DropDown items={items} txt='Projects we fundraise' />
      )}
      {windowSize.width > 800 ? (
        <div className='typedBtnsWrapper'>
          {typeBtn.map(btn => (
            <Fragment key={btn.id}>
              <Button
                text={btn.name}
                link={false}
                active={typedProject === btn.type}
                to={""}
                style={{
                  padding: "12px 22px",
                  border: "none",
                }}
                onClick={() => setTypedProject(btn.type)}
              />
            </Fragment>
          ))}
        </div>
      ) : (
        <DropDown items={items} txt='Education' />
      )}
    </div>
  );
};

export default ProjectsFiltering;
