import Link from 'next/link';
import { RiCompass3Line } from "react-icons/ri";

function Logo() {
  return (
      <Link href='/'>
        <RiCompass3Line className='w-10 h-10' />
      </Link>
  );
}
export default Logo;