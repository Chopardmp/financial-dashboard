import { FcApproval } from "react-icons/fc";

const CompanyHeader = ({ onAdd }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        <span className="text-green-600 text-xl">
          <FcApproval />
        </span>

        <h2 className="font-semibold text-gray-800">
          FLEMING LABORATORIES LIMITED
        </h2>
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={onAdd}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Add Latest Year Financials
      </button>
    </div>
  );
};

export default CompanyHeader;
