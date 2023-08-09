import DROPDOWN_ARROW from "../../assets/dropdown-arrow.svg";
import { Dropdown, Space } from "antd";

interface Props {
  items: any;
  txt: string;
}

const DropDown: React.FC<Props> = ({ items, txt }) => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button onClick={e => e.preventDefault()}>
        <Space>
          {txt}
          <img src={DROPDOWN_ARROW} alt='Arrow' />
        </Space>
      </button>
    </Dropdown>
  );
};

export default DropDown;
