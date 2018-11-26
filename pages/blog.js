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
            <meta name="description" lang="de" content="In meinem Blog erhalten Sie die neusten Updates zu allen meiner Webseiten."></meta>
            <meta name="twitter:title" content="Blog - Tobias Voigt"></meta>
            <meta name="twitter:description" lang="de" content="In meinem Blog erhalten Sie die neusten Updates zu allen meiner Webseiten."></meta>
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

            <title>Blog - Webdesign Tobias Voigt</title>

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />

        </NextHead>

        <Header />

        <section id="blog-landing">
            <div className="wrapper">
                <h1>Blog</h1>
                <h2>Neueste Updates zu allen Projekten!</h2>
                <Link href="#blog"><a><i className="fas fa-chevron-circle-down"></i></a></Link>
            </div>
        </section>

        <section id="blog">
            <div className="wrapper">
                <h3>Mein Blog</h3>
                <hr />
                <Link href="/post-example"><a>
                    <div className="blog-post">
                    <div className="blog-post-thumbnail"></div>
                    <div className="blog-post-text">
                        <h3>Willkommen!</h3>
                        <p>
                            Herzlich Willkommen auf meinem Blog. Hier werden Sie die aktuellsten Updates zu jeder meiner Websites nachlesen können.
                        </p>
                    </div>
                </div></a></Link>
                <Link href="/post-example"><a>
                    <div className="blog-post">
                    <div className="blog-post-thumbnail"></div>
                    <div className="blog-post-text">
                        <h3>Ich bin ein Blog Post</h3>
                        <p>
                            Lorem ipsum simsalabim du bist verzaubert hehe easy
                        </p>
                    </div>
                </div></a></Link>
                <Link href="/post-example"><a>
                    <div className="blog-post">
                    <div className="blog-post-thumbnail"></div>
                    <div className="blog-post-text">
                        <h3>Ich bin auch ein Blog Post</h3>
                        <p>
                            Lorem ipsum simsalabim du bist verzaubert hehe easy
                        </p>
                    </div>
                </div></a></Link>
                <Link href="/post-example"><a>
                    <div className="blog-post">
                    <div className="blog-post-thumbnail"></div>
                    <div className="blog-post-text">
                        <h3>Ich bin ein trauriger Blog Post</h3>
                        <p>
                            Lorem ipsum simsalabim du bist verzaubert hehe easy
                        </p>
                    </div>
                </div></a></Link>
                <div className="expand">
                    <Link href="/blog-expand"><a><button>Mehr anzeigen</button></a></Link>
                </div>
            </div>
        </section>

        <BrandFoot />

    </div>
)

export default Index