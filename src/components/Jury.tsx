'use client'
import React from 'react'
import JuryCard from './JuryCard'

const Jury = () => {
    const jury = [
        {
          "name": "Gaurav Mishra",
          "img": "/Gaurav Mishra.png",
          "text" : "Chef Gaurav Misra is Executive Chef at Crowne Plaza, Rohini, with over 25 years of luxury hospitality experience. He has led operations at Hilton Jaipur, The Westin Pushkar, The Ananta Udaipur, and Carnival Cruise Lines, specializing in menu innovation, team mentoring, and pre-opening setups. He began at Leela Palace Goa. He holds an MBA (PGP) from NIM Jaipur, a Hotel Management diploma from IHMCTAN Ahmedabad; advanced culinary training in France."
        },
        
        {
          "name": "Satbir Singh",
          "img": "/Satbir Singh.png",
          "text" : "Chef Satbir Singh Bakshi has been overseeing culinary operations at Oberoi hotels in India as Corporate Chef de Cuisine since August 2021. In a 28‑year career, he started  his career  at Le Meridien New Delhi, followed by Grand Hyatt New Delhi, and joined the Oberoi group in 2003. He rose up the ladder and became Executive Chef at The Oberoi Mumbai in 2014. He was closely involved in opening of  “Cou Cou by Oberoi” (2021) and “Amadeo by Oberoi” (2023), implemented ISO 22000 standards group‑wide, and optimized menu engineering and cost controls. A Delhi University graduate with an IHMCTAN Ahmedabad diploma, he excels in team development and F&B innovation."
        },
        // {
        //   "name": "Eureka Araujo",
        //   "img": "/judge2.png",
        //   "text" : "Born in Mumbai &amp; grown up in Goa, Chef Eureka graduated in 2012 from the Institute of Hotel Management, Catering Technology &amp; Applied Nutrition, Goa. Later in 2014 she did her Taj Management Training Program, a Training program by the Taj group of hotels that is comparable to an MBA in Hospitality Food Production that moulds young chefs into future inspiring professionals.  Thereafter she worked at the Umaid Bhawan Palace as Senior Chef-De-Partie Bakery, Patisserie &amp; Confectionery, for 2 years during 2014-16. Chef Eureka joined the Academy of Pastry &amp; Culinary Arts (APCA) in 2016 as a Pastry Chef Instructor and went on to be promoted as the Executive Pastry Chef at the Mumbai Centre. <br/> She represented India at the ‘World Pastry Queen’ championship in Rimini Italy in 2018, through a direct entry by winning Gold at the ‘India Pastry Queen’ competition in 2017. Her candidature was sponsored by Academy of Pastry &amp; Culinary Arts (APCA). She also represented India in 2017 as the coach/judge of team India&#39;s Junior team championship in Rimini Italy.<br/> After leaving APCA in 2022 Chef Eureka started SIVAKO. As the Creative Director at Sivako, a french patisserie cloud kitchen in Mumbai, her mission was to develop people for the best in French pastry by creating  masterpieces through sight &amp; taste. <br/> Later she once again got the chance to represent India by becoming ‘India Pastry Queen’ at the ‘World Pastry Queen’ championship in 2023, where she won the Bronze Medal, among the best from around the world. During her tenure at APCA Chef Eureka got the opportunity to learn from multiple master chefs from around the world including Chef Johan Martin, Chef Jean Francois Arnald, Chef Amaury Guichon, Chef Wei Loon Tan, Chef Christophe Morel, and Chef Emmanuele Forcone to name few. She participated in various workshops on Sugar Display, Chocolate &amp; Pralines, Viennoiserie &amp; Tarts and modern French Pastries to further hone up her skills."
        // },
        {
          "name": "Parvinder Singh",
          "img": "/judge4.png",
          "text" : "Dr Chef Parvinder Singh Bali is Director of the School for European Pastry and Culinary Arts, with 30 years at Oberoi Hotels. At the Oberoi Centre for Learning and Development, he elevated culinary standards by blending classical techniques with modern innovation. A gold medalist from IHM Kolkata and CIA Pro Certification top scorer, he authored five cookbooks and represented India at WorldSkills Leipzig. His passion for mentoring shaped generations of chefs."
        },
        {
          "name": "Mohammed Nauman Qureshi",
          "img": "/judge5.png",
          "text" : "Mohammed Nauman Qureshi is Head Pastry Chef at Paul Bakery India since April 2021. Over 15 years at premier patisseries like Theobroma Foods and L’Opéra, he led large‑scale production of signature cakes and macarons, ensuring consistent quality and innovation. A HACCP authority, he implemented rigorous safety protocols across multiple kitchens, achieving flawless audit results. As a mentor, he’s trained and developed dozens of pastry professionals. He holds a BSc in Hospitality & Tourism and a BA from the University of Delhi."
        },

      ]
      
    
  return (
            <div className='w-full pt-10 pb-20' id='Jury'>
        <h2 className='z-20 mx-auto text-5xl md:text-7xl text-primary mb-4  mt-10 text-center heading '>Our Jury</h2>


        <div className='md:mx-24 mx-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10'>

        {
            jury.map((item) => (
                <JuryCard key={item.img} {...item} />
            ))

        }
        </div>
    </div>

  )
}

export default Jury