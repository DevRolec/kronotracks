import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

const features = [
  "High-Resolution Audio compatible",
  "High quality wireless audio with BLUETOOTH® and LDAC technology",
  "Smart listening experience by Adaptive Sound Control",
  "Ergonomic, enfolding design earpads",
];

export default function Howitworks() {
  return (
    <div className="bg-light w-[95%] mt-4 mb-4 h-auto md:h-[500px] flex flex-col md:flex-row items-center gap-4 justify-around  px-4">
      {/* Left Content */}
      <div className="flex flex-col gap-4 justify-center w-full md:max-w-[40%] h-auto md:h-[90%] p-4">
        <h2 className="text-4xl font-bold text-[var(--purplelt)] mb-6 leading-tight">
          How It Works
        </h2>

        <ul className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <BsCheckCircleFill className="text-[var(--purplelt)] mt-1" />
              <span className="text-[0.875rem] font-sans mb-4 text-[var(--dark)] font-semibold max-w-[80%]">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="text-[var(--purple)] font-semibold hover:underline text-left"
        >
          Learn More <span className="text-xl">→</span>
        </a>
      </div>

      {/* Right Image */}
      <div className="w-full md:max-w-[35%] h-auto md:h-[90%] flex items-center justify-center  p-4">
        <Image
          src="/ticketing1mg13.jpg"
          alt="Headphones"
          width={600}
          height={600}
          className="object-cover w-full border-3 rounded-[10px]"
        />
      </div>
    </div>
  );
}
