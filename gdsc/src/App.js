import DomainSplitPage from "./Pages/DomainSplit/DomainSplitPage";
import Navbar from "./components/Navbar/Navbar";
import HeroPage from "./Pages/Hero/HeroPage";
import EventInfoPage from "./Pages/EventInfo/EventInfoPage";
import MarketingPage from "./Pages/Marketing/marketingPage";
import Faq from "./Pages/FAQ/Faq";
function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <EventInfoPage />
      <DomainSplitPage />
      <MarketingPage />
      <Faq/>
    </>
  );
}

export default App;
