import Banner from "@/components/Banner";
import PopularCategories from "@/components/PopularCategories";
import WhyIdeaVault from "@/components/WhyIdeaVault";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyIdeaVault></WhyIdeaVault>
      <PopularCategories></PopularCategories>
    </div>
  );
}
