import Link from 'next/link';

function NavbarItem({ title, param }) {
  return (
    <div>
      <Link href={`/?genre=${param}`}>{title}</Link>
    </div>
  );
}

export default NavbarItem;
