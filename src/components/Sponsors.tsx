import React from 'react'
import Organizer from './Organizer'

const Sponsors = () => {

    const sponsors=  [

        // {
        //     "img" : "/pp/elle.png",
        //     "link" : "https://savencia-fd.in/#:~:text=Savencia%20Fromage%20%26%20Dairy%20India,pizza%20toppings%20and%20finger%20foods",
        //     "mini" : "A brand of tradition and innovation, Elle & Vire Professionnel has been catering to the finest chefs and emerging talents for over 75 years, showcasing our excellence in dairy production from Normandy.",
        //     "text" : "A brand of tradition and innovation, Elle & Vire Professionnel has been catering to the finest chefs and emerging talents for over 75 years, showcasing our excellence in dairy production from Normandy. The consistency and performance of our creams and butters empower chefs to excel in their pursuit of excellence. We are proud to once again partner with the Pastry Queen India 4th edition."
        // },
        // {
        //     "img" : "/pp/deltasponsor.png",
        //     "link" : "https://www.deltanutritives.com/",
        //     "mini" : "At Delta Nutritives, we understand our customers' expectations and strive to meet them consistently. We have established ourselves as one of the most reliable suppliers of dessert ingredients and equipment for ice cream manufacturing.",
        //     "text" : "At Delta Nutritives, we understand our customers' expectations and strive to meet them consistently. We have established ourselves as one of the most reliable suppliers of dessert ingredients and equipment for ice cream manufacturing. Our extensive range of products includes Belgium chocolates by Callebaut, ice cream ingredients by Mec3, Italy, frozen berries and purees by Dirafrost (Belgium) and Ravifruit (France), fruit fillings by Dawn Foods, Belgium, and dairy products by Elle & Vire, France.\n In addition to importing and supplying these premium ingredients, we also manufacture cake premixes, glazes, pastry fillings, and fruit fillings for bakeries. Our product portfolio is complemented by a wide range of decorations, accessories, edible colors, velvet sprays, chocolate molds, industrial blenders, slush machines, and hot chocolate drink dispensers.\n At Delta Nutritives, we connect ingredients and expertise to deliver the industry's trusted brands right to your doorstep."
        // },
        {
            "img" : "/sponsors/1.png",
            "link" : "https://www.modequipment.com/",
            "mini" : "MOD Kitchen Equipment Pvt. Ltd., known as MOD, is a leading provider of complete commercial kitchen and catering equipment solutions. Based in New Delhi, India, MOD specializes in turnkey kitchen projects, serving various industries.",
            "text" : "MOD Kitchen Equipment Pvt. Ltd., known as MOD, is a leading provider of complete commercial kitchen and catering equipment solutions. Based in New Delhi, India, MOD specializes in turnkey kitchen projects, serving various industries.\n MOD is a trusted supplier of bakery and catering equipment to internationally acclaimed hotels, bakeries, coffee outlets, restaurants, educational institutions, and industrial units across the country. With a focus on quality and functionality, MOD delivers top-notch products and services to meet the diverse needs of its clients.\n MOD is a major sales and service provider in India for OZTI, a renowned commercial kitchen equipment brand from Turkey. With a ready stock of spare parts, MOD ensures prompt support for customer requirements.\n With expertise in manufacturing and importing commercial kitchen equipment, MOD's design team meticulously plans and designs layouts to optimize space utilization and facilitate smooth operations. \nMOD Kitchen Equipment Pvt. Ltd. is dedicated to customer satisfaction and has earned a reputation for excellence. Their commitment to delivering high-quality products, reliable services, and innovative solutions has made them a trusted name in the industry.\nMOD's expertise, strong industry relationships, and customer-centric approach position them as a reliable one-stop solution for all commercial kitchen and catering equipment needs."
        },
        {
            "img" : "/sponsors/2.png",
            "link" : "http://ransindia.com/",
            "mini" : "With 27 years of industry experience, RANS Technocrats is a renowned Indian company specializing in the manufacturing of kitchen equipment for the foodservice industry. Their commitment to advanced technology has made them a trusted choice for hotels and restaurants throughout India.",
            "text" : "With 27 years of industry experience, RANS Technocrats is a renowned Indian company specializing in the manufacturing of kitchen equipment for the foodservice industry. Their commitment to advanced technology and innovative products has made them a trusted choice for hotels and restaurants throughout India.\nRANS Technocrats serves customers nationwide, providing dedicated service and support. They pride themselves on their state-of-the-art machinery and a strong emphasis on quality, ensuring that their equipment meets international standards.\nTo offer a comprehensive range of kitchen equipment, RANS Technocrats has developed specialized brands. ULTIMATE, one of their brands, offers a wide selection of baking ovens, salamanders, and pizza ovens. ICEDEN, another brand, focuses on commercial refrigeration equipment such as display counters, deep freezers, under-counter refrigerators, and freezers.\nGRATEINOX, their specialized brand, specializes in high-quality stainless steel kitchen floor gratings. Leveraging their expertise in sheet metal fabrication, RANS Technocrats also offers a diverse range of customized commercial kitchen equipment under the RANS brand.\nAs a leading manufacturer in India, RANS Technocrats is recognized for their commitment to delivering high-quality products and excellent service to customers nationwide."
        },
        {
            "img" : "/sponsors/eurofoods.jpg",
            "link" : "https://eurofoods.co.in/import/",
            "mini" : "Euro Foods is a premier importer and distributor in India, dedicated to providing top-quality products to its esteemed clientele, including 5-star hotels, retail chains, caterers, and bakeries.",
            "text" : "Euro Foods Pvt Ltd is a premier importer and distributor in India, dedicated to providing top-quality products to its esteemed clientele, including 5-star hotels, fine dining restaurants, retail chains, caterers, and bakeries. Specializing in a diverse range of offerings, Euro Foods proudly supplies chocolates, bread pre-mixes, frozen fruits and fillings, bar syrups, and Canned product etc. Committed to excellence, Euro Foods ensures that each product meets the highest standards of quality and taste. With a focus on delivering premium ingredients, Euro Foods enables culinary enthusiasts across India to elevate their creations to unparalleled heights."
        },
        {
            "img": "/sponsors/3.png",
            "link" : "https://www.chefibpa.com",
            "mini": "IBCA is one of the topmost learning centre in the capital of India as an impeccable platform to nurture future professionals in this artistic field of Bakery and Culinary Arts.",
            "text": "IBCA has become an excellent platform for newbies to learn and master the field of Bakery and Culinary Arts in their sophisticated courses. All courses have a standard curriculum to give students guidance in various methods, processes, preparations, and building recipes from scratch. We turn newcomers with little or no experience in Bakery and Culinary Arts into dedicated professionals ready to compete in the demanding world of building their careers. IBCA offers them all the resources they need to advance their amateur careers while receiving professional guidance. Over the years, IBCA has earned one of the top names as bakery institute in Delhi & culinary institute in Delhi. Last few years, people have joined our bakery classes in India from different parts of the world and states of India, establishing us as a prestigious bakery & Culinary Institute in India. All these joinings happened based on our student performance on the International level and our placement records across the world."
          },
        {
            "img": "/sponsors/dkg.png",
            "link" : "https://dkgspl.co/",
            "mini": "DKG Sales Private Limited is a premier Delhi-based manufacturing company catering to the Indian hotel and restaurant industry.",
            "text": "DKG Sales Private Limited*, established in 1987 by Dilip Kumar Gandhi, is a premier Delhi-based manufacturing company catering to the Indian hotel and restaurant industry. Specializing in high-quality cutlery, crockery, glassware, and kitchen equipment, DKG meets the unique needs of chefs. Their state-of-the-art facility ensures premium quality, innovation, and client-centric solutions, helping chefs create exceptional culinary experiences."
          }
    ]
  return (
    <div
    id="Sponsors"
    className="flex items-center flex-col mt-5 font-mon py-10"
  >
    <h1 className=" text-5xl md:text-7xl text-primary mb-4 heading">
      SPONSORS
    </h1>
    <div className="sm:grid sm:grid-cols-3 md:px-16 m-auto gap-4 md:gap-8 p-4 z-40 ">
      {sponsors.map((item: any) => (
        <Organizer key={item.img} {...item} />
      ))}
      {/* <Organizer/> */}
    </div>
  </div>
  )
}

export default Sponsors