import { CiFlag1 } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { AiOutlineFilePdf } from "react-icons/ai";
import { IoPieChartOutline } from "react-icons/io5";
import { PiTreeStructure } from "react-icons/pi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { LuFileCheck } from "react-icons/lu";
import { FaMicrochip } from "react-icons/fa6";

const Sidebar = ({ isOpen, setActivePage }) => {
  if (!isOpen) return null;

  const iconClass =
    "w-10 h-10 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-200 rounded";

  return (
    <div className="w-16 bg-gray-100 min-h-screen flex flex-col items-center py-6 gap-8 border-r">
      {/* FLAG */}
      <div className={iconClass}>
        <CiFlag1 />
      </div>

      {/* CONTACTS */}
      <div className={iconClass}>
        <IoMdContacts />
      </div>

      {/* RUPEE */}
      <div className={iconClass}>
        <LiaRupeeSignSolid />
      </div>

      {/* STAR */}
      <div className={iconClass}>
        <CiStar />
      </div>

      {/* GRAPH (ACTIVE PAGE) */}
      <div
        className={`${iconClass} bg-purple-200 text-purple-800`}
        onClick={() => setActivePage("financial")}
      >
        <VscGraph />
      </div>

      {/* OTHER ICONS */}
      <div className={iconClass}>
        <AiOutlineFilePdf />
      </div>

      <div className={iconClass}>
        <IoPieChartOutline />
      </div>

      <div className={iconClass}>
        <PiTreeStructure />
      </div>

      <div className={iconClass}>
        <FaBalanceScaleLeft />
      </div>

      <div className={iconClass}>
        <LuFileCheck />
      </div>

      <div className={iconClass}>
        <FaMicrochip />
      </div>
    </div>
  );
};

export default Sidebar;
