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
            <meta name="description" lang="de" content="In meinem Impressum erhalten Sie alle nötigen Informationen, um mich direkt kontaktieren zu können."></meta>
            <meta name="twitter:title" content="Impressum - Tobias Voigt"></meta>
            <meta name="twitter:description" lang="de" content="In meinem Impressum erhalten Sie alle nötigen Informationen, um mich direkt kontaktieren zu können."></meta>
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

            <title>Impressum - Webdesign Tobias Voigt</title>

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />
        </NextHead>

        <Header />

        <section id="impressum-landing">
            <div className="wrapper">
                <h1>Impressum</h1>
                <h2>Rechtliches</h2>
                <Link href="#impressum"><a><i className="fas fa-chevron-circle-down"></i></a></Link>
            </div>
        </section>

        <section id="impressum">
            <div className="wrapper">
                <h3>Impressum</h3>
                <hr />
                    <div className="impressum">
                        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                        <p>Tobias Voigt<br />
                        Pulsnitzer Str. 71<br />
                        01917 Kamenz</p>
                        <h2>Kontakt</h2>
                        <p>E-Mail: kontakt@tobias-voigt.net</p>
                        <h3>Haftung f&uuml;r Inhalte</h3> <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p> <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p> <h3>Haftung f&uuml;r Links</h3> <p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p> <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p> <h3>Urheberrecht</h3> <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p> <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                        <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
                    </div>
            </div>
        </section>

        <BrandFoot />
    </div>
)

export default Index