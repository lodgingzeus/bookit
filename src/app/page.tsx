/* eslint-disable react/no-unescaped-entities */
import Home from './home/page';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';


export default function Root() {

  return (
  <div>
    <div className="header">
      <Header />
    </div>
    <div className="home">
      <Home />
    </div>
    <div className="nextpage">
    
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
  );
}