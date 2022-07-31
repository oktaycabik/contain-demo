import React from "react";
import Link from "next/link";
import categories from "../data/category.json";
const CategoryList = () => {
  return (
    <div className="container mt-10">
      <div className="category-list">
        {categories.map((category) => (
          <div className="mx-3">
            <Link href={`${category.slug}`}>
              <a className="category-name" key={category.id}>
                {category.category}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
