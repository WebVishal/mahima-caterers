import AboutUs from "@/components/shared/AboutUs";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Gallery from "@/components/shared/Gallery";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";

export default function Home() {
    return (
        <div>
            <Header />
            <HeroSection/>
            <AboutUs/>
            <Gallery/>
            <Contact/>
            <Footer/>
        </div>
    );
}
