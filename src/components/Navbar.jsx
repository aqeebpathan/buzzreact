import getTodaysDate from "../utils/todaysDate";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="max-w-[63rem] mx-auto py-6 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl">buzzreact.</h1>
          <p className="text-sm sm:text-[16px]">{getTodaysDate()}</p>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
