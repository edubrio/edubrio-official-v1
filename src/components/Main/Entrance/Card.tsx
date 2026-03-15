interface CardProps {
  image: string;
  designation: string;
}

export default function EntranceCard({ image, designation }: CardProps) {
  return (
    <div className="bg-white border border-[#f0f0f0] rounded-xl overflow-hidden mx-auto shadow-md w-65 mb-3">
      <img src={image} className="w-full h-30 object-cover rounded-md mb-4" />
      <div className="flex flex-row items-center justify-between px-2 pb-3">
        <p className="text-gray-600 font-bold text-sm">{designation}</p>
      </div>
    </div>
  );
}
