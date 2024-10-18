import React from "react";
import Image1 from "../../assets/3.png";
import Image2 from "../../assets/4.png";
import Image3 from "../../assets/5.png";

const FoodData = [
  {
    image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Spiced Tofu Salad Bowl",
    desc: "A wholesome and refreshing salad featuring crispy tofu cubes tossed with a medley of fresh vegetables, including cherry tomatoes, spinach, and bell peppers. Lightly spiced for a perfect balance of flavor, this salad is drizzled with a zesty dressing to enhance the natural goodness of each ingredient. Ideal for a light and nutritious meal.",
  },
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Rainbow Veggie Power Bowl",
    desc: "A colorful, nutrient-packed bowl featuring fresh avocado slices, juicy tomatoes, crunchy cucumbers, and purple cabbage, paired with wholesome grains like quinoa and topped with a sprinkle of black sesame seeds. This power bowl is designed to energize and nourish with every bite, delivering a perfect balance of textures and flavors.",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Grilled Steak & Fresh Greens",
    desc: " A succulent, perfectly grilled steak served alongside a refreshing side salad of cherry tomatoes and mixed greens. Seasoned to perfection, the steak offers a rich and juicy bite, while the crisp salad adds a burst of freshness, balancing the flavors for a delightful dining experience. Ideal for those seeking a classic yet refined meal.",
  },
];

const TopList = () => {
  return (
    <div className="container py-14">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our top list</p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
