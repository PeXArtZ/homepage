import css from '../styles.sass'
import Link from 'next/link'
import NextHead from 'next/head'
import HeadTag from '../components/head'
import Header from '../components/header'
import BrandFoot from '../components/footer'

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
            <meta name="description" lang="de" content="Auf der Kontaktseite finden Sie Möglichkeiten, mich zu kontaktieren!"></meta>
            <meta name="twitter:title" content="Impressum - Tobias Voigt"></meta>
            <meta name="twitter:description" lang="de" content="Auf der Kontaktseite finden Sie Möglichkeiten, mich zu kontaktieren!"></meta>
            <meta name="twitter:card" content="summary"></meta>
            <meta itemProp="name" content="Tobias Voigt"></meta>
            <meta itemProp="description" lang="de" content="Webdesigner"></meta>
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

            <title>Kontakt - Webdesign Tobias Voigt</title>

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />
        </NextHead>

        <Header />

        <section id="kontakt-landing">
            <div className="wrapper">
                <h1>Kontakt</h1>
                <h2>Möglichkeiten mich zu kontaktieren</h2>
                <Link href="#kontakt"><a><i className="fas fa-chevron-circle-down"></i></a></Link>
            </div>
        </section>

        <section id="kontakt">
            <div className="wrapper">
                <h3>Kontakt</h3>
                <hr />
                <div className="kontakt">
                    <p>Tobias Voigt<br />
                    Pulsnitzer Str. 71<br />
                    01917 Kamenz<br />
                    E-Mail: <Link href="mailto:kontakt@tobias-voigt.net"><a>kontakt@tobias-voigt.net</a></Link></p>
                </div>
                <div className="iframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.1496811407989!2d14.089515729275673!3d51.263297298724716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4708495d0ecd0d47%3A0xba8b7c2cfbdf3ea8!2sPulsnitzer+Str.+71%2C+01917+Kamenz!5e0!3m2!1sde!2sde!4v1543100976418"></iframe>
                </div>
            </div>
        </section>

        <BrandFoot />
    </div>
)

export default Index