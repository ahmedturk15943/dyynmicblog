import React from "react";
import BlogCard from "./BlogCard"; 

export default function Mega() {
  const post = [
    {
      id: "1",
      title: "The Enchanting Hunza Valley",
      description:
        "Discover the stunning landscapes of Hunza Valley, surrounded by towering mountains, crystal-clear rivers, and vibrant meadows. Explore ancient forts, terraced fields, and rich cultural heritage. With its warm hospitality, serene ambiance, and breathtaking vistas, Hunza Valley is a paradise for nature lovers, photographers, and adventure enthusiasts, offering a magical escape into Pakistan’s beauty.",
      date: "2024-12-31",
      image: "/hunza.jpg",
    },
    {
      id: "2",
      title: "Fairy Meadows: A Trekker’s Paradise",
      description:
        "Experience the serene beauty of Fairy Meadows, nestled at the base of Nanga Parbat, famously known as the Killer Mountain. This breathtaking destination offers lush green meadows, unparalleled views of snow-capped peaks, and a peaceful escape into nature. Perfect for trekkers, photographers, and adventurers, Fairy Meadows is a true gem for exploring Pakistan’s majestic mountain landscapes.",
      date: "2024-12-31",
      image: "/Fairy.jpg",
    },
    // Other posts here...
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring The Beauty of Pakistan
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {post.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
