import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MessageCircle, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">NNEC</h3>
                <p className="text-sm text-gray-300">Nigerian Nursing Excellence Council</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Elevating nursing and midwifery standards across Nigeria through innovative 
              technology and comprehensive support systems.
            </p>
            <div className="text-sm text-gray-400">
              <p>© {currentYear} Nigerian Nursing Excellence Council.</p>
              <p className="mt-1">Powered by <span className="text-emerald-400">TechHealth Solutions</span></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/register" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Register Now
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Get Support
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Options */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support Options</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:support@nnec.gov.ng" className="text-sm text-gray-300 hover:text-emerald-400">
                    support@nnec.gov.ng
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+234800NNEC" className="text-sm text-gray-300 hover:text-emerald-400">
                    +234-800-NNEC
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="font-medium">Live Chat</p>
                  <p className="text-sm text-gray-300">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors">
                <Star className="h-4 w-4" />
                <span className="text-sm font-medium">Rate Our Service</span>
              </button>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2">(4.9/5)</span>
              </div>
            </div>
            <div className="text-sm text-gray-400 mt-4 sm:mt-0">
              <p>Bank-level security • SSL encrypted • GDPR compliant</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;