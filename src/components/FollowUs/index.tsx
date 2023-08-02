import "./index.css";
import FB from "../../assets/fb-white.svg";
import IG from "../../assets/ig-white.svg";
import LI from "../../assets/li-white.svg";
import TG from "../../assets/tg-white.svg";
import WA from "../../assets/wa-white.svg";
interface FollowUsProps {
  style?: Object;
}

const FollowUs: React.FC<FollowUsProps> = ({ style }) => {
  const medias = [
    {
      id: 1,
      img: FB,
      name: "Facebook",
    },
    {
      id: 2,
      img: IG,
      name: "Instagram",
    },
    {
      id: 3,
      img: LI,
      name: "Linked In",
    },
    {
      id: 4,
      img: TG,
      name: "Telegram",
    },
    {
      id: 5,
      img: WA,
      name: "Whats App",
    },
  ];
  return (
    <div className='followUsContainer' style={style}>
      <div className='verticalText'>
        <span>Follow Us</span>
      </div>
      <div className='line'></div>
      <div className='socialMedias'>
        {medias.map(media => (
          <a href='/' className='media' key={media.id}>
            <img src={media.img} alt={media.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
