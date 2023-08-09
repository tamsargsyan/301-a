import { Fragment, useEffect, useState } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import PATTERN from "../../assets/patterns/side-2.svg";
import PATTERN_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import ICON from "../../assets/info/4.svg";
import Project from "../../components/Project";
import { ProjectTypes, projectsData, typeBtn } from "./projectsData";
import { MenuProps, Spin } from "antd";
import Button from "../../components/Button";
import { useWindowSize } from "../../hooks/useWindowSize";
import DropDown from "../../components/Dropdown";
import FullProjectInfo from "../FullProjectInfo";
import "./index.css";

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

const OurProjects = () => {
  const windowSize = useWindowSize();
  const [activeProjects, setActiveProjects] = useState(0);
  const [typedProject, setTypedProject] = useState("all");
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(
    projectsData[activeProjects]
  );
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleClick = (i: number) => {
    setLoading(true);
    setActiveProjects(i);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  useEffect(() => {
    if (typedProject === "all") {
      setFilteredData(projectsData[activeProjects]);
    } else {
      const filteredProjects = projectsData[activeProjects].projects?.filter(
        category => category.type === typedProject
      );
      setFilteredData({
        ...projectsData[activeProjects],
        projects: filteredProjects,
      });
    }
  }, [typedProject, activeProjects]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredData.projects?.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages =
    filteredData.projects &&
    new Array(Math.ceil(filteredData.projects?.length / projectsPerPage)).fill(
      0
    );
  const heartit = (id: number) => {
    setFilteredData(prevData => {
      const updatedProjects = prevData.projects?.map(project =>
        project.id === id ? { ...project, isSaved: !project.isSaved } : project
      );
      return { ...prevData, projects: updatedProjects };
    });
  };
  const [isView, setIsView] = useState(false);
  useEffect(() => {
    const handlePopstate = () => {
      setIsView(false);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);
  const [viewedProject, setViewedProject] = useState<
    ProjectTypes | undefined
  >();
  const view = (id: number) => {
    const viewedProject = currentProjects?.find(project => project.id === id);
    setViewedProject(viewedProject);
  };
  return (
    <Background
      pattern1={windowSize.width < 800 ? PATTERN_MOBILE : PATTERN}
      style={{ padding: 0, flexDirection: "column" }}
      sidePatter2Style={{ display: "none" }}>
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
      {!isView ? (
        <>
          {!loading ? (
            currentProjects?.length ? (
              currentProjects?.map(project => (
                <Fragment key={project.id}>
                  <Project
                    author={project.author}
                    authorImg={project.authorImg}
                    title={project.title}
                    flag={project.flag}
                    desc={project.desc}
                    projectImg={project.img}
                    heartit={() => heartit(project.id)}
                    isSaved={project.isSaved}
                    id={project.id}
                    setIsView={setIsView}
                    view={view}
                  />
                </Fragment>
              ))
            ) : (
              <div className='noProject'>There is no project</div>
            )
          ) : (
            <Spin />
          )}
          {totalPages &&
            totalPages.length > 1 &&
            !!currentProjects?.length &&
            !loading && (
              <div className='pagination'>
                {totalPages.map((_, i) => (
                  <button
                    key={i}
                    className={`${
                      currentPage === i + 1 && "paginationBtn_active"
                    } paginationBtn`}
                    onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
        </>
      ) : (
        <FullProjectInfo viewedProject={viewedProject} />
      )}
    </Background>
  );
};

export default OurProjects;
