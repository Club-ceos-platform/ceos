import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Logo } from "../../../Logo/Logo";

export function FollowUsSection() {
  return (
    <div className="flex flex-col gap-8 bg-blue-950 text-white pt-16 pb-4 px-4">
      <h1 className="text-2xl font-bold">Club des CEO</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* __________________Section: Contact and Social__________________*/}
        <section id="contact_ceo" className="flex flex-col gap-4 p-4">
          <div className="flex flex-row gap-8 justify-between md:justify-start items-center">
            <div>
              <Logo />
            </div>
            <h2 className="font-bold text-base">Nous suivre</h2>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.96777984958!2d2.264633892548977!3d48.85882549164116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2smg!4v1724602040732!5m2!1sen!2smg"
            width="100%"
            height="100"
            className="rounded-md w-full md:w-[300px]"
            loading="lazy"
          ></iframe>
          <div className="flex flex-col gap-2 text-white text-center md:text-start">
            <h3 className="text-base">Nous contacter</h3>
            <Link href="/">
              <i className="pi pi-envelope text-xl"></i>
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-white text-center md:text-start">
            <h3 className="text-base">Nous suivre</h3>
            <div className="flex flex-row gap-4 items-center justify-center md:justify-start">
              <Link href="/">
                <i className="pi pi-google text-xl"></i>
              </Link>
              <Link href="/">
                <i className="pi pi-facebook text-xl"></i>
              </Link>
              <Link href="/">
                <i className="pi pi-github text-xl"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* __________________Section Information__________________ */}
        <section
          id="legal"
          className="flex flex-col text-center md:text-start p-4 gap-4"
        >
          {/* Legal Information */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-gray-50 text-base">
              Mentions légales
            </h2>
            <ul className="flex flex-col gap-1 text-gray-300">
              {["CGV", "Mentions légales"].map((item) => (
                <li key={item} className="text-sm cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="text-base text-gray-50 mb-1">Partenaires</li>
              {["Mécènes", "Partenaires"].map((item) => (
                <li key={item} className="text-sm text-gray-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="text-base text-gray-50 mb-1">Coin presse</li>
              {["Demande interview", "Relation Presse"].map((item) => (
                <li key={item} className="text-sm text-gray-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* __________________Section: Discover__________________ */}
        <section id="legal_and_discover" className="flex flex-col p-4 gap-4">
          <div
            id="discover_ceo"
            className="flex flex-col justify-start items-center gap-4"
          >
            <div className="flex flex-row justify-between w-full items-center">
              <h2 className="font-bold text-gray-50 text-base">
                Découvrez le Club des CEO
              </h2>
              <Image src="/gift.png" alt="gift icon" width={20} height={20} />
            </div>
            <p className="text-sm text-gray-300">
              Téléchargez l&apos;ebook - Le réseau des dirigeants transforme le
              monde
            </p>
            <Image src="/book.png" alt="ebook" width={100} height={100} />
            <form className="flex flex-col w-full gap-4">
              <div className="flex flex-col items-start gap-2 w-full">
                <label style={{ color: "white" }} className="text-sm w-1/5">
                  E-mail
                </label>
                <InputText
                  type="text"
                  placeholder="Adresse E-mail"
                  className="w-full"
                />
              </div>
              <div className="flex align-items-center space-x-2">
                <Checkbox checked={false} />
                <label style={{ color: "white" }} className="text-sm">
                  J&apos;accepte d&apos;être recontacté à des fins commerciales
                </label>
              </div>
              <Button label="Envoyer" outlined />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
