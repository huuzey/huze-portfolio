import { useSelector } from "react-redux";
import ThemeSetting from "./components/ThemeSetting";
import Container from "./components/Container";

function App() {
  const { currentColor, mode, themeset } = useSelector((state) => state.global);
  return (
    <div
      style={{ minHeight: "100vh" }}
      className={` w-full  ${
        mode === "dark" ? "bg-[#20232A]" : "bg-[#f1f7f7] "
      }  `}
    >
      {themeset && <ThemeSetting />}
      <Container />
    </div>
  );
}

export default App;
