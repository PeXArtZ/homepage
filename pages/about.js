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
            <meta name="description" lang="de" content="Ich bin ein 17-jähriger Schüler mit einer Leidenschaft zum Webdesign. Meine Webseiten erstelle ich mit HTML und CSS, lerne aber auch JavaScript, React - mit NextJS - und PhP."></meta>
            <meta name="twitter:title" content="Über mich - Tobias Voigt"></meta>
            <meta name="twitter:description" lang="de" content="Ich bin ein 17-jähriger Schüler mit einer Leidenschaft zum Webdesign. Meine Webseiten erstelle ich mit HTML und CSS, lerne aber auch JavaScript, React - mit NextJS - und PhP."></meta>
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

            <title>Über mich - Tobias Voigt</title>

            <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />

            <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
            <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"></script>
        </NextHead>
        <Header />

        <section id="about-landing">
            <div className="wrapper">
                <h1>Über mich</h1>
                <h2>"Mein Motto ist beschissen"</h2>
                <Link href="#about"><a><i className="fas fa-chevron-circle-down"></i></a></Link>
            </div>
        </section>

        <section id="about">
            <div className="wrapper">
                <h3>Ich als Person</h3>
                <hr />
                <div className="introduction">
                    <div className="introduction-img"></div>
                    <div className="text">
                        <p>
                            Ich bin ein 17-jähriger Schüler mit einer Leidenschaft zum Design. Derzeitig absolviere ich die Fachoberschule in der Richtung Wirtschaft und Verwaltung
                            und möchte danach eine Ausbildung zum Mediengestalter machen.
                        </p>
                        <p>
                            Aber wie bin ich zum Webdesigner geworden? Bereits mit 13 Jahren zeigte mir mein Cousin
                            die Grundlagen des Webdesigns mit HTML. Schon zu dieser Zeit faszinierten mich die Möglichkeiten, die man allein mit HTML hatte. Bis zum heutigen
                            Tag sammelte ich viel Erfahrung im Bereich des Designs. Ich besaß einen YouTube-Kanal mit etwa 1500 Abonnenten, auf welchem ich am Anfang Grafikdesign
                            mit Photoshop, danach allerdings 2 Jahre lang Video- bzw. Motiondesign mit Premiere Pro bzw. Cinema4D und AfterEffects betrieben habe. Diese gesammelten Erfahrungen 
                            nutze ich auch in zukünftigen als auch in vergangenen Webprojekten um das beste Endergebnis liefern zu können. 
                        </p>
                        <p>
                            Aktuell erstelle ich meine Webseiten mit HTML und CSS, bilde mich aber auch weiter zu anderen Sprachen. Einige Beispiele sind JavaScript, React -
                            einschließlich NextJS - und PhP. Aktuell verwende ich den Editor Visual Studio Code von Microsoft.
                        </p>
                    </div>
                </div>
                <h3>Meine Erfahrung</h3>
                <hr />
                <div className="experience">
                    <div className="experience-img"></div>
                    <div className="experience-text">
                        <div className="experience-text-line-1">
                            <i class="fas fa-code"></i>
                            1 Jahr Erfahrung im Webdesign
                        </div>
                        <div className="experience-text-line-2">
                            <i class="fab fa-youtube"></i>
                            4,5 Jahre YouTube Erfahrung
                        </div>
                        <div className="experience-text-line-3">
                            <i class="fas fa-paint-brush"></i>
                            1 Jahr Erfahrung im Grafikdesign
                        </div>
                        <div className="experience-text-line-4">
                            <i class="far fa-file-video"></i>
                            2 Jahre Erfahrung im Video- und Motiondesign
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <BrandFoot />

    </div>
)

export default Index