import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import StoreCard from "../components/StoreCard";
import { getStores } from "../services/storeService";

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getStores().then(setStores);
  }, []);

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {stores
          .filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
          .map((store) => (
            <StoreCard key={store.id} store={store} onRate={(id)=>alert("Rate store " + id)} />
          ))}
      </div>
    </div>
  );
};
export default StoreList;
