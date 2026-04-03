const FinancialTable = ({ data }) => {
  const formatNumber = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? "0" : num.toLocaleString("en-IN");
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100 font-semibold">
            <th className="px-4 py-3 border text-left">Particulars</th>

            {data.map((item, i) => (
              <th
                key={i}
                className="px-4 py-3 border text-right align-middle font-semibold"
              >
                {new Date(item.year)
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* ASSETS HEADER */}
          <tr className="bg-gray-50 font-semibold">
            <td className="px-4 py-3 border">Assets</td>
            {data.map((_, i) => (
              <td key={i} className="border"></td>
            ))}
          </tr>

          {/* NET FIXED */}
          <tr className="font-semibold">
            <td className="px-4 py-3 border pl-4">Net Fixed Assets</td>
            {data.map((_, i) => (
              <td key={i} className="border"></td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-10">Tangible Assets</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.tangible_assets)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-10">Intangible Assets</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.intangible_assets)}
              </td>
            ))}
          </tr>

          <tr className="font-medium">
            <td className="px-4 py-3 border pl-10">Total Net Fixed Assets</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.subTotals.net_fixed_assets)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-4">Capital Work In Progress</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.subTotals.capital_wip)}
              </td>
            ))}
          </tr>

          {/* OTHER NON CURRENT */}
          <tr className="font-semibold">
            <td className="px-4 py-3 border pl-4">Other Non Current Assets</td>
            {data.map((_, i) => (
              <td key={i} className="border"></td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-10">Non Current Investments</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.noncurrent_investments)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-10">
              Long Term Loans & Advances
            </td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.long_term_loans_and_advances)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-10">Other Non Current Assets</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.other_noncurrent_assets)}
              </td>
            ))}
          </tr>

          <tr className="font-medium">
            <td className="px-4 py-3 border pl-10">
              Total Other Non Current Assets
            </td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.subTotals.total_other_non_current_assets)}
              </td>
            ))}
          </tr>

          {/* CURRENT ASSETS */}
          <tr className="font-semibold">
            <td className="px-4 py-3 border pl-4">Current Assets</td>
            {data.map((_, i) => (
              <td key={i} className="border"></td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-10">Inventories</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.inventories)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-10">Trade Receivables</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.trade_receivables)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-10">Cash & Bank Balance</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.cash_and_bank_balances)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-10">Short Term Loans</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.short_term_loans_and_advances)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-3 border pl-10">Other Current Assets</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.other_current_assets)}
              </td>
            ))}
          </tr>

          <tr className="font-medium">
            <td className="px-4 py-3 border pl-10">Total Current Assets</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.subTotals.total_current_assets)}
              </td>
            ))}
          </tr>

          {/* TOTAL */}
          <tr className="bg-gray-200 font-bold">
            <td className="px-4 py-3 border">Total Assets</td>
            {data.map((item, i) => (
              <td key={i} className="px-4 py-3 border text-right">
                {formatNumber(item.bs.assets.given_assets_total)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;
