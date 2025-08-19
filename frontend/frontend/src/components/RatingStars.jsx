const RatingStars = ({ rating }) => {
  return (
    <div className="flex">
      {[1,2,3,4,5].map((star) => (
        <span key={star} className={star <= rating ? "text-yellow-500" : "text-gray-400"}>
          ★
        </span>
      ))}
    </div>
  );
};
export default RatingStars;
