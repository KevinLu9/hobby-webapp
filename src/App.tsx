import "./App.css";
import Navbar from "./components/Navbar";

export default function App(props: { [key: string]: string }) {
  return (
    <>
      <Navbar>{props.children}</Navbar>
    </>
  );
}
