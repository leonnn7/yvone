import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[70vh]">
        <img
          src="https://picsum.photos/1920/1080?random=1"
          alt="Häkeldeckchen Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4">Häkelkunst</h1>
            <p className="text-xl mb-8">Handgefertigte Häkeldeckchen mit Liebe gemacht</p>
            <Link
              to="/shop"
              className="bg-white text-gray-800 px-8 py-3 rounded-md hover:bg-gray-100"
            >
              Zum Shop
            </Link>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Unsere Kollektion</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Klassische Designs</h3>
            <p className="text-gray-600">Traditionelle Muster in höchster Qualität</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Personalisierbar</h3>
            <p className="text-gray-600">Ihre individuellen Wünsche werden wahr</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Schweizer Handarbeit</h3>
            <p className="text-gray-600">Jedes Stück ein Unikat</p>
          </div>
        </div>
      </section>
    </div>
  );
};