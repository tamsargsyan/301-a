import PATTERN_BIG from "../../assets/pattern-big-1.svg"
import PATTERN_SMALL_1 from "../../assets/pattern-small-1.svg"
import SIDE_PATTERN from "../../assets/side-pattern-1.svg"
import LOGO_301 from "../../assets/301.jpg"
import FB from "../../assets/fb.svg"
import IG from "../../assets/ig.svg"
import LI from "../../assets/li.svg"
import TG from "../../assets/tg.svg"
import WA from "../../assets/wa.svg"
import "./index.css"

const Section = () => {
    const socialMedias = [
        {
            id: 1,
            name: "Facebook",
            url: FB,
            link: "facebook.com"
        },
        {
            id: 2,
            name: "Instagram",
            url: IG,
            link: "instagram.com"
        },
        {
            id: 3,
            name: "Linked In",
            url: LI,
            link: "linkedin.com"
        },
        {
            id: 4,
            name: "Telegram",
            url: TG,
            link: "telegram.com"
        },
        {
            id: 5,
            name: "Whats App",
            url: WA,
            link: "whatsapp.com"
        }
    ]

    return (
        <div className="sectionContainer">
            <div className="sidePattern1">
                <img src={SIDE_PATTERN} alt="Pattern" />
            </div>
            <div className="smallPattern1">
                <img src={PATTERN_SMALL_1} alt="Pattern" />
            </div>
            <div className="content">
                <div className="infoContent">
                    <h1>ЗЕМЛЯ МУДРОСТИ</h1>
                    <p>Изменение сценария будущего Армении путем создания онтологической безопасности.
                        В центре нашего внимания Армения — земля многовековой культуры и мудрости, которой есть что предложить миру.
                    </p>
                    <button>Стань одним из 301</button>
                    <button>Стань одним из 301</button>
                </div>
                <div className="logo301">
                    <img src={LOGO_301} alt="Logo" />
                </div>
                <div className="bigPattern">
                    <img src={PATTERN_BIG} alt="Pattern" />
                </div>
                <div className="socialMedias">
                    <div className="followUsHolder">
                        <span className="verticalText">Follow Us</span>
                    </div>
                    <div className="line"></div>
                    <div className="medias">
                        {
                            socialMedias.map(media => (
                                <a href={media.link}>
                                    <img src={media.url} alt={media.name} />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="smallPattern2">
                <img src={PATTERN_SMALL_1} alt="Pattern" />
            </div>
            <div className="sidePattern2">
                <img src={SIDE_PATTERN} alt="Pattern" />
            </div>
        </div>
    )
}

export default Section