"use client"
import Hero from "./(landing_pages)/_components/Hero";
import About from "./(landing_pages)/_components/About";
import TopCompanies from "./(landing_pages)/_components/TopCompanies";
import Reviews from "./(landing_pages)/_components/Reviews";
import Newsletter from "../components/common/Newsletter";
// Newsletter
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/constants/SmoothScroll";

export default function Home() {
  // const { isLoading, data: Jobs } = useGetAllJobQuery("")
  // console.log(Jobs)
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <About />
      {/* <DreamJob isLoading={isLoading} job={Jobs?.job} /> */}
      <TopCompanies />
      <Reviews />
      <Newsletter /> 
      <Footer />
    </SmoothScroll>
  );
}
