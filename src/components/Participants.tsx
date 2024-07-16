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
      text: "Born in Mumbai &amp; grown up in Goa, Chef Eureka graduated in 2012 from the Institute of Hotel Management, Catering Technology &amp; Applied Nutrition, Goa. Later in 2014 she did her Taj Management Training Program, a Training program by the Taj group of hotels that is comparable to an MBA in Hospitality Food Production that moulds young chefs into future inspiring professionals.  Thereafter she worked at the Umaid Bhawan Palace as Senior Chef-De-Partie Bakery, Patisserie &amp; Confectionery, for 2 years during 2014-16. Chef Eureka joined the Academy of Pastry &amp; Culinary Arts (APCA) in 2016 as a Pastry Chef Instructor and went on to be promoted as the Executive Pastry Chef at the Mumbai Centre. <br/> She represented India at the ‘World Pastry Queen’ championship in Rimini Italy in 2018, through a direct entry by winning Gold at the ‘India Pastry Queen’ competition in 2017. Her candidature was sponsored by Academy of Pastry &amp; Culinary Arts (APCA). She also represented India in 2017 as the coach/judge of team India&#39;s Junior team championship in Rimini Italy.<br/> After leaving APCA in 2022 Chef Eureka started SIVAKO. As the Creative Director at Sivako, a french patisserie cloud kitchen in Mumbai, her mission was to develop people for the best in French pastry by creating  masterpieces through sight &amp; taste. <br/> Later she once again got the chance to represent India by becoming ‘India Pastry Queen’ at the ‘World Pastry Queen’ championship in 2023, where she won the Bronze Medal, among the best from around the world. During her tenure at APCA Chef Eureka got the opportunity to learn from multiple master chefs from around the world including Chef Johan Martin, Chef Jean Francois Arnald, Chef Amaury Guichon, Chef Wei Loon Tan, Chef Christophe Morel, and Chef Emmanuele Forcone to name few. She participated in various workshops on Sugar Display, Chocolate &amp; Pralines, Viennoiserie &amp; Tarts and modern French Pastries to further hone up her skills.",
    },
    {
      name: "Parvinder Singh",
      img: "/judge4.png",
      text: "Chef Parvinder Singh Bali is a distinguished culinary professional who spent 3 decades at Oberoi Hotels, renowned for his exceptional expertise and innovative approach to gastronomy. With a career spanning over three decades, Chef Bali has honed his skills in various prestigious kitchens around the world. At Oberoi Centre for Learning and Development, he has played a pivotal role in elevating culinary standards, blending traditional techniques with contemporary flair. His passion for teaching and mentoring aspiring chefs is evident through his contributions to culinary education. Chef Bali's dedication to excellence and creativity has earned him a revered place in the culinary industry. Dr. Chef Bali is now set to open his Culinary and pastry school named School for European Pastry and Culinary Arts in Gurugram in September 2024",
    },
  ];

  const pp = [
    {
      img1: "/pp/8.png",
      img2: "/pp/9.png",
      name: "Sohan Kumar",
      desc: "Sohan Kumar, a seasoned bread and pastry maker with over 14 years of experience, is currently a Demi Chef De Partie at Café Delhi Heights, New Delhi. Renowned for his expertise in French pastries, Western desserts, and a variety of European and Indian breads, Sohan consistently delivers high-quality creations. His innovative approach to dessert-making and dedication to excellence earned him the Employee of the Month award in 2019. With a strong focus on customer satisfaction and a proven track record in baking operations, Sohan is ready to showcase his skills in the Master Bakers challenge.",
    },
    {
      img1: "/pp/14.png",
      img2: "/pp/15.png",
      name: "Bidur Kumar Mahapatra",
      desc: "Bidur Kumar Mahapatra, a dedicated culinary enthusiast, currently works for Azzure Hospitality Pvt. Ltd. With a B.Sc. in Hospitality and Hotel Administration from Chitkara School of Hospitality, he has honed his skills through hands-on experience, including a 12-week industrial training at JW Marriott Chandigarh. An award-winning participant in Vancouver Island University's True Colors and Resolution for Hospitality, Bidur has also showcased his culinary talent in various competitions, including the Chef of the Year competition. Passionate about food production and service, Bidur is also a food blogger and content creator on Instagram, sharing his culinary journey through engaging food reels.",
    },
    {
      img1: "/pp/2.png",
      img2: "/pp/3.png",
      name: "Anushka Madaan",
      desc: "Anushka Madaan is a passionate baker and hospitality professional with a Diploma in Bakery, Pastry, and Entrepreneurship from the School for European Pastry, scoring an impressive 89.3%. She holds a B.Sc. in Hospitality and Hotel Administration from AIHM Chandigarh, where she achieved 82%. Anushka has hands-on experience from her internship at TAJ, Chandigarh, where she refined her bakery and patisserie skills and gained practical knowledge in various departments. She has led numerous projects, including the successful Rose Fest Carnival and Busy Bee bakery outlet. As a former Bakery Coordinator and school prefect, Anushka has demonstrated leadership and organizational skills. Her accolades include first prize in an inter-college cookery competition, and she has actively contributed to community service through the National Service Scheme and Rotaract. Anushka's creativity and dedication make her a standout participant in the Master Bakers Challenge India 2024.",
    },
    {
      img1: "/pp/12.png",
      img2: "/pp/13.png",
      name: "Sandeep Kumar",
      desc: "Sandeep Kumar, a seasoned baker with over 12 years of experience, is currently a Junior Sous in Bakery at The Claridges, New Delhi. Sandeep’s culinary journey includes roles at prestigious establishments such as Pullman and Novotel Airocity, The Taj Palace, and Shangri-La Eros Hotel. His professional qualifications include a two-year apprenticeship in Bakery and Confectionery from Centaur Hotel, New Delhi, and extensive training at Cafair Flight Catering and The Grand Hotel. Known for his exceptional knife skills, in-depth product knowledge, and adherence to food safety and hygiene standards, Sandeep is eager to showcase his baking prowess at the Master Bakers Challenge India 2024.",
    },
    {
      img1: "/pp/10.png",
      img2: "/pp/11.png",
      name: "Prerna Kothari",
      desc: "Prerna, a Senior Learning Facilitator at Le Cordon Bleu India, embarked on her culinary journey with a Bachelor's degree in Culinary Arts. She refined her skills at renowned establishments like ITC Royal Bengal and JW Marriott Kolkata, contributing to their culinary excellence. Her remarkable achievements include winning the prestigious Junior Pastry India Cup and representing Team India at the Junior Pastry World Championship at SIGEP. Prerna's commitment to innovation and creativity shines through in her breathtaking edible creations. She delights in working with chocolate and sugar, pushing the boundaries of traditional pastry techniques to craft awe-inspiring delicacies.",
    },
    {
      img1: "/pp/6.png",
      img2: "/pp/7.png",
      name: "Gul Mohammad",
      desc: "Gul Mohammad, an accomplished bakery chef with over 15 years of experience, currently leads the bakery section at Café Delhi Height. His journey from a 3rd Commis to Chef de Partie showcases his dedication and growth in the field. Known for his innovative baking techniques and creative recipes, Gul has consistently produced high-quality pastries and baked goods. His tenure at Café Delhi Heights and Ciclo Café has refined his skills, ensuring maximum customer satisfaction. With a passion for excellence, Gul is set to impress at the Master Bakers challenge, bringing his rich experience and culinary artistry to the forefront.",
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
