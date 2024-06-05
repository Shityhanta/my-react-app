import React from 'react';
import BearCat from '../assets/Bear Cat.jpg';
import phorn from '../assets/Palawan Hornbill.jpg';
import eagle from '../assets/Philippine Eagle.jpg';
import tama from '../assets/Tamaraw.jpg';
import Turtle from '../assets/Forest Turtle.jpg';
import Tarsier from '../assets/Philippine Tarsier.jpg';
import VPig from '../assets/Visayan Warty Pig.jpg';
import PCroc from '../assets/Philippine Crocodile.jpg';

const EndangeredSpecies = () => {
  return (
    <div className="bg-gradient-to-b from-green-400 to-green-600 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-8">ENDANGERED SPECIES IN THE PHILIPPINES</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Loop through the images and create cards dynamically */}
          {[BearCat, phorn, eagle, tama, Turtle, Tarsier, VPig, PCroc].map((imageUrl, index) => (
            <div className="bg-green shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700" key={index}>
              <a href="#">
                <img className="rounded-t-lg w-full h-40 object-cover" src={imageUrl} alt={`Endangered Species - ${getImageName(imageUrl)}`} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-white-900 font-bold text-xl tracking-tight mb-2 dark:text-white">{getImageName(imageUrl)}</h5>
                </a>
                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">Critically Endangered.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Function to extract image names from their paths (optional, but improves accessibility)
function getImageName(imageUrl) {
  const parts = imageUrl.split('/');
  return parts[parts.length - 1].split('.')[0]; // Get the filename without extension
}

export default EndangeredSpecies;
