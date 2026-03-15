import SegmentedControl from "@/components/General/SegemetedControl";
import CarrierCard from "@/components/Main/Carrier/CarrierCard";
import { carrierOptions } from "@/constants/options";

const designations = [
  "Doctor",
  "General Physician",
  "Junior Doctor",
  "Senior Doctor",
  "Duty Doctor",
  "Cardiologist",
  "Gynaecologist",
  "Paediatrician",
  "Pathologist",
  "Neurologist",
  "Nephrologist",
  "Oncologist",
  "Ophthalmologist",
  "ENT Specialist",
  "Diabetologist",
  "Dermatologist",
  "Neurosurgeon",
  "Anaesthesiologists",
  "Biochemists",
  "Allergists / Immunologists",
  "Critical Care Medicine Specialists / Emergency Medicine Specialists",
  "Endocrinologists",
  "Gastroenterologists",
  "Haematologists",
  "Osteopaths",
  "Psychiatrists",
  "Pulmonologists",
  "Radiologists",
  "Rheumatologists",
  "Urologists",
  "General Surgeons",
  "Cosmetic Surgeons",
  "Colon and Rectal Surgeon",
  "Transplant Surgeon",
  "Bariatric Surgeons",
  "Audiologists",
  "Ayurvedic Doctor",
  "Homeopathic Doctor",
  "Naturopathic Doctor",
];

export default function Carrier() {
  return (
    <div>
      <SegmentedControl onChange={() => {}} options={carrierOptions} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-3 mt-5 mx-auto w-full">
        {designations?.map((item, index) => (
          <CarrierCard
            key={index + item}
            image="/images/others/doc.png"
            designation={item}
          />
        ))}
      </div>
    </div>
  );
}
