import CardComponent from "@/components/Main/Scholarships/Cards";

export default function MainPage() {
  const cardsData = [
    {
      image: "/images/schols/image1.png",
      description:
        "Pragati Scholarship Scheme for Girl Students (Technical Degree)",
    },
    {
      image: "/images/schols/image2.png",
      description:
        "Pragati Scholarship Scheme for Girl Students (Technical Diploma)",
    },
    {
      image: "/images/schols/image3.png",
      description: "Post Graduate Scholarship Scheme",
    },
    {
      image: "/images/schols/image4.png",
      description:
        "Saksham Scholarship Scheme for Specially Abled Students (Technical Degree)",
    },
    {
      image: "/images/schols/image5.png",
      description:
        "Saksham Scholarship Scheme for Specially Abled Students (Technical Diploma).",
    },
    {
      image: "/images/schols/image6.png",
      description: "Prerana Scholarship Scheme",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-3">
      {cardsData.map((card, index) => (
        <CardComponent
          key={index}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
}
