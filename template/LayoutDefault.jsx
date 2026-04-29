import Footer from "../src/components/Footer"
import Header from "../src/components/Header"

function LayoutDefault ({children}) {
  return (
  <div className='layout-wrapper'>
    <Header />
      {children}
    <Footer />
  </div>
  )
}

export default LayoutDefault