import Footer from "../Footer/page"
import Header from "../Header/page"
import Home from "../Home/page"
import Hotels from "../Hotels/page"


const HomePage = ( { currentUser }: any ) => {
  return (
    <div>
        <div className="header">
            <Header currentUser = {currentUser}/>
        </div>
        <div className="home">
            <Home />
        </div>
        <div className="nextpage">
            <Hotels />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default HomePage