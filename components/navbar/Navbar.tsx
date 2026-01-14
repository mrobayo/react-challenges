import Logo from '@/components/navbar/Logo';
import { DarkMode } from '@/components/navbar/DarkMode';
import LinksDropdown from '@/components/navbar/LinksDropdown';
import { Flex, Heading } from '@radix-ui/themes';

function Navbar() {
  return (
    <nav className="border-b bg-slate-200 dark:bg-slate-800">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Flex direction="row" align="center" gap="4" className="shrink-0">
          <Logo />
          <Heading as="h1">React challenges</Heading>
        </Flex>
        <Flex direction="row" gap="4" className="hidden sm:flex">
          <DarkMode />
          <LinksDropdown />
        </Flex>
      </div>
    </nav>
  );
}

export default Navbar;
