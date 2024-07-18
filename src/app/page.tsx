'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Contact from "@/components/Contact";
import Jury from "@/components/Jury";
import Sponsors from "@/components/Sponsors";
import Participants from "@/components/Participants";

export default function Home() {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-between">
        <nav className="flex container justify-between items-center md:text-2xl pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="md:text-lg rounded-md">Our Objectives</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[60vh] overflow-y-scroll app-scrollbar">
              <DialogHeader>
                <DialogTitle>
                  The Objectives of the Master Bakers Challenge in India :
                </DialogTitle>
              </DialogHeader>
              <ul className="list-inside list-disc">
                <li>
                  Celebrate and elevate the art of baking by recognizing and
                  rewarding exceptional talent.
                </li>
                <li>
                  Enhance the quality and diversity of baked goods available to
                  consumers in India.
                </li>
                <li>
                  Inspire aspiring bakers to pursue their passion and improve
                  their skills.
                </li>
                <li>
                  Foster a spirit of competition and innovation among bakers.
                </li>
                <li>
                  Encourage bakers to showcase their skills and creativity.
                </li>
                <li>
                  Offer media exposure and networking opportunities for
                  participants.
                </li>
                <li>
                  Uplift the baking community and set high standards in the
                  industry.
                </li>
                <li>
                  Provide a platform for professional growth and career
                  advancement.
                </li>
              </ul>
            </DialogContent>
          </Dialog>
          <Link
            href={
              "https://drive.google.com/drive/folders/1_6vXqBlyR7QJhptqXsukCzpHEKOE5RdM?usp=drive_link"
            }
          >
            <Button className="md:text-lg rounded-md">Register Today</Button>
          </Link>
        </nav>

        <div className="flex md:gap-5 flex-col md:flex-row items-center justify-center md:min-h-[60vh]">
          {/* <div className="relative z-[-1] flex justify-center bg-green-300 w-full "> */}
          <Image
            // className="w-full"
            src="/logo.png"
            alt="Master Bakers Logo"
            width={350}
            height={350}
          />
          <div className="text-center md:text-2xl md:-mt-5">
            <h1 className="heading md:text-6xl text-4xl text-primary">
              Master Bakers <br /> Challenge India 2024
            </h1>
            <h4 className="font-bold  mt-2">5th August 2024</h4>
            <h4 className="">India Expo Centre & Mart, Greater Noida, NCR</h4>
          </div>
        </div>

        <div className="md:h-full py-5 px-3 bg-primary-foreground w-full mt-5 flex flex-col justify-center gap-5">
          <div className="text-center text-primary text-xl uppercase font-bold">
            Organised By
          </div>
          <div className="flex justify-center gap-10">
            <Dialog>
              <DialogTrigger>
                <Image
                  src={"/ihe.png"}
                  width={350}
                  height={100}
                  alt="IHE expo"
                />
              </DialogTrigger>
              <DialogContent className="max-h-[60vh] overflow-y-scroll app-scrollbar">
                <DialogHeader>
                  <DialogTitle>IHExpo 24</DialogTitle>
                </DialogHeader>
                The International Hospitality Expo (IHExpo) 2024 is set to take
                place in Greater Noida from 3-6 August 2024. This premier B2B
                event aims to bring together various sectors of the hospitality
                industry, including luxury hotels, restaurants, home-stays, and
                cloud kitchens. It provides an exceptional platform for industry
                professionals to network, discover new products and services,
                and stay updated with the latest trends.
                <br />
                <br />
                The expo features numerous exhibitors showcasing a wide range of
                products and solutions tailored for the hospitality industry.
                These include kitchen equipment, food and beverages,
                furnishings, and technology solutions. In addition, the event
                offers valuable opportunities for learning and development
                through workshops, seminars, and live demonstrations by experts.
                <br />
                <br />
                <p>
                  One of the key highlights of IHExpo 2024 is the diverse
                  participant profile, which includes CEOs, purchase heads,
                  project management companies, and other decision-makers in the
                  hospitality sector. This makes it an ideal venue for building
                  business relationships and exploring new opportunities. For
                  more detailed information, you can visit{" "}
                  <Link
                    href="https://ihexpo.com/visitor-registration"
                    className="inline text-blue-400"
                  >
                    the IHExpo official website
                  </Link>
                </p>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Image
                  src={"/bakery.png"}
                  width={350}
                  height={100}
                  alt="bakery review"
                />
              </DialogTrigger>
              <DialogContent className="max-h-[60vh] overflow-y-scroll app-scrollbar">
                <DialogHeader>
                  <DialogTitle>
                    Bakery Review Magazine by Hammer Publishers, India.{" "}
                  </DialogTitle>
                </DialogHeader>
                Bakery Review is a bi-monthly publication dedicated to the
                bakery industry, published by Hammer Publishers Pvt. Ltd. It
                stands out as one of the few magazines in India exclusively
                focused on this sector, offering in-depth coverage of the latest
                trends, developments, and insights from leading experts.
                <h3 className="text-lg font-semibold">Key Features</h3>
                <ul className="list-inside list-disc">
                  <li>
                    New Products and Technologies: The magazine covers the
                    latest innovations in baking equipment, ingredients, and
                    packaging solutions, helping industry professionals stay
                    updated.
                  </li>
                  <li>
                    Industry Trends and Developments: It highlights significant
                    trends such as the rise of artisanal baking and the
                    increasing demand for healthier bakery products.
                  </li>
                  <li>
                    Business and Management Advice: Bakery Review offers
                    valuable tips and strategies for bakery owners and operators
                    to enhance their business operations and management
                    practices.
                  </li>
                  <li>
                    Recipes and Baking Tips: It features contributions from
                    leading pastry chefs and bakers, providing readers with
                    recipes and practical baking tips.
                  </li>
                </ul>
                <h3 className="text-lg font-semibold">
                  Subscription Information
                </h3>
                <p>
                  Bakery Review is available for digital subscription, offering
                  instant access to its rich content. It is also available as
                  part of the Magzter GOLD subscription, providing access to
                  over 9,000 magazines and newspapers. For more information, you
                  can visit{" "}
                  <Link
                    href={"https://www.hammer.co.in"}
                    className="text-blue-400"
                  >
                    www.hammer.co.in
                  </Link>
                </p>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
      <Jury />
      <Participants/>
      <Sponsors/>
      <Contact />
    </>
  );
}
