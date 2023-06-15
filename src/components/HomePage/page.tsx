import Footer from "../Footer/page";
import Header from "../Header/page";
import Home from "../Home/page";
import Hotels from "../Hotels/page";
import About from "../About/page";


function HomePage({ currentUser, hotelList }: any ) {
    return (
        <>
        <div>            
            <div className="home">
                <Home />
            </div>
            <div className="header">
                <Header currentUser={currentUser} />
            </div> 
            <div className="hotels">
                <Hotels hotelList={hotelList} />
            </div>
            <div className="About">
                <About />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
        </>
    )
}

export default HomePage