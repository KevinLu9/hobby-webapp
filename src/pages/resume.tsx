import Navbar from "../components/Navbar";
import "../App.css";
import FlipCard from "../components/FlipCard";

export default function Resume() {
  return (
    <>
      <Navbar>
        <div className="">
          <p className="slide-left font-bold text-xl">Resume</p>
          <div>
            <FlipCard front={<>FRONT</>} back={<>BACK</>} />
          </div>
        </div>
      </Navbar>
    </>
  );
}
