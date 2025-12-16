import Logo from "@/components/navbar/Logo";
import {DarkMode} from "@/components/navbar/DarkMode";
import LinksDropdown from "@/components/navbar/LinksDropdown";
import {Heading} from "@radix-ui/themes";


function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo/>
        <Heading as="h1">React challenges</Heading>
        <DarkMode/>
        <LinksDropdown/>
      </div>
    </nav>
  );
}

export default Navbar;