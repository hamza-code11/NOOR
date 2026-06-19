import Hero from "../../sections/HeroSlider";
import CategoryCards from "../../sections/CategoryCards";
import JourneySection from "../../sections/JourneySection";
import MensBanner from "../../sections/MensBanner";
import MensWearSection from "../../sections/MensWearSection";
import JewelryBanner from "../../sections/JewelryBanner";
import JewelrySection from "../../sections/JewelrySection";
import LadiesWearBanner from "../../sections/LadiesWearBanner";
import LadiesWearSection from "../../sections/LadiesWearSection";
import ShoesSection from "../../sections/ShoesSection";
import PerfumeSection from "../../sections/PerfumeSection";
import MoreCategoriesSection from "../../sections/MoreCategoriesSection";
import BlogSection from "../../sections/BlogSection";


export default function Home() {
    return (
        <>
            <Hero />
            <CategoryCards />           
            <LadiesWearBanner />
            <LadiesWearSection />
            <MensBanner />
            <MensWearSection />
            <PerfumeSection />
            <JewelryBanner />
            <JewelrySection />
            <ShoesSection />
            <JourneySection />
            <MoreCategoriesSection />
            <BlogSection />
        </>
    );
}