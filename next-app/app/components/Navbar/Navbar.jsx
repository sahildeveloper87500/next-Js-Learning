import Link from 'next/link';

function Header() {
    return (
        <div>
            <div>Navbar</div>
            <div>
                <Link href="/">homepage</Link>
                <Link href="/About">about</Link>
                <Link href="/Contact">Contact</Link>
            </div>
        </div>
    );
}

export default Header;
