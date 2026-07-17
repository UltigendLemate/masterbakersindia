'use client'
import React from 'react'
import JuryCard from './JuryCard'

const Jury = () => {
  const jury = [
    {
      "name": "Kazem Samandari",
      "img": "/Kazem Samandari.png",
      "text": "Kazem Samandari is the Co-Founder and Executive Chairman of L’Opéra, French Bakery Pvt. Ltd. An entrepreneur and business leader with over 45 years of experience, he has built startups, led global technology companies and worked across more than 60 countries. He also heads KCSH & Associates in Singapore and co-founded the Trajectories of Hope Foundation. France honoured him as Knight of the National Order of Merit in 2015."
    },
    {
      "name": "Sehaj Ghuman",
      "img": "/Sehaj Ghuman.png",
      "text": "Chef Sehaj Ghuman is the Executive Pastry Chef at the Academy of Pastry and Culinary Arts, Gurgaon. Trained with The Oberoi Hotels and Resorts, she was Gold Medallist of the Kitchen Management batch at OCLD. She represented India at Mondial Des Arts Sucre 2022, became India Pastry Champion in 2023, competed at Asian Pastry Cup 2024 and mentored India’s Junior Pastry Cup-winning team."
    },
    {
      "name": "Mohammed Nauman Qureshi",
      "img": "/judge5.png",
      "text": "Mohammed Nauman Qureshi is Head Pastry Chef at Paul Bakery India since April 2021. Over 15 years at premier patisseries like Theobroma Foods and L’Opéra, he led large‑scale production of signature cakes and macarons, ensuring consistent quality and innovation. A HACCP authority, he implemented rigorous safety protocols across multiple kitchens, achieving flawless audit results. As a mentor, he’s trained and developed dozens of pastry professionals. He holds a BSc in Hospitality & Tourism and a BA from the University of Delhi."
    },
    {
      "name": "Robin Batra",
      "img": "/Robin Batra.jpg",
      "text": "Robin Batra is an accomplished Executive Chef with over 23 years of experience in luxury hospitality, leading culinary operations across premier hotel brands including The Oberoi Hotels & Resorts and Trident Hotels. A Gold Medallist from The Oberoi Centre of Learning and Development (OCLD), he is recognized for his expertise in restaurant conceptualization, menu innovation, operational excellence, and team leadership. Chef Robin has successfully led several high-profile hotel openings and restaurant transformations, including the launch of Ziya with Michelin-starred Chef Vineet Bhatia, Madam Chow, and Lord Vesper at The Oberoi, Gurgaon. His international training at Michelin-starred restaurants in France and Hong Kong, along with his Le Cordon Bleu certification and FSSAI Food Safety Trainer certification, reflects his commitment to world-class culinary standards and continuous innovation."
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