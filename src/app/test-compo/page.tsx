import CollegeExploreCard from "@/components/General/CollegeCard";
import BDSCard from "@/components/General/CoursesCard";
import Finder from "@/components/General/Finder";
import RegistrationForm from "@/components/General/Registration";
import SearchBar from "@/components/General/Search";
import SegmentedControl from "@/components/General/SegemetedControl";
import Demo from "@/components/General/SegemetedControl";
import EligiblityCard from "@/components/Main/Eligiblity/Card";
import BlogCard from "@/components/Main/LandingCards/Blog";
import ExploreCard from "@/components/Main/LandingCards/ExploreCard";
import Newsletter from "@/components/Main/LandingCards/NewsLetter";
import SponsorsCarousel from "@/components/Main/LandingCards/SponsorsCarousel";
import GoogleSheetDataFetcher from "@/components/Test/SheetFetcher";

const smapleData = {
  title: "MBBS",
  duration: "4½ + 1 year",
  mode: "On Campus",
  eligibility: "10+2",
  exam: "NEET",
  fee: "₹3L - 7L",
  colleges: "27+ Colleges",
};

const smapleBlogData = {
  date: "2023-10-01",
  imageUrl: "/images/others/blog1.png",
  description:
    "BSc (Honours) Psychology in Bangalore – Explore Top Career Opportunities in 2025",
};

export default function Test() {
  return (
    <div className="px-10 flex flex-col gap-2">
      {/* <SegmentedControl options={[]} />
      <BDSCard data={smapleData} />
      <CollegeExploreCard data={undefined} />
      <Finder />
      <SearchBar />
      <RegistrationForm />
      <EligiblityCard />
      <ExploreCard data={undefined} />
      <SponsorsCarousel />
      <Newsletter />
      <BlogCard data={smapleBlogData} /> */}
      <GoogleSheetDataFetcher />
    </div>
  );
}
