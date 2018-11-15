import Link from 'next/link'

const BrandFoot = () => (
    <footer>
        <section className="home-nav">
            <div className="wrapper">
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
        </section>
        <hr />
        <section className="legal-nav">
            <div className="wrapper">
                <div className="social-icons">
                    <Link href="https://www.youtube.com/pexgraphics"><a><i class="fab fa-youtube"></i></a></Link>
                    <Link href="https://www.twitter.com/pexfx_"><a><i class="fab fa-twitter"></i></a></Link>
                    <Link href="https://www.instagram.com/tobi.css"><a><i class="fab fa-instagram"></i></a></Link>
                    <Link href="ts3server://frostiqz.de?"><a><i class="fab fa-teamspeak"></i></a></Link>
                </div>
                <div className="info-sites">
                <Link href="/kontakt"><a>Kontakt</a></Link>
                <Link href="/datenschutz"><a>Datenschutzerklärung</a></Link>
                <Link href="/impressum"><a>Impressum</a></Link>
                </div>
                <div className="copyright">
                    ©2018 Tobias Voigt
                </div>
            </div>
        </section>
    </footer>
)

export default BrandFoot