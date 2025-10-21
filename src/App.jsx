import { Wrapper } from "./components/Helper/Helper";
import Navbar from "./components/Navbar";
import CategoriesBar from "./components/CategoriesBar";

const App = () => {
  const category = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
    "test9",
    "test10",
  ];
  return (
    <section>
      <Navbar />
      <Wrapper>
        <CategoriesBar list={category} />
      </Wrapper>
    </section>
  );
};

export default App;
