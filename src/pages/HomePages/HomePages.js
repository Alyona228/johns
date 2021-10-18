import Footer from '../../components/Footer/Footer.js'
import Header from '../../components/Header/Header.js'
import Portfolio from '../../components/Portfolio/Portfolio.js'
import Posts from '../../components//Posts/Posts.js'
import Works from '../../components/Works/Works.js'
import '../HomePages/HomePages.css'

function HomePages() {
  return (
    <>
      <Header />
      <Portfolio />
      <Posts />
      <Works className='works_pages' worksNumber={1} />
      <Footer />
    </>
  )
}
export default HomePages
