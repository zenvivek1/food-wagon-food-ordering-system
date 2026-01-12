import { useState } from "react";

type Restaurant = {
  id: number;
  name: string;
  location: string;
  cuisine: string;
  image: string;
};

export default function RestaurantHero() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([
    {
      id: 1,
      name: "Spice Garden",
      location: "Indore",
      cuisine: "Indian",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    location: "",
    cuisine: "",
    image: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addRestaurant = () => {
    if (!form.name || !form.location) return;

    setRestaurants([
      ...restaurants,
      {
        id: Date.now(),
        name: form.name,
        location: form.location,
        cuisine: form.cuisine,
        image:
          form.image ||
          "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      },
    ]);

    setForm({ name: "", location: "", cuisine: "", image: "" });
  };

  const deleteRestaurant = (id: number) => {
    setRestaurants(restaurants.filter((r) => r.id !== id));
  };

  return (
    <div className="p-6 px-16 bg-zinc-50 h-screen space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-text-dark)]">
          Restaurants
        </h1>
        <p className="text-sm text-[var(--color-text-muted)]">
          Manage restaurants listed on your platform
        </p>
      </div>
   

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* ADD RESTAURANT */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Add Restaurant
          </h2>

          <div className="space-y-3">
            <input
              name="name"
              placeholder="Restaurant name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-[var(--color-primary)]"
            />

            <input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-[var(--color-primary)]"
            />

            <input
              name="cuisine"
              placeholder="Cuisine (optional)"
              value={form.cuisine}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-[var(--color-primary)]"
            />

            <input
              name="image"
              placeholder="Image URL (optional)"
              value={form.image}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-[var(--color-primary)]"
            />

            <button
              onClick={addRestaurant}
              className="w-full mt-2 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium py-2.5 transition"
            >
              Add Restaurant
            </button>
          </div>
        </div>

        {/* RESTAURANT LIST */}
        <div className="xl:col-span-2 space-y-4">
          {restaurants.map((r) => (
            <div
              key={r.id}
              className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4"
            >
              {/* IMAGE */}
              <img
                src={r.image}
                alt={r.name}
                className="w-28 h-20 rounded-lg object-cover bg-gray-100"
              />

              {/* DETAILS */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {r.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {r.location}
                  {r.cuisine && ` • ${r.cuisine}`}
                </p>
              </div>

              {/* ACTION */}
              <button
                onClick={() => deleteRestaurant(r.id)}
                className="self-center px-4 py-2 text-sm rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition"
              >
                Delete
              </button>
            </div>
          ))}

          {restaurants.length === 0 && (
            <div className="text-center text-gray-500 py-10">
              No restaurants added yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
