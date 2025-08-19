import RatingStars from "./RatingStars";

const StoreCard = ({ store, onRate }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold">{store.name}</h2>
      <p className="text-gray-600">{store.description}</p>
      <RatingStars rating={store.avgRating} />
      <button
        onClick={() => onRate(store.id)}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
      >
        Rate
      </button>
    </div>
  );
};
export default StoreCard;
