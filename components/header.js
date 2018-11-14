import Link from 'next/link'

const Navigation = () => (
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
)

export default Navigation