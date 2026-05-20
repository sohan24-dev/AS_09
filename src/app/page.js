import Banner from "@/components/Banner";
import HomeideaPage from "@/components/HomeideaPage";
import { CustomStyles } from "@/components/IdeaExtrInfo";
import PopularCategories from "@/components/PopularCategories";
import WhyIdeaVault from "@/components/WhyIdeaVault";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <HomeideaPage></HomeideaPage>
      <WhyIdeaVault></WhyIdeaVault>
      <PopularCategories></PopularCategories>
      <CustomStyles></CustomStyles>
    </div>
  );
}
