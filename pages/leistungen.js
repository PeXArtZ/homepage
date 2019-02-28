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
            <meta name="description" lang="de" content="Jedes Web-Projekt basiert auf einer durchdachten Konzeption in Adobe Xd, in welchem Sie einen Einblick erhalten, wie Ihre Website später einmal aussehen könnte. Auf Anfrage entwerfe ich Ihnen, mit nötigen Infos, kostenlos einen Entwurf."></meta>
            <meta name="twitter:title" content="Leistungen - Tobias Voigt"></meta>
            <meta name="twitter:description" lang="de" content="Jedes Web-Projekt basiert auf einer durchdachten Konzeption in Adobe Xd, in welchem Sie einen Einblick erhalten, wie Ihre Website später einmal aussehen könnte. Auf Anfrage entwerfe ich Ihnen, mit nötigen Infos, kostenlos einen Entwurf."></meta>
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

            <title>Leistungen - Webdesign Tobias Voigt</title>

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />

        </NextHead>
        <Header />

        <section id="leistungen-landing">
            <div className="wrapper">
                <h1>Leistungen</h1>
                <h2>Individuell, für Sie!</h2>
                <Link href="#leistungen"><a><i className="fas fa-chevron-circle-down"></i></a></Link>
            </div>
        </section>

        <section id="leistungen">
            <div className="wrapper">
                <h3>Was ich Ihnen biete</h3>
                <hr />
                <div className="leistungen-box">
                    <div className="leistungen-box-line-1">
                        <div className="leistungen-box-concept">
                            <div className="leistungen-box-concept-caption">
                                <i className="far fa-lightbulb"></i>
                                <p>Konzeption</p>
                            </div>
                            <p className="concept-text">
                                Jedes Web-Projekt basiert auf einer durchdachten Konzeption in Adobe XD, in welchem Sie einen Einblick erhalten, wie Ihre Website
                                später einmal aussehen könnte. Auf Anfrage entwerfe ich Ihnen, mit allen nötigen Infos, kostenlos einen Entwurf.
                            </p>
                        </div>
                        <div className="leistungen-box-design">
                            <div className="leistungen-box-design-caption">
                                <i class="far fa-image"></i>
                                <p>Design & Gestaltung</p>
                            </div>
                            <p>
                                Bei meinen Projekten achte ich stets auf aktuelle Methoden und hohe Ansprüche, um Ihren Besuchern den angenehmsten Besuch zu bieten.
                                Dabei orientiere ich mich stets an den vorher festgelegten Entwurf.
                            </p>
                        </div>
                    </div>
                    <div className="leistungen-box-line-2">
                        <div className="leistungen-box-support">
                            <div className="leistungen-box-support-caption">
                                <i class="far fa-comments"></i>
                                <p>Langfristige Betreuung</p>
                            </div>
                            <p>
                                Nach Abschluss des Projektes biete ich Ihnen eine Garantie von 2 Jahren an und die Möglichkeit, Ihnen nach diesen 2 Jahren eine komplett neue
                                Website, nach neuen Standards, zu entwerfen.
                            </p>
                        </div>
                    </div>                
                </div>
                <div className="leistungen-programming-language">
                    <div className="leistungen-programming-language-line-1">
                        <div className="leistungen-programming-language-line-1-html">
                            <div className="leistungen-programming-language-line-1-html-img"></div>
                            <h3>HTML 5</h3>
                        </div>
                        <div className="leistungen-programming-language-line-1-css">
                            <div className="leistungen-programming-language-line-1-css-img"></div>
                            <h3>CSS 3</h3>
                        </div>
                        <div className="leistungen-programming-language-line-1-nextjs">
                            <div className="leistungen-programming-language-line-1-nextjs-img"></div>
                            <h3>NextJS</h3>
                        </div>
                        <div className="leistungen-programming-language-line-1-sass">
                            <div className="leistungen-programming-language-line-1-sass-img"></div>
                            <h3>Sass</h3>
                        </div>
                    </div>
                    <div className="leistungen-programming-language-line-2">
                        <div className="leistungen-programming-language-line-2-adobe">
                            <div className="leistungen-programming-language-line-2-adobe-img"></div>
                            <h3>Adobe</h3>
                        </div>
                        <div className="leistungen-programming-language-line-2-react">
                            <div className="leistungen-programming-language-line-2-react-img"></div>
                            <h3>React</h3>
                        </div>
                        <div className="leistungen-programming-language-line-2-mysql">
                            <div className="leistungen-programming-language-line-2-mysql-img"></div>
                            <h3>MySQL</h3>
                        </div>
                        <div className="leistungen-programming-language-line-2-jquery">
                            <div className="leistungen-programming-language-line-2-jquery-img"></div>
                            <h3>jQuery</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <BrandFoot />

    </div>
)

export default Index