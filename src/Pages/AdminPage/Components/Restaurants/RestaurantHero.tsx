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
    <div className="p-6 px-16 bg-zinc-50 min-h-screen space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-text-dark)]">
          Restaurants
        </h1>
        <p className="text-sm text-[var(--color-text-muted)]">
          Manage restaurants listed on your platform
        </p>
      </div>

      {/* ADD RESTAURANT – FULL WIDTH */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Add Restaurant
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            name="name"
            placeholder="Restaurant name"
            value={form.name}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-[var(--color-primary)]"
          />

          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-[var(--color-primary)]"
          />

          <input
            name="cuisine"
            placeholder="Cuisine"
            value={form.cuisine}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-[var(--color-primary)]"
          />

          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        <button
          onClick={addRestaurant}
          className="mt-4 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium px-6 py-2.5 transition"
        >
          Add Restaurant
        </button>
      </div>

      {/* RESTAURANT LIST BELOW */}
      <div className="space-y-4">
        {restaurants.map((r) => (
          <div
            key={r.id}
            className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4"
          >
            <img
              src={r.image}
              alt={r.name}
              className="w-28 h-20 rounded-lg object-cover bg-gray-100"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {r.name}
              </h3>
              <p className="text-sm text-gray-500">
                {r.location}
                {r.cuisine && ` • ${r.cuisine}`}
              </p>
            </div>

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
  );
}
