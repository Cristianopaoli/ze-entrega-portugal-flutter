
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryList = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              to={`/products/${category.id}`}
              key={category.id}
              className="group relative flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4 h-36 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 z-0">
                <div 
                  className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-opacity duration-300"
                ></div>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Category name */}
              <span className="text-white font-semibold text-center z-10">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
