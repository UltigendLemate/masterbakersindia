"use client";
import React from "react";
import JuryCard from "./JuryCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const Participants = () => {
  const jury = [
    {
      name: "Balendra Singh",
      img: "/judge1.png",
      text: "Dr. Balendra Singh is director at Institute of Bakery &amp; Culinary Arts New Delhi. He established the institute to offer education based on his experience in hospitality industry as one of the leading pastry chef for aspiring professionals interested to make career in Bakery &amp; Pastry. He has a flair for innovation with expertise in international pastry cuisine. He studied at The IHM Dehradun with a focus on bakery and confectionery. Later he garnered over 20 years of experience at major hotels like Umaid Bhawan Palace Jodhpur, Grand Hyatt New Delhi, Westin Gurgaon, JW Marriott New Delhi, Pullman, Novotel New Delhi, The Taj Mahal New Delhi &amp; cruise ships around the world, where he honed his skills to international level. <br> He gained wide knowledge in casual &amp; fine dining, a-la-carte, buffet &amp; banquet and pastry verticals of foodservice industry. As a culinary educator, he focus on skill based education ensuring students a good career.",
    },

    {
      name: "Mukesh Rawat",
      img: "/judge3.png",
      text: "Chef Mukesh was born and brought up in Uttarakhand . Having graduated from the Institute of hotel management in Dehradun . He started his career with The Oberoi Bangalore as a Commis.Thereafter he worked at the Taj Westin Bangalore as Senior CDP, At Raddison Mumbai as PastryChef ; At Claridges Suraj Kund as Pastry Chef, At Hilton Chennai as Executive Pastry Chef andExecutive Sous Chef .<br/> <ul><div> -Later Chef Mukesh joined the Academy of Pastry & Culinary Arts (APCA) in 2015 as an Executive Pastry Chef & Educator. It was here that he got the opportunity to participate inthe India Pastry Cup Competition in 2016 and won a Gold medal in it.</div><div>-In the same year he went on to participate in Asia Pastry Cup, Singapore and won a Bronzemedal for India and got recognized as the most Promising Talent in Asia Pastry Cup .</div><div>- In 2017 Chef Mukesh participated in World Pastry Cup Coupe De Monde De La as Captain ofteam India.</div><div> In 2018 he headed team India in Junior Pastry team championship and won Gold medal.</div><div>-In 2019 he headed team India in Junior Pastry world cup in Italy and got 4th place.</div><div>In 2023 he headed team India in World Pastry Queen cup in Italy and won Bronze medal forIndia.</div><div>-In 2022 chef Mukesh started working with ZUCI Pure Passion ,Hyderabad and running theplace as Director of Culinary.</div></ul> - While at APCA Chef Mukesh got the opportunities to work with different Master Chefs fromaround the world including Chef Johan Martin, Chef Jean Francois Arnald, Chef Amaury Guichon,Chef Wei Loon Tan, Chef Christophe Morel, Chef Emmanuele Forcone and many more.",
    },
    {
      name: "Eureka Araujo",
      img: "/judge2.png",
      text: "Born in Mumbai &amp; grown up in Goa, Chef Eureka graduated in 2012 from the Institute of Hotel Management, Catering Technology &amp; Applied Nutrition, Goa. Later in 2014 she did her Taj Management Training Program, a Training program by the Taj group of hotels that is comparable to an MBA in Hospitality Food Production that moulds young chefs into future inspiring professionals.  Thereafter she worked at the Umaid Bhawan Palace as Senior Chef-De-Partie Bakery, Patisserie &amp; Confectionery, for 2 years during 2014-16. Chef Eureka joined the Academy of Pastry &amp; Culinary Arts (APCA) in 2016 as a Pastry Chef Instructor and went on to be promoted as the Executive Pastry Chef at the Mumbai Centre. <br/> She represented India at the 'World Pastry Queen' championship in Rimini Italy in 2018, through a direct entry by winning Gold at the 'India Pastry Queen' competition in 2017. Her candidature was sponsored by Academy of Pastry &amp; Culinary Arts (APCA). She also represented India in 2017 as the coach/judge of team India's Junior team championship in Rimini Italy.<br/> After leaving APCA in 2022 Chef Eureka started SIVAKO. As the Creative Director at Sivako, a french patisserie cloud kitchen in Mumbai, her mission was to develop people for the best in French pastry by creating  masterpieces through sight &amp; taste. <br/> Later she once again got the chance to represent India by becoming 'India Pastry Queen' at the 'World Pastry Queen' championship in 2023, where she won the Bronze Medal, among the best from around the world. During her tenure at APCA Chef Eureka got the opportunity to learn from multiple master chefs from around the world including Chef Johan Martin, Chef Jean Francois Arnald, Chef Amaury Guichon, Chef Wei Loon Tan, Chef Christophe Morel, and Chef Emmanuele Forcone to name few. She participated in various workshops on Sugar Display, Chocolate &amp; Pralines, Viennoiserie &amp; Tarts and modern French Pastries to further hone up her skills.",
    },
    {
      name: "Parvinder Singh",
      img: "/judge4.png",
      text: "Chef Parvinder Singh Bali is a distinguished culinary professional who spent 3 decades at Oberoi Hotels, renowned for his exceptional expertise and innovative approach to gastronomy. With a career spanning over three decades, Chef Bali has honed his skills in various prestigious kitchens around the world. At Oberoi Centre for Learning and Development, he has played a pivotal role in elevating culinary standards, blending traditional techniques with contemporary flair. His passion for teaching and mentoring aspiring chefs is evident through his contributions to culinary education. Chef Bali's dedication to excellence and creativity has earned him a revered place in the culinary industry. Dr. Chef Bali is now set to open his Culinary and pastry school named School for European Pastry and Culinary Arts in Gurugram in September 2024",
    },
  ];

  const pp = [
    {
      img1: "/participants/Diksha Khandelwal.png",
      img2: "/participants/ibca.png",
      name: "Diksha Khandelwal",
      desc: "A decorated pastry artist and educator, Diksha serves as Chef Instructor and Centre Head at the Institute of Bakery and Culinary Arts. With accolades including Gold at Aahar 2024 and the Nari Ratan Award, her journey reflects technical mastery and a passion for teaching. Internationally certified, she specializes in patisserie with deep roots in French culinary arts.",
    },
    {
      img1: "/participants/Dinesh Kumar.png",
      img2: "/participants/mrskaurs.png",
      name: "Dinesh Kumar",
      desc: "With a rich career spanning top bakeries in India and the Middle East, Dinesh Kumar brings mastery in artisanal baking and operational leadership. From innovating at Defense Bakery to scaling quality at Mrs Kaur's, he's a specialist in viennoiserie, sourdoughs, and team training—backed by international credentials and a passion for excellence.",
    },
    {
      img1: "/participants/Kanhaiya Lal Rawat.png",
      img2: "/participants/lopera.png",
      name: "Kanhaiya Lal Rawat",
      desc: "With over 13 years at L'Opéra, Kanhaiya has risen from Commis III to Senior Chef de Partie at one of India's top French bakeries. He specializes in artisanal breads, pastries, and team operations, having worked alongside global pastry masters. His precision, leadership, and deep technical skills make him a standout in modern bakery execution.",
    },
    {
      img1: "/participants/Mohd Shahnawaz.png",
      img2: "/participants/cafedelhiheights.png",
      name: "Mohd. Shahnawaz",
      desc: "A veteran pastry chef with 20+ years of culinary experience, Shahnawaz currently heads pastry operations at Café Delhi Heights. From luxury resorts to fine-dining kitchens, he's honed his skills in artisan baking, costing, and kitchen leadership. Known for precision and consistency, his legacy spans landmark names like Tivoli Gardens, The Samrat Hotel, and Country Inn.",
    },
    {
      img1: "/participants/Sandeep.png",
      img2: "/participants/claridges.png",
      name: "Sandeep Kumar",
      desc: "Currently Jr. Sous Chef at Hotel Claridges, Sandeep brings over 12 years of expertise in bakery and confectionery across top properties like Pullman, Taj Palace, and Shangri-La. Trained at Centaur Hotel and Grand New Delhi, he blends technical precision with operational excellence. Honored with the Master Baker Award 2024, he exemplifies consistency and culinary craft.",
    },
    {
      img1: "/participants/Saurav Singh.png",
      img2: "/participants/jwmarriott.png",
      name: "Saurav Singh",
      desc: "A dedicated bakery professional, Saurav Singh has steadily risen through roles at Hyatt, Oberoi, and now JW Marriott Kolkata. Known for his mastery in sourdoughs, viennoiserie, and dessert presentation, he blends technical skill with operational focus. With formal training and award recognition, he represents the new wave of precision-driven talent in India's bakery kitchens.",
    },
    {
      img1: "/participants/Siddhesh Undire.png",
      img2: "/participants/itcmaratha.png",
      name: "Siddhesh Undire",
      desc: "A bakery specialist with experience at India's finest luxury hotels, Siddhesh has mastered buffet layouts, viennoiserie, and artisan presentations. Now at ITC Maratha, he's known for operational discipline and creativity—from brunch setups to chocolate sculptures. With prior roles at St. Regis and Grand Hyatt, he brings a refined, guest-centric approach to modern bakery execution.",
    },
    {
      img1: "/participants/Pradum.png",
      img2: "/participants/bakehousecomfort.png",
      name: "Pradum Yadav",
      desc: "Focused and fast-rising, Pradum Yadav brings 5+ years of core bakery experience across brands like Café Delhi Heights and Oasis Baklawa. With expertise in bread craftsmanship and a reputation for reliability, he's known for precision and consistency on the line. Energetic and eager to grow, he represents the next wave of committed talent in commercial baking.",
    },
  ];

  return (
    <div className="w-full" id="Jury">
      <h2 className="z-20 mx-auto text-5xl md:text-7xl text-primary mb-4  mt-10 text-center heading ">
        Participants
      </h2>

      <div className="md:mx-24 mx-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {pp.map((item) => (
          <ParticipantCard key={item.img1} {...item} />
        ))}
      </div>
    </div>
  );
};

const ParticipantCard = ({
  img1,
  img2,
  name,
  desc,
}: {
  img1: string;
  img2: string;
  name: string;
  desc: string;
}) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2">
        <div className="from-primary to-white bg-gradient-to-b rounded-xl rounded-r-none">
          <img src={img1} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="aspect-square rounded-xl bg-white !rounded-l-none">
          <img src={img2} className="w-full h-full object-cover rounded-xl !rounded-l-none" alt="" />
        </div>
      </div>
      <div className="">
        <h5 className="text-xl md:text-2xl font-semibold">{name}</h5>
        <p className="line-clamp-3 mt-2">{desc}</p>
        <Dialog>
          <DialogTrigger>
            <p className="text-sm cursor-pointer text-primary underline">
              Know More
            </p>
          </DialogTrigger>
          <DialogContent className="max-h-96 max-w-screen-lg overflow-auto app-scrollbar">
            <DialogHeader>
              <DialogTitle className="text-primary text-2xl">
                Know More
              </DialogTitle>
            </DialogHeader>

            <p
              className="xl:text-sm 2xl:text-lg list-disc"
              dangerouslySetInnerHTML={{ __html: desc }}
            ></p>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Participants;
