import css from '../styles.sass'
import Link from 'next/link'
import NextHead from 'next/head'
import HeadTag from '../components/head'
import Header from '../components/header'
import BrandFoot from '../components/footer';
import CookieConsent from "react-cookie-consent";

const Index = () => (
    <div>
        <NextHead>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous"></script>
            <script src="https://cdn.uwe-barthel.net/landing/static/style/js/function.js"></script>
            <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossOrigin="anonymous"></script>


            <meta charSet="UTF-8"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="application-name" content="Private Website Tobias Voigt"></meta>
            <meta name="description" lang="de" content="Mit 13 Jahren begann mein Interesse für das Webdesign durch meinen Cousin. Schon damals faszinierten mich die Möglichkeiten des Webdesign.
                        Auch jetzt, mit 17 Jahren, arbeite ich leidenschaftlich an Webseiten mit HTML und CSS. Aktuell lerne ich die Sprachen React (mit NextJS), PHP und Java."></meta>
            <meta name="twitter:title" content="Tobias Voigt"></meta>
            <meta name="twitter:description" lang="de" content="Mit 13 Jahren begann mein Interesse für das Webdesign durch meinen Cousin. Schon damals faszinierten mich die Möglichkeiten des Webdesign.
                        Auch jetzt, mit 17 Jahren, arbeite ich leidenschaftlich an Webseiten mit HTML und CSS. Aktuell lerne ich die Sprachen React (mit NextJS), PHP und Java."></meta>
            <meta name="twitter:card" content="summary"></meta>
            <meta itemProp="name" content="Tobias Voigt"></meta>
            <meta itemProp="description" lang="de" content="Webdesigner"></meta>
            <meta property="og:url" content="https://www.tobias-voigt.net"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:description" lang="de" content="Website"></meta>
            <meta property="og:image" content="https://tobias-voigt.net/assets/img/favicons/android-icon-192x192.png"></meta>

            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet"></link>
        
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://www.tobias-voigt.net/static/style/img/favicons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://www.tobias-voigt.net/static/style/img/favicons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://www.tobias-voigt.net/static/style/img/favicons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://www.tobias-voigt.net/static/style/img/favicons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://www.tobias-voigt.net/static/style/img/favicons/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://www.tobias-voigt.net/static/style/img/favicons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://www.tobias-voigt.net/static/style/img/favicons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://www.tobias-voigt.net/static/style/img/favicons/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="https://www.tobias-voigt.net/static/style/img/favicons/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="https://www.tobias-voigt.net/static/style/img/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="https://www.tobias-voigt.net/static/style/img/favicons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="https://www.tobias-voigt.net/static/style/img/favicons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="https://www.tobias-voigt.net/static/style/img/favicons/favicon-128.png" sizes="128x128" />
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="https://www.tobias-voigt.net/static/style/img/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="https://www.tobias-voigt.net/static/style/img/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="https://www.tobias-voigt.net/static/style/img/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="https://www.tobias-voigt.net/static/style/img/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="https://www.tobias-voigt.net/static/style/img/favicons/mstile-310x310.png" />

            <title>Home - Webdesign Tobias Voigt</title>

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
        </NextHead>
        <CookieConsent
                location="bottom"
                buttonText="Alles klar!"
                cookieName="CookieConsent"
                style={{ background: "#12151F", fontSize: "1.4rem"}}
                buttonStyle={{ color: "#fffff", fontSize: "1.3rem" }}
                >
                Diese Website verwendet Cookies, um Dir das beste Erlebnis zu bieten.{" "}
                <span style={{ fontSize: "1.4rem" }}>
                Mehr erfahren
                </span>
            </CookieConsent>

        <Header />
        <section id="home-landing">
         <div className="wrapper">
                 <h1>Tobias Voigt</h1>
                 <h2>Hobby-Webdesigner</h2>
                 <Link href="#home"><a><i className="fas fa-chevron-circle-down"></i></a></Link>
             </div>
         </section>
         <section id="home">
            <div className="wrapper">
                <h3>Webdesign aus Faszination</h3>
                <hr />
                <div className="intro1">
                    <div className="home-img1"></div>
                    <div className="text">
                        <p>
                        Bereits mit 13 Jahren zeigte mir mein Cousin die Grundlagen des Webdesigns mit HTML. Schon zu dieser Zeit faszinierten mich die Möglichkeiten, die 
                        man allein mit HTML hatte. Bis zum heutigen Tag sammelte ich viel Erfahrung im Bereich des Designs.
                        Aktuell erstelle ich meine Webseiten mit HTML und CSS, bilde mich aber auch weiter zu anderen Sprachen. 
                        Einige Beispiele sind JavaScript, React – einschließlich NextJS – und PhP. Aktuell verwende ich den Editor VSCode von Microsoft.
                        </p>
                        <Link href="/about"><a><button>Mehr erfahren</button></a></Link>
                    </div>
                </div>
                <h3>Individuelle Gestaltung</h3>
                <hr />
                <div className="intro2">
                    <div className="text">
                        <p>
                        Ich biete Ihnen ein gut durchdachtes Konzept, Design und Gestaltung mit aktuellen Methoden und hohen Ansprüchen, sowie eine langfristige 
                        Betreuung. Meine Webprojekte basieren auf Sprachen wie HTML 5, CSS 3, React und vielen weiteren. 
                        </p>
                        <Link href="/leistungen"><a><button className="button bouncy">Mehr erfahren</button></a></Link>
                        </div>
                    <div className="home-img2"></div>
                </div>
                <h3 className="portfolio">Portfolio</h3>
                <hr />
                <div className="intro3">
                    <div className="home-img3"></div>
                    <div className="text">
                        <p>
                        Auf meiner <Link href="/referenzen"><a>Referenzen</a></Link> Seite erhalten Sie einen Überblick über meine bisherig abgeschlossenen und aktuell 
                        betreuten Projekte. Weitere Projekte werden folgen. Für nähere Informationen stehe ich Ihnen gern per <Link href="mailto:kontakt@tobias-voigt.net">
                        <a>E-Mail</a></Link> zur Verfügung.
                        </p>
                    </div>
                </div>
            </div>
         </section>
         <BrandFoot />
    </div>
)

export default Index