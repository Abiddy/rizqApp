import { SmileIcon, MapPinIcon, PhoneIcon, Sparkle } from "lucide-react";

export function FeaturesDisplay() {
  const features = [
    {
      name: "Trustworthy & Reliable",
      description: "Muslim freelancers are known for upholding their promises and maintaining a high level of trustworthiness. In Islam, trust is a key value, and fulfilling agreements is not just a professional duty—it's a spiritual one.",
      icon: <SmileIcon className="w-5 h-5 text-gray-600" />, // Lucide Icon
    },
    {
      name: "Commitment to Excellence",
      description: "Muslims are encouraged to perfect their work as an act of faith. This dedication to excellence ensures that Rizq freelancers are committed to exceeding expectations and delivering high-quality results.",
      icon: <Sparkle className="w-5 h-5 text-gray-600" />, // Lucide Icon
    },
    {
      name: "Integrity & Honesty",
      description: "Hiring a Rizq Freelancer means working with individuals who prioritize honesty and integrity in every interaction. Our freelancers are dedicated to delivering transparent and quality service.",
      icon: <MapPinIcon className="w-5 h-5 text-gray-600" />, // Lucide Icon
    },
    {
      name: "Community Support",
      description: "By hiring from Rizq, you are not only getting the best talent but also supporting a community that values collaboration and fairness. Your projects contribute to empowering Muslim professionals globally.",
      icon: <PhoneIcon className="w-5 h-5 text-gray-600" />, // Lucide Icon
    },
  ];

  return (
    <section className="p-8 z-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 z-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="border border-gray-300 shadow-lg rounded-xl p-6 flex flex-col items-start space-y-4 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center gap-2">
              {feature.icon}
              </div>
              <div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
            </div>
            <p className="text-gray-600 text-left text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesDisplay;
