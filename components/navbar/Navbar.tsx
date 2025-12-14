import Logo from "@/components/navbar/Logo";
import {DarkMode} from "@/components/navbar/DarkMode";


function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo />
        React challenges
        <DarkMode />
      </div>
    </nav>
  );
}
export default Navbar;