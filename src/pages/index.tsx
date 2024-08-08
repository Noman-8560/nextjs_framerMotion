// pages/index.tsx
import type { NextPage } from "next";
import ImageCarouselModal from "../components/ImageCarouselModal";

const Home: NextPage = () => {
  return (
    <div>
      <ImageCarouselModal />
    </div>
  );
};

export default Home;
