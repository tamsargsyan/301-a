import FLAG from "../../assets/flag.svg";
import SAVE from "../../assets/projectAuthor/save.svg";
import Button from "../Button";
import "./index.css";

interface ProjectProps {
  author: string;
  authorImg: string;
  title: string;
  flag: number;
  desc: string;
  projectImg: string;
}

const Project: React.FC<ProjectProps> = ({
  author,
  authorImg,
  title,
  flag,
  desc,
  projectImg,
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
        <div className='btns'>
          <Button
            text='Wiev'
            link={false}
            to={""}
            style={{
              padding: "0 30px",
              height: "35px",
              background: "#DD264E",
              color: "#fff",
              fontWeight: "400",
            }}
          />
          <Button
            text='Saved project'
            link={false}
            to={""}
            icon={SAVE}
            style={{
              padding: "0 30px",
              height: "35px",
              gap: "10px",
              border: "none",
              fontWeight: "400",
            }}
          />
        </div>
      </div>
      <div className='ourProject__projectImg'>
        <img src={projectImg} alt='Project' />
      </div>
    </div>
  );
};

export default Project;
