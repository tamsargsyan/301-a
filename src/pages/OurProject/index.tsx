import { Fragment, useEffect, useState } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import PATTERN from "../../assets/patterns/side-2.svg";
import PATTERN_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import Project from "../../components/Project";
import { projectsData, typeBtn } from "./projectsData";
import { MenuProps, Spin } from "antd";
import Button from "../../components/Button";
import { useWindowSize } from "../../hooks/useWindowSize";
import DropDown from "../../components/Dropdown";
import "./index.css";
import { useDispatch } from "react-redux";
import { getProjects } from "../../redux/actions";
import ICON from "../../assets/info/4.svg";
import ProjectsFiltering from "../../components/ProjectsFiltering";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects(filteredData.projects));
  }, [filteredData]);
  console.log();
  return (
    <Background
      pattern1={windowSize.width < 800 ? PATTERN_MOBILE : PATTERN}
      style={{ padding: 0, flexDirection: "column" }}
      sidePatter2Style={{ display: "none" }}>
      <ProjectsFiltering
        handleClick={handleClick}
        activeProjects={activeProjects}
        typedProject={typedProject}
        setTypedProject={setTypedProject}
      />
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
    </Background>
  );
};

export default OurProjects;
