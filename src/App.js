import { useSelector } from "react-redux";
import ThemeSetting from "./components/ThemeSetting";
import Container from "./components/Container";
export const BASE_URL = "http://localhost:8000";
function App() {
  const { mode, themeset } = useSelector((state) => state.global);
  // useEffect(() => {
  //   const fethc = async () => {
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}/imageret`);
  //       setmine(data[0]?.image);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fethc();
  // }, []);

  return (
    <div
      style={{ minHeight: "100vh" }}
      className={` w-full   ${
        mode === "dark" ? "bg-[#20232A]" : "bg-[#f1f7f7] "
      }  `}
    >
      {themeset && <ThemeSetting />}
      <Container />
    </div>
  );
}

export default App;
