import { useEffect, useState } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import PATTERN from "../../assets/patterns/side-2.svg";
import ICON from "../../assets/info/4.svg";
import Project from "../../components/Project";
import { projectsData, typeBtn } from "./projectsData";
import { Spin } from "antd";
import Button from "../../components/Button";
import "./index.css";

const OurProjects = () => {
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
    Math.ceil(filteredData.projects?.length / projectsPerPage);
  console.log(currentProjects);
  return (
    <Background
      pattern1={PATTERN}
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
        <div className='typedBtnsWrapper'>
          {typeBtn.map(btn => (
            <div key={btn.id} onClick={() => setTypedProject(btn.type)}>
              <Button
                text={btn.name}
                link={false}
                active={typedProject === btn.type}
                to={""}
                style={{
                  padding: "10px 15px",
                  border: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {!loading ? (
        currentProjects?.length ? (
          currentProjects?.map(project => (
            <div key={project.id}>
              <Project
                author={project.author}
                authorImg={project.authorImg}
                title={project.title}
                flag={project.flag}
                desc={project.desc}
                projectImg={project.img}
              />
            </div>
          ))
        ) : (
          <div className='noProject'>There is no project</div>
        )
      ) : (
        <Spin />
      )}
      {totalPages !== 0 && filteredData.projects && !loading && (
        <div className='pagination'>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        </div>
      )}
    </Background>
  );
};

export default OurProjects;
