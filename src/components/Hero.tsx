import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { STATS } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Hero Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Elevating Nursing</span>
            <span className="block text-emerald-600">& Midwifery Standards</span>
            <span className="block text-lg md:text-xl font-normal text-gray-600 mt-4">
              in Nigeria
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A next-generation platform for seamless accreditation, education, 
            and career advancement in healthcare excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Watch Demo
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  {index === 0 && <Users className="h-12 w-12 text-emerald-600" />}
                  {index === 1 && <Award className="h-12 w-12 text-emerald-600" />}
                  {index === 2 && <TrendingUp className="h-12 w-12 text-emerald-600" />}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Trusted by leading healthcare institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-400 font-semibold">University of Lagos</div>
              <div className="text-gray-400 font-semibold">Ahmadu Bello University</div>
              <div className="text-gray-400 font-semibold">University of Ibadan</div>
              <div className="text-gray-400 font-semibold">LUTH</div>
              <div className="text-gray-400 font-semibold">UCH</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;