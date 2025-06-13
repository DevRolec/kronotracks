export default function FeaturesPage() {
  const features = [
    {
      icon: "🛒",
      title: "Touch to buy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    },
    {
      icon: "🔐",
      title: "Secure Data",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    },
    {
      icon: "💬",
      title: "Instant Chat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    },
    {
      icon: "🔔",
      title: "Live Notification",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    },
    {
      icon: "📶",
      title: "Wifi Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    },
    {
      icon: "📱",
      title: "App Watch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    },
  ];

  return (
    <div className=" bg-light w-full h-auto flex items-center justify-center text-center">
      <div className="w-[90%] mx-auto text-center   p-4">
        <h2 className="text-4xl font-bold text-[var(--dark)] mb-6 leading-tight">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center flex  items-center justify-center flex-col p-2"
            >
              <div className="mb-4 text-4xl text-pink-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[0.9em] font-sans text-[var(--dark)] font-semibold max-w-[80%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
