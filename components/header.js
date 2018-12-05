import Link from 'next/link'

const openNav = () => document.getElementById("menu-mobile").style.width = "25rem";
const closeNav = () => document.getElementById("menu-mobile").style.width = "0";

const Navigation = () => (
    <div>
        <header className="global-nav">
            <div className="wrapper">
                <Link href="/"><div className="logo-header"><a className="logo-global"></a></div></Link>
                <nav>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/about"><a>Über mich</a></Link></li>
                        <li><Link href="/leistungen"><a>Leistungen</a></Link></li>
                        <li><Link href="/referenzen"><a>Referenzen</a></Link></li>
                        <li><Link href="/blog"><a>Blog</a></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <header className="mobile-global-nav">
            <nav className="menu" id="menu-mobile">
                <a onClick={closeNav} href="javascript:void(0)" className="menu-close menu-icons">
                    <i className="fas fa-times"></i>
                </a>
                <ul className="nav-mobile">
                    <a onClick={closeNav} href="javascript:void(0)" className="menu-close menu-icons">
                    </a>
                    <li>
                        <a onClick={closeNav} href="javascript:void(0)" className="menu-close menu-icons"></a>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">Über mich</a>
                    </li>
                    <li>
                        <a href="/leistungen">Leistungen</a>
                    </li>
                    <li>
                        <a href="/referenzen">Referenzen</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                </ul>
            </nav>
            <section className="items">
                <div className="wrapper">
                    <a onClick={openNav} href="javascript:void(0)" className="menu-icons">
                        <i className="fas fa-bars"></i>
                    </a>
                    <a href="/" className="logo-mobile"></a>
                </div>
            </section>
        </header>

    </div>
)

export default Navigation