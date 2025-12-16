import Logo from "@/components/navbar/Logo";
import {DarkMode} from "@/components/navbar/DarkMode";
import LinksDropdown from "@/components/navbar/LinksDropdown";


function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo/>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          React challenges
        </h1>

        <DarkMode/>

        <LinksDropdown/>
      </div>
    </nav>
  );
}

export default Navbar;