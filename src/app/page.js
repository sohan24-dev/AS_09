import Banner from "@/components/Banner";
import HomeideaPage from "@/components/HomeideaPage";
import PopularCategories from "@/components/PopularCategories";
import WhyIdeaVault from "@/components/WhyIdeaVault";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <HomeideaPage></HomeideaPage>
      <WhyIdeaVault></WhyIdeaVault>
      <PopularCategories></PopularCategories>
    </div>
  );
}
