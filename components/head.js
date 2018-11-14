import NProgress from 'nprogress'
import Router from 'next/router'
import Index from '../pages/index.js'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default Index