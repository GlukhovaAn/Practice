import Footer from "../components/Footer/Appp"
import Header from "../components/Header/App"
import "./Home.css";
export const Home = ()=>{
    return <>
    <Header/>
    <div className="intro"> 
        <h1 className="intro-titl">Amazing Discounts on Garden Products!
        </h1>
        <button className="intro-button">Check out</button>
    
        
    </div>
    <Footer/>

    </>
}