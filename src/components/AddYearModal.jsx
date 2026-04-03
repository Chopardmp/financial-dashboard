import { useState } from "react";

const assetFields = [
  "tangible_assets",
  "intangible_assets",
  "tangible_assets_capital_work_in_progress",
  "intangible_assets_under_development",
  "noncurrent_investments",
  "long_term_loans_and_advances",
  "other_noncurrent_assets",
  "inventories",
  "trade_receivables",
  "cash_and_bank_balances",
  "short_term_loans_and_advances",
  "other_current_assets",
];

const AddYearModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // ✅ 1. Year validation
    if (!formData.year) {
      alert("Please enter year");
      return;
    }

    // ✅ 2. At least one field validation
    const hasValue = Object.keys(formData).some(
      (key) => key !== "year" && formData[key] !== "",
    );

    if (!hasValue) {
      alert("Please enter at least one financial value");
      return;
    }

    // ✅ 3. Number validation
    for (let key in formData) {
      if (key !== "year" && isNaN(Number(formData[key]))) {
        alert("Please enter valid numbers only");
        return;
      }
    }

    // ✅ 4. Fix year format
    const formattedYear = formData.year.includes("-")
      ? formData.year
      : `${formData.year}-03-31`;

    const assets = {};

    assetFields.forEach((field) => {
      assets[field] = Number(formData[field]) || 0;
    });

    // ✅ 5. Calculations
    const netFixed =
      (assets.tangible_assets || 0) + (assets.intangible_assets || 0);

    const capitalWip =
      (assets.tangible_assets_capital_work_in_progress || 0) +
      (assets.intangible_assets_under_development || 0);

    const otherNonCurrent =
      (assets.noncurrent_investments || 0) +
      (assets.long_term_loans_and_advances || 0) +
      (assets.other_noncurrent_assets || 0);

    const currentAssets =
      (assets.inventories || 0) +
      (assets.trade_receivables || 0) +
      (assets.cash_and_bank_balances || 0) +
      (assets.short_term_loans_and_advances || 0) +
      (assets.other_current_assets || 0);

    const totalAssets = netFixed + capitalWip + otherNonCurrent + currentAssets;

    const newYear = {
      year: formattedYear,
      bs: {
        assets: {
          ...assets,
          given_assets_total: totalAssets,
        },
        subTotals: {
          net_fixed_assets: netFixed,
          capital_wip: capitalWip,
          total_other_non_current_assets: otherNonCurrent,
          total_current_assets: currentAssets,
        },
      },
    };

    // ✅ 6. Add + reset
    onAdd(newYear);
    setFormData({}); // 🔥 IMPORTANT FIX
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Add Financial Data</h2>

        <input
          name="year"
          placeholder="Enter Year (e.g. 2025)"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        {assetFields.map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field.replaceAll("_", " ")}
            className="w-full border p-2 mb-2"
            onChange={handleChange}
          />
        ))}

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={() => {
              setFormData({});
              onClose();
            }}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-purple-600 text-white rounded"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddYearModal;
