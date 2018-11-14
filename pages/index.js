import css from '../styles.sass'
import Link from 'next/link'
import NextHead from 'next/head'
import HeadTag from '../components/head'
import Header from '../components/header'
import BrandFoot from './../components/footer';

const Index = () => (
    <div>
        <NextHead>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
            <script src="https://cdn.uwe-barthel.net/landing/static/style/js/function.js"></script>
            <meta charSet="UTF-8" />
            <title>Home - Tobias Voigt</title>
            <meta name="description" content="Der Schützenverein Hohenfichte schießt mit historischen und modernen Armbrüsten. Informationen über den Verein, das Vereinsleben, Vorstand und Satzung. Höhepunkt ist das alle 2 Jahre stattfindende Schützen- und Brückenfest neben der 400-Jahre alten Holzbrücke in Hohenfichte." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/favicon-128.png" sizes="128x128" />
            <meta name="msapplication-TileColor" content="#D6D6D6" />
            <meta name="msapplication-TileImage" content="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/mstile-310x310.png" />
            <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script>
        </NextHead>
        <Header />
        <section id="home-landing">
         <div className="wrapper">
                 <h1>Tobias Voigt</h1>
                 <h2>
                     <a href="" className="typewrite" data-period="2000" data-type='[ "Mein Motto ist beschissen", "Mein Motto ist immer noch beschissen" ]'>
                        <span className="wrap"></span>
                     </a>
                 </h2>
                 <Link href="#intro"><a><i class="fas fa-chevron-circle-down"></i></a></Link>
             </div>
         </section>
         <section id="home">
            <div className="wrapper">
                <h3>Webdesign aus Faszination</h3>
                <hr />
                <div className="intro1">
                    <div className="home-img1"></div>
                    <p>
                        Mit 13 Jahren begann mein Interesse für das Webdesign durch meinen Cousin. Schon damals faszinierten mich die Möglichkeiten des Webdesign.
                        Auch jetzt, mit 17 Jahren, arbeite ich leidenschaftlich an Webseiten mit HTML und CSS. Aktuell lerne ich die Sprachen React (mit NextJS), PHP und Java.
                    </p>
                    <Link href="/about"><a><button>Mehr erfahren</button></a></Link>
                </div>
                <h3>Individuelle Gestaltung</h3>
                <hr />
                <div className="intro2">
                    <p>
                        Auf Anfrage erstelle ich Ihnen nach Ihren Wünschen eine Website für Ihre Firma, Produkt oder sogar Sie selbst als Person. Dabei arbeite ich immer
                        mit Ihnen zusammen, um Ihnen das beste Endprodukt liefern zu können.
                    </p>
                    <Link href="/leistungen"><a><button>Mehr erfahren</button></a></Link>
                    <div className="home-img2"></div>
                </div>
                <h3>Portfolio</h3>
                <hr />
                <div className="intro3">
                    <div className="home-img3"></div>
                    <p>
                        Um einen besseren Überblick über meine Referenzen zu erhalten, besuchen Sie meine <Link href="/referenzen"><a>Referenzen</a></Link>
                        Seite. Für nähere Informationen stehe ich Ihnen gern per <Link href="mailto:kontakt@tobias-voigt.net"><a>E-Mail</a></Link> oder <Link href="/kontakt">
                        <a>Kontaktformular</a></Link> zur Verfügung. Auf Wunsch erstelle ich Ihnen auch gern kostenlos einen Entwurf für Ihre Website.
                    </p>
                </div>
            </div>
         </section>
         <BrandFoot />
    </div>
)

export default Index