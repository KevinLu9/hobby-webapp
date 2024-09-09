import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { LogoLinkedin, LogoGithub } from "@carbon/icons-react";

export default function Home() {
  const profileDetails = {
    name: "Kevin Lu",
    address: "3174, Melbourne, Victoria, Australia",
    phone: "+61 424 386 242",
    email: "kevin.lu902@gmail.com",
  };

  const [addressCopied, setAddressCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  return (
    <>
      <div className="flex flex-col h-screen w-full overflow-hidden">
        <div className="flex-1 flex flex-col gap-2 w-full items-center justify-center">
          <div className="flex gap-2 items-center animate-[fadeIn_1s]">
            <HomeIcon className="w-8 h-8 p-0 m-0" />
            <p className="font-bold text-2xl uppercase text-center">Home</p>
          </div>
          <div className="w-full md:w-2/3 h-2/3 md:h-fit max-h-[80dvh] aspect-video bg-base-100 rounded-md shadow-xl relative animate-[slideRight_1s]">
            {/* Social Media Icons START */}
            <div className="flex flex-row justify-start items-center gap-1 absolute right-1 bottom-1">
              <a
                target="_blank"
                href="https://github.com/KevinLu9"
                className="btn btn-sm btn-ghost p-0"
              >
                <LogoGithub className="w-full h-full dark:text-gray-300" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kevin-lu-a59a21224/"
                className="btn btn-sm btn-ghost p-0"
              >
                <LogoLinkedin className="w-full h-full dark:text-gray-300" />
              </a>
            </div>
            {/* Social Media Icons END */}
            {/* Profile Details START */}
            <div className="w-full h-full flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-20 justify-start md:justify-center">
              <div className="w-fit h-1/3 aspect-square">
                <img
                  src="profile_pic.png"
                  className="w-full h-full aspect-square max-w-[300px] max-h-[300px] rounded-full outline outline-black dark:outline-white"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-5xl lg:text-6xl mb-4 text-center md:text-left">
                  {profileDetails.name}
                </p>
                <div className="flex items-center gap-1">
                  <button
                    className="flex gap-2 items-center btn-xs btn-ghost rounded-sm w-fit"
                    onClick={() => {
                      navigator.clipboard.writeText(profileDetails.address);
                      setAddressCopied(true);
                      setTimeout(() => {
                        setAddressCopied(false);
                      }, 1000);
                    }}
                  >
                    <MapPinIcon className="w-5 h-5" />
                    <p className="whitespace-pre-nowrap text-nowrap">
                      {profileDetails.address}
                    </p>
                  </button>

                  <div
                    className={`flex items-center gap-1 animate-[bounce_0.5s_infinite] ${!addressCopied && "invisible"}`}
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    <p className="text-xs">Copied</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    className="flex gap-2 items-center btn-xs btn-ghost rounded-sm w-fit"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        profileDetails.phone.replace(/ /g, "")
                      );
                      setPhoneCopied(true);
                      setTimeout(() => {
                        setPhoneCopied(false);
                      }, 1000);
                    }}
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <p className="whitespace-pre-wrap">
                      {profileDetails.phone}
                    </p>
                  </button>

                  <div
                    className={`flex items-center gap-1 animate-[bounce_0.5s_infinite] ${!phoneCopied && "invisible"}`}
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    <p className="text-xs">Copied</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    className="flex gap-2 items-center btn-xs btn-ghost rounded-sm w-fit"
                    onClick={() => {
                      navigator.clipboard.writeText(profileDetails.email);
                      setEmailCopied(true);
                      setTimeout(() => {
                        setEmailCopied(false);
                      }, 1000);
                    }}
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    <p className="whitespace-pre-wrap">
                      {profileDetails.email}
                    </p>
                  </button>
                  <div
                    className={`flex items-center gap-1 animate-[bounce_0.5s_infinite] ${!emailCopied && "invisible"}`}
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    <p className="text-xs">Copied</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details END */}
          </div>
        </div>
      </div>
    </>
  );
}
