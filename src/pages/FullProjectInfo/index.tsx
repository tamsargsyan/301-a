import { ProjectTypes } from "../OurProject/projectsData";
import ARROW from "../../assets/arrow.svg";
import FLAG from "../../assets/flag.svg";
import PATTERN from "../../assets/projectAuthor/pattern.svg";
import PDF from "../../assets/projectAuthor/pdf.svg";
import { motion } from "framer-motion";
import "./index.css";
import { useEffect, useRef, useState } from "react";

interface Props {
  viewedProject: ProjectTypes | undefined;
}

const FullProjectInfo: React.FC<Props> = ({ viewedProject }) => {
  console.log(viewedProject);
  const arr = new Array(12).fill(null);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    carousel.current &&
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      {viewedProject ? (
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
                  <button className='download_pdf'>
                    <span>dawload presentation pdf</span>
                    <img src={PDF} alt='Pdf' />
                  </button>
                </div>
                <div className='problem_inner'>
                  <p>{viewedProject.problem}</p>
                </div>
              </div>
              <div className='roadMapContainer'>
                <div className='roadMap_heading problem_heading'>
                  <img src={PATTERN} alt='Pattern' />
                  <h2>Road Map</h2>
                </div>
                <div className='roadMap_inner'>
                  <div className='terms'>
                    <button>long term</button>
                    <button>short-term</button>
                  </div>
                  <div className='slider'>
                    <motion.div ref={carousel} className='carousel'>
                      <motion.div
                        className='chartContainer'
                        drag='x'
                        dragConstraints={{ right: 0, left: -width }}
                        initial={{ x: 0 }}>
                        {arr.map((_, i) => (
                          <motion.div key={i} className='chart'>
                            <div className='chart_info'>
                              <h1>01</h1>
                              <p>
                                Lorem ipsum dolor sit amet, consectetuer,
                                adipiscing elit, sed diam nonummy nibh
                              </p>
                            </div>
                            <div className='chart_month'>
                              <div className='month_circle'></div>
                              <div>Apr</div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FullProjectInfo;
