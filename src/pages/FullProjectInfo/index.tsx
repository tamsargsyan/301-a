import { useWindowSize } from "../../hooks/useWindowSize";
import { ProjectTypes } from "../OurProject/projectsData";
import Button from "../../components/Button";
import ARROW from "../../assets/arrow.svg";
import FLAG from "../../assets/flag.svg";
import PATTERN from "../../assets/projectAuthor/pattern.svg";
import PDF from "../../assets/projectAuthor/pdf.svg";
import BUDGET from "../../assets/projectAuthor/budget.svg";
import COLLECTED from "../../assets/projectAuthor/collected.svg";
import REMAINING from "../../assets/projectAuthor/remaining.svg";
import HEART from "../../assets/projectAuthor/heart.svg";
import "./index.css";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";
import { useParams } from "react-router";

const FullProjectInfo = () => {
  const arr = [
    {
      id: 1,
      day: "01",
      month: "Apr",
      color: "#DD264E",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 2,
      day: "02",
      month: "May",
      color: "#189387",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 3,
      day: "03",
      month: "Jun",
      color: "#C5D92D",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 4,
      day: "01",
      month: "Apr",
      color: "#2DD9B0",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 5,
      day: "02",
      month: "May",
      color: "#D9562D",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 5,
      day: "03",
      month: "Jun",
      color: "#D92DD2",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 6,
      day: "01",
      month: "Apr",
      color: "#EB407A",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 7,
      day: "02",
      month: "May",
      color: "#87B63B",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 8,
      day: "03",
      month: "Jun",
      color: "#7BA8FF",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 9,
      day: "01",
      month: "Apr",
      color: "#EB4040",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 10,
      day: "02",
      month: "May",
      color: "#CFA81F",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 11,
      day: "03",
      month: "Jun",
      color: "#7BD7FF",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
  ];
  const windowSize = useWindowSize();
  const { id } = useParams();
  console.log(id);
  const projects = useSelector((state: AppState) => state.projects);
  console.log(projects, "projects");
  const viewedProject =
    id && projects && projects.find((project: any) => project.id === +id);
  console.log(viewedProject);
  return (
    <>
      <div className='fullProjectContainer'>
        <div className='fullProjectInner'>
          <div className='fullProjectBg'>
            <div className='overlay'></div>
            <button className='backBtn'>
              <img src={ARROW} alt='Back Button' />
            </button>
            <img
              src={viewedProject.fullImg}
              alt='Project Background'
              className='bgImg'
            />
            <h1 className='fullProjectBg_title'>{viewedProject.title}</h1>
          </div>
          <div className='fullProject_inner'>
            <div className='fullProject_titleInner'>
              <div className='titlePart'>
                <h2>{viewedProject.title}</h2>
                <div className='flag'>
                  <img src={FLAG} alt='Flag' />
                  <span>{viewedProject.flag}</span>
                </div>
              </div>
              <div className='ourProject__author'>
                <img src={viewedProject.authorImg} alt='Author' />
                <span>{viewedProject.author}</span>
              </div>
            </div>
            <div className='fullProject_problemInner'>
              <div className='problem_header'>
                <div className='problem_heading'>
                  <img src={PATTERN} alt='Pattern' />
                  <h2>Problem</h2>
                </div>
                {windowSize.width > 600 && (
                  <button className='download_pdf'>
                    <span>download presentation pdf</span>
                    <img src={PDF} alt='Pdf' />
                  </button>
                )}
              </div>
              <div className='problem_inner'>
                <p>{viewedProject.problem}</p>
              </div>
              {windowSize.width < 600 && (
                <button className='download_pdf'>
                  <span>dawload presentation pdf</span>
                  <img src={PDF} alt='Pdf' />
                </button>
              )}
            </div>
            <div className='roadMapContainer'>
              <div className='roadMap_heading problem_heading'>
                <img src={PATTERN} alt='Pattern' />
                <h2>Road Map</h2>
              </div>
              <div className='roadMap_inner _inner'>
                <div className='terms'>
                  <button>long term</button>
                  <button>short-term</button>
                </div>
                <div className='fullProject_slider'>
                  <div className='chartContainer'>
                    <div className='chart_line'></div>
                    {arr.map((info, i) => {
                      return (
                        <div className='chart' key={i}>
                          <div className='chart_info'>
                            <h1>{info.day}</h1>
                            <p>{info.desc}</p>
                          </div>
                          <div className='chart_month'>
                            <div
                              className='month_circle'
                              style={{ backgroundColor: info.color }}></div>
                            <div className='month'>{info.month}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className='budgetContainer'>
                  <div className='budget'>
                    <img src={BUDGET} alt='Budget' />
                    <span>Budget</span>
                    <h2>{viewedProject.budget}$</h2>
                  </div>
                  <div className='collected'>
                    <img src={COLLECTED} alt='Collected' />
                    <span>Collected</span>
                    <h2>{viewedProject.collected}$</h2>
                  </div>
                  <div className='remaining'>
                    <img src={REMAINING} alt='Remaining' />
                    <span>Collected</span>
                    <h2>{viewedProject.remaining}$</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className='workTeamContainer'>
              <div className='roadMap_heading problem_heading'>
                <img src={PATTERN} alt='Pattern' />
                <h2>Work Team</h2>
              </div>
              <div className='teamMembers _inner'>
                {viewedProject.workTeam?.map((team: any) => (
                  <div className='member' key={team.id}>
                    <img src={team.img} alt='Team Member' />
                  </div>
                ))}
              </div>
            </div>
            <div className='partnersContainer'>
              <div className='roadMap_heading problem_heading'>
                <img src={PATTERN} alt='Pattern' />
                <h2>Partners</h2>
              </div>
              <div className='partners _inner'>
                <div className='innerPartners'>
                  {viewedProject?.partners?.map((partner: any) => (
                    <div className='partner' key={partner.id}>
                      <img src={partner.img} alt={partner.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='_inner'>
              <div className='dontaionBtns'>
                <Button
                  text='add to interesting'
                  link={false}
                  to=''
                  icon={HEART}
                  style={{
                    width: "100%",
                    color: "#717883",
                    border: "1px solid #000",
                    gap: "10px",
                    padding: "7px 35px",
                  }}
                />
                <Button
                  text='Donate'
                  link={false}
                  to={""}
                  style={{
                    width: "100%",
                    color: "#fff",
                    background: "#DD264E",
                    boxShadow: "0px 26px 40px 0px rgba(191, 9, 48, 0.15)",
                    padding: "10px 35px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullProjectInfo;
