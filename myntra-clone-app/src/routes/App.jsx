import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItem.jsx";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <div>
        <Header />
        <FetchItems />
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

        <Footer />
      </div>
    </>
  );
}

export default App;
