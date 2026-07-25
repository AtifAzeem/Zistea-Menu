import FoodCard from "./FoodCard";

function CategorySection({ items }) {
  return (
    <div className="space-y-1.5">
      {items.map((item) => (
        <FoodCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default CategorySection;