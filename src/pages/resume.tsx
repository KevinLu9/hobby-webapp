import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import "../App.css";
import FlipCard from "../components/FlipCard";

export default function Resume() {
  return (
    <>
      <div className="flex flex-col h-screen w-full overflow-hidden">
        <div className="flex-1 flex flex-col gap-2 w-full items-center justify-center">
          <div className="flex gap-2 items-center animate-[fadeIn_1s]">
            <ClipboardDocumentListIcon className="w-8 h-8 p-0 m-0" />
            <p className="font-bold text-2xl uppercase text-center">Resume</p>
          </div>
          <div className="w-full md:w-2/3 h-2/3 md:h-fit aspect-video bg-base-100 rounded-md shadow-xl animate-[slideRight_1s]">
            <div className="m-4">
              <FlipCard front={<>FRONT</>} back={<>BACK</>} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
