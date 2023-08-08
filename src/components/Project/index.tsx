import PROJECT from "../../assets/projectAuthor/project-1.png";
import AUTHOR from "../../assets/projectAuthor/1.svg";
import FLAG from "../../assets/flag.svg";
import SAVE from "../../assets/projectAuthor/save.svg";
import Button from "../Button";
import "./index.css";

const Project = () => {
  return (
    <div className='ourProject__project'>
      <div className='ourProject__projectInner'>
        <div className='ourProject__projectInfo'>
          <div className='ourProject__author'>
            <img src={AUTHOR} alt='Author' />
            <span>Peter Nemoy</span>
          </div>
          <div className='ourProject__title'>
            <span>301 Land of Wisdom</span>
            <div className='flag'>
              <img src={FLAG} alt='FLAG' />
              <span>15</span>
            </div>
          </div>
          <div className='ourProject__desc'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
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
        <img src={PROJECT} alt='Project' />
      </div>
    </div>
  );
};

export default Project;
