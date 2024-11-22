"use client"
import Hero from "./(landing_pages)/_components/Hero";
import About from "./(landing_pages)/_components/About";
import TopCompanies from "./(landing_pages)/_components/TopCompanies";
import Reviews from "./(landing_pages)/_components/Reviews";
import Community from "./(landing_pages)/_components/Community";
// import WhyChoose from "./(landing_pages)/_components/WhyChoose";
import Newsletter from "../components/common/Newsletter";
// Newsletter
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/constants/SmoothScroll";
// import { useGetAllJobQuery } from "@/services/conversationApi";

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
      <Community />
      {/* <WhyChoose /> */}k
      <Reviews />
      <Newsletter />
      <Footer />
    </SmoothScroll>
  );
}
