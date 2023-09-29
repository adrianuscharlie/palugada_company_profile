import React from "react";
import Image from "next/image";
import NIB_1 from "@/assets/NIB_1.jpg";
import NIB_2 from "@/assets/NIB_2.jpg";
import Link from "next/link";
const Values = [
  {
    value: "Trust",
    img: require("@/assets/trust.png"),
    desc: "At our company, trust is the foundation of our operations. We prioritize meeting our clients' needs and cultivating lasting bonds with them, partners, and our team, as it underscores our commitment to delivering exceptional value and fostering mutually beneficial relationships",
  },
  {
    value: "Empowerment",
    img: require("@/assets/empowerment.png"),
    desc: "Our company empowers local businesses to access global markets, offering product showcase and quality guidance. Our core commitment is trust-based client relationships.",
  },
  {
    value: "Strategic",
    img: require("@/assets/strategic.png"),
    desc: "Indonesia's central Southeast Asian location makes it a global comodities center, with diverse minerals, forests, fertile land, and a vast coastline, playing a pivotal role in the global supply chain.",
  },
  {
    value: "Adaptive",
    img: require("@/assets/adaptive.png"),
    desc: "We thrive in the face of changing markets, evolving regulations, and shifting customer preferences. With us, you have a partner who not only navigates change but capitalizes on it, turning challenges into opportunities for your business.",
  },
];
const page = () => {
  return (
    <>
      <section className="w-full pt-36 flex py-20 px-10  ">
        <div className="container">
          <div className="w-full px-4 justify-center items-center">
            <div className="max-w-4xl mx-auto text-center mb-16 items-center justify-center">
              <h1 className="text-3xl font-bold text-primary mb-3">About Us</h1>
              <h6 className="text-xl font-semibold text-secondary mb-3">
                {"Let's get to know us better"}
              </h6>
              <p className="text-xl text-center lg:text-justify">
                Palugada Sejahtera Group, based in the vibrant heart of Daerah
                Istimewa Yogyakarta, Indonesia, is an esteemed international
                trading company. We pride ourselves on cultivating robust
                relationships with both clients and suppliers, ensuring prompt,
                dependable, and transparent services. With our extensive
                experience in overseeing international ventures and promptly
                adapting to market demands, we serve as your prime avenue to
                seize global opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex py-20 px-10  bg-slate-100">
        <div className="container">
          <div className="flex flex-wrap justify-center items-start ">
            <div className="w-full column  px-4 lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-3xl font-bold text-primary mb-3">
                Our Vision
              </h1>
              <h3 className="text-xl font-semibold">
                {
                  "Bridging Global Needs with Indonesia's Local Resource Potential to Strengthen the Local Economy"
                }
              </h3>
            </div>
            <div className="w-full column   px-4 lg:w-1/2 mb-20 lg:mb-0">
              <h1 className="text-3xl font-bold text-primary mb-3">
                Our Mission
              </h1>
              <h3 className="text-xl font-semibold mb-3">
                Economic Empowerment
              </h3>
              <h3 className="text-lg mb-3">
                {
                  "We're dedicated to fostering local economic growth by empowering businesses, entrepreneurs, and communities through expand their market into international market"
                }
              </h3>
              <h3 className="text-xl font-semibold mb-3">
                Economic Empowerment
              </h3>
              <h3 className="text-lg mb-3">
                {
                  "We're dedicated to fostering local economic growth by empowering businesses, entrepreneurs, and communities through expand their market into international market"
                }
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-36 flex py-10 px-10  ">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-3xl font-bold text-primary mb-3">
                What Makes Us the Right Choice?
              </h1>
              <h6 className="text-xl font-semibold text-secondary mb-3">
                {"Let's discover our dedicated values"}
              </h6>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 px-4  items-start justify-center mt-3 gap-10">
              {Values.map((value) => (
                <div
                  className="flex justify-center items-start max-w-xl gap-5 py-3"
                  key={value.value}
                >
                  <Image
                    width={75}
                    height={75}
                    src={value.img}
                    alt={value.value}
                  />
                  <div className="text-start lg:text-justify">
                    <h3 className="font-semibold text-primary text-2xl">
                      {value.value}
                    </h3>
                    <p className=" text-base md:text-lg">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-20 flex py-20 px-10 bg-primary">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-3xl font-bold text-white mb-3">
                {"Our Term's"}
              </h1>
              <h6 className="text-xl font-semibold text-secondary mb-3">
                General Terms of our Company for Business Collaboration with
                Clients
              </h6>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-start">
              <div className="justify-center items-start bg-white p-5 rounded-md">
                <h3 className="font-semibold text-3xl mb-2 text-primary">
                  Payment
                </h3>
                <ul className="list-disc pl-5 text-secondary text-lg">
                  <li className="mb-2">Telegraphic Transfer</li>
                  <li className="mb-2">Irrevocable L/C at Sight</li>
                </ul>
              </div>
              <div className="justify-center items-start bg-white  p-5 rounded-md">
                <h3 className="font-semibold text-3xl mb-2 text-primary">
                  Incoterms
                </h3>
                <ul className="list-disc pl-5 text-secondary text-lg">
                  <li className="mb-2">Cost, Insurance, Freight (CIF)</li>
                  <li className="mb-2">Freight on Board (FOB)</li>
                </ul>
              </div>
              <div className="justify-center items-start bg-white p-5 rounded-md">
                <h3 className="font-semibold text-3xl mb-2 text-primary">
                  MOQ
                </h3>
                <p className="text-secondary text-lg">
                  To be discussed between clients and our company
                </p>
              </div>
              <div className="justify-center items-start bg-white p-5 rounded-md">
                <h3 className="font-semibold text-3xl mb-2 text-primary">
                  Nearest Port
                </h3>
                <ul className="list-disc pl-5 text-secondary text-lg">
                  <li className="mb-2">Tanjung Perak, Surabaya</li>
                  <li className="mb-2">Tanjung Mas, Semarang</li>
                  <li className="mb-2">Tanjung Priok, Jakarta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-20 flex py-10 px-10 bg-white  ">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-3xl font-bold text-primary mb-3">
                Meet Our Team
              </h1>
              <h6 className="text-xl font-semibold text-secondary mb-3">
                {
                  "Our team is the living embodiment of our company's ethos. Let's get to know them better."
                }
              </h6>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 px-4  items-start justify-center mt-3 gap-10">
              <div className=" justify-center items-start max-w-xl py-3 p-5 text-center">
                <Image
                  className="object-cover rounded-md"
                  width={200}
                  height={200}
                  src={require("@/assets/sinto.jpg")}
                  alt={"Charlie Photos"}
                />
                <h3 className="font-bold text-secondary text-2xl mt-5">
                  {"Sinto Widyo"}
                </h3>
                <h6 className="text-primary font-semibold text-lg">CEO</h6>
              </div>
              <div className=" justify-center items-start max-w-xl py-3 p-5 text-center">
                <Image
                  className="object-contain rounded-md"
                  width={228}
                  height={200}
                  src={require("@/assets/charlie.jpeg")}
                  alt={"Charlie Photos"}
                />
                <h3 className="font-bold text-secondary text-2xl mt-5">
                  {"Adrianus Charlie"}
                </h3>
                <h6 className="text-primary text-lg font-semibold">
                  Lead Marketing
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-20 flex py-20 px-10 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-3xl font-bold text-primary mb-3">
                {"Our Legality"}
              </h1>
              <h6 className="text-xl font-semibold text-secondary mb-3">
                {
                  "Here is our Company's Business License in the form of an NIB (Business Registration Number)."
                }
              </h6>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              <div className="flex flex-wrap justify-center items-center gap-5">
                <Image
                  src={NIB_1}
                  width={500}
                  alt="NIB_1"
                  className="object-contain"
                />
                <Image
                  src={NIB_2}
                  width={500}
                  alt="NIB_2"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
