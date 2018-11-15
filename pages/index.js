import css from '../styles.sass'
import Link from 'next/link'
import NextHead from 'next/head'
import HeadTag from '../components/head'
import Header from '../components/header'
import BrandFoot from '../components/footer';

const Index = () => (
    <div>
        <NextHead>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
            <script src="https://cdn.uwe-barthel.net/landing/static/style/js/function.js"></script>
            <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script>

            <meta charset="UTF-8"></meta>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="application-name" content="Private Website Tobias Voigt"></meta>
            <meta name="description" lang="de" content="Mit 13 Jahren begann mein Interesse für das Webdesign durch meinen Cousin. Schon damals faszinierten mich die Möglichkeiten des Webdesign.
                        Auch jetzt, mit 17 Jahren, arbeite ich leidenschaftlich an Webseiten mit HTML und CSS. Aktuell lerne ich die Sprachen React (mit NextJS), PHP und Java."></meta>
            <meta name="twitter:title" content="Tobias Voigt"></meta>
            <meta name="twitter:description" lang="de" content="Mit 13 Jahren begann mein Interesse für das Webdesign durch meinen Cousin. Schon damals faszinierten mich die Möglichkeiten des Webdesign.
                        Auch jetzt, mit 17 Jahren, arbeite ich leidenschaftlich an Webseiten mit HTML und CSS. Aktuell lerne ich die Sprachen React (mit NextJS), PHP und Java."></meta>
            <meta name="twitter:card" content="summary"></meta>
            <meta itemprop="name" content="Tobias Voigt"></meta>
            <meta itemprop="description" lang="de" content="Webdesigner"></meta>
            <meta property="og:url" content="https://www.tobias-voigt.net"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:description" lang="de" content="Website"></meta>
            <meta property="og:image" content="https://tobias-voigt.net/assets/img/favicons/android-icon-192x192.png"></meta>

            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet"></link>
        
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://tobias-voigt.net/assets/style/img/favicon/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://tobias-voigt.net/assets/style/img/favicon/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://tobias-voigt.net/assets/style/img/favicon/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://tobias-voigt.net/assets/style/img/favicon/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://tobias-voigt.net/assets/style/img/favicon/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://tobias-voigt.net/assets/style/img/favicon/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://tobias-voigt.net/assets/style/img/favicon/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://tobias-voigt.net/assets/style/img/favicon/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="https://tobias-voigt.net/assets/style/img/favicon/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="https://tobias-voigt.net/assets/style/img/favicon/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="https://tobias-voigt.net/assets/style/img/favicon/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="https://tobias-voigt.net/assets/style/img/favicon/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="https://tobias-voigt.net/assets/style/img/favicon/favicon-128.png" sizes="128x128" />
            <meta name="application-name" content="&nbsp;"/>
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="https://tobias-voigt.net/assets/style/img/favicon/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="https://tobias-voigt.net/assets/style/img/favicon/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="https://tobias-voigt.net/assets/style/img/favicon/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="https://tobias-voigt.net/assets/style/img/favicon/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="https://tobias-voigt.net/assets/style/img/favicon/mstile-310x310.png" />

            <title>Home - Tobias Voigt</title>

            <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />

            <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
            <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"></script>
        </NextHead>
        <Header />
        <section id="home-landing">
         <div className="wrapper">
                 <h1>Tobias Voigt</h1>
                 <h2>"Mein Motto ist beschissen"</h2>
                 <Link href="#intro"><a><i className="fas fa-chevron-circle-down"></i></a></Link>
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
                            Mit 13 Jahren begann mein Interesse für das Webdesign durch meinen Cousin. Schon damals faszinierten mich die Möglichkeiten des Webdesign.
                            Auch jetzt, mit 17 Jahren, arbeite ich leidenschaftlich an Webseiten mit HTML und CSS. Aktuell lerne ich die Sprachen React (mit NextJS), PHP und Java.
                        </p>
                        <Link href="/about"><a><button>Mehr erfahren</button></a></Link>
                    </div>
                </div>
                <h3>Individuelle Gestaltung</h3>
                <hr />
                <div className="intro2">
                    <div className="text">
                        <p>
                            Auf Anfrage erstelle ich Ihnen nach Ihren Wünschen eine Website für Ihre Firma, Produkt oder sogar Sie selbst als Person. Dabei arbeite ich immer
                            mit Ihnen zusammen, um Ihnen das beste Endprodukt liefern zu können.
                        </p>
                        <Link href="/leistungen"><a><button>Mehr erfahren</button></a></Link>
                        </div>
                    <div className="home-img2"></div>
                </div>
                <h3 className="portfolio">Portfolio</h3>
                <hr />
                <div className="intro3">
                    <div className="home-img3"></div>
                    <div className="text">
                        <p>
                        Um einen besseren Überblick über meine Referenzen zu erhalten, besuchen Sie meine <Link href="/referenzen"><a>Referenzen</a></Link>
                        Seite. Für nähere Informationen stehe ich Ihnen gern per <Link href="mailto:kontakt@tobias-voigt.net"><a>E-Mail</a></Link> oder <Link href="/kontakt">
                        <a>Kontaktformular</a></Link> zur Verfügung. Auf Wunsch erstelle ich Ihnen auch gern kostenlos einen Entwurf für Ihre Website.
                        </p>
                    </div>
                </div>
            </div>
         </section>
         <BrandFoot />
    </div>
)

export default Index