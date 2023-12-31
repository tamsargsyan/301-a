import FLAG from "../../assets/flag.svg";
import Button from "../Button";
import "./index.css";

interface ProjectProps {
  author: string;
  authorImg: string;
  title: string;
  flag: number;
  desc: string;
  projectImg: string;
  heartit: () => void;
  isSaved: boolean;
  id: number;
  setIsView: (arg: boolean) => void;
  view: (arg: number) => void;
}

const Project: React.FC<ProjectProps> = ({
  author,
  authorImg,
  title,
  flag,
  desc,
  projectImg,
  heartit,
  isSaved,
  id,
  setIsView,
  view,
}) => {
  return (
    <div className='ourProject__project'>
      <div className='ourProject__projectInner'>
        <div className='ourProject__projectInfo'>
          <div className='ourProject__author'>
            <img src={authorImg} alt='Author' />
            <span>{author}</span>
          </div>
          <div className='ourProject__title'>
            <span>{title}</span>
            <div className='flag'>
              <img src={FLAG} alt='FLAG' />
              <span>{flag}</span>
            </div>
          </div>
          <div className='ourProject__desc'>
            <p>{desc}</p>
          </div>
        </div>
        <div className='btns' style={{ width: "100%" }}>
          <Button
            text='Wiev'
            link={true}
            to={`${id}`}
            style={{
              padding: "0 30px",
              height: "35px",
              background: "#DD264E",
              color: "#fff",
              fontWeight: "500",
            }}
            onClick={() => {
              setIsView(true);
              view(id);
            }}
          />
          <button
            className={`heart-btn ${isSaved ? "liked" : ""}`}
            onClick={heartit}>
            <span>Saved project</span>
            <svg className='heart heart-icon' viewBox='0 0 32 29.6'>
              <path d='M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z' />
            </svg>
          </button>
        </div>
      </div>
      <div className='ourProject__projectImg'>
        <img src={projectImg} alt='Project' />
      </div>
    </div>
  );
};

export default Project;
