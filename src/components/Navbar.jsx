const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-purple-900 text-white flex items-center px-4 py-3">
      {/* MENU ICON */}
      <button onClick={toggleSidebar} className="mr-4 text-xl">
        ☰
      </button>

      {/* LOGO + NAME */}
      <div className="flex items-center gap-2 font-semibold">
        <div className="bg-white p-1 rounded flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQGUI228Xg4MUg/company-logo_200_200/B56ZoRWuJlKAAI-/0/1761227760677/finoscale_solutions_private_limited_logo?e=1776902400&v=beta&t=O3g5MROBZqr-kTuoND872ZUKkPNfHDLJmLhckQncMSI"
            alt="logo"
            className="h-6 w-6 object-contain"
          />
        </div>

        <span className="text-sm font-semibold tracking-wide">finoscale</span>
      </div>
    </div>
  );
};

export default Navbar;
