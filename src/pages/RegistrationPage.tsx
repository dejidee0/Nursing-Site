import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, Shield, Users, CheckCircle, AlertCircle } from 'lucide-react';
import ProgressTracker from '../components/ProgressTracker';
import type { RegistrationStep } from '../types';

const RegistrationPage: React.FC = () => {
  const [userType, setUserType] = useState<'fresh' | 'returning' | null>(null);
  const [trainingLocation, setTrainingLocation] = useState<'nigeria' | 'abroad' | null>(null);
  const [returningType, setReturningType] = useState<'license' | 'retake' | 'upgrade' | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const steps: RegistrationStep[] = [
    { id: 1, title: 'Personal Info', completed: false, current: currentStep === 1 },
    { id: 2, title: 'Education', completed: false, current: currentStep === 2 },
    { id: 3, title: 'Documents', completed: false, current: currentStep === 3 },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      // Update steps completion
      const newSteps = steps.map(step => ({
        ...step,
        completed: step.id < currentStep + 1,
        current: step.id === currentStep + 1
      }));
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Register with NNEC</h1>
          <p className="text-gray-600">Join over 50,000 professionals registered in 2025</p>
        </div>

        {/* Security Badge */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-8">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-emerald-600 mr-3" />
            <div>
              <p className="text-sm font-medium text-emerald-800">
                Your data is protected with bank-level encryption
              </p>
              <p className="text-xs text-emerald-600">SSL encrypted • GDPR compliant</p>
            </div>
          </div>
        </div>

        {!userType ? (
          /* User Type Selection */
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome! Let's get started
              </h2>
              <p className="text-gray-600">Please select your registration type</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setUserType('fresh')}
                className="group p-8 border-2 border-gray-200 hover:border-emerald-500 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="bg-emerald-100 group-hover:bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Users className="h-8 w-8 text-emerald-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Applicant</h3>
                  <p className="text-gray-600">First time registration for nursing/midwifery certification</p>
                </div>
              </button>

              <button
                onClick={() => setUserType('returning')}
                className="group p-8 border-2 border-gray-200 hover:border-emerald-500 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="bg-emerald-100 group-hover:bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <CheckCircle className="h-8 w-8 text-emerald-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Returning User</h3>
                  <p className="text-gray-600">I have existing records or need additional services</p>
                </div>
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-sm text-gray-600">
                <strong>50,000+</strong> professionals have registered this year
              </p>
            </div>
          </div>
        ) : userType === 'fresh' && !trainingLocation ? (
          /* Training Location Selection */
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Where did you complete your training?
              </h2>
              <p className="text-gray-600">This helps us customize your registration process</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setTrainingLocation('nigeria')}
                className="group p-8 border-2 border-gray-200 hover:border-emerald-500 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🇳🇬</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trained in Nigeria</h3>
                  <p className="text-gray-600">Graduated from a Nigerian institution</p>
                </div>
              </button>

              <button
                onClick={() => setTrainingLocation('abroad')}
                className="group p-8 border-2 border-gray-200 hover:border-emerald-500 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trained Abroad</h3>
                  <p className="text-gray-600">Studied outside Nigeria</p>
                </div>
              </button>
            </div>

            <button
              onClick={() => setUserType(null)}
              className="mt-6 text-emerald-600 hover:text-emerald-700 text-sm"
            >
              ← Back to user type selection
            </button>
          </div>
        ) : userType === 'returning' && !returningType ? (
          /* Returning User Options */
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What can we help you with?
              </h2>
              <p className="text-gray-600">Select the service you need</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setReturningType('license')}
                className="w-full p-6 border-2 border-gray-200 hover:border-emerald-500 rounded-xl transition-all duration-200 hover:shadow-lg text-left group"
              >
                <div className="flex items-center">
                  <div className="bg-emerald-100 group-hover:bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors">
                    <CheckCircle className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">I have a License Number</h3>
                    <p className="text-gray-600">Renew license or update information</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setReturningType('retake')}
                className="w-full p-6 border-2 border-gray-200 hover:border-emerald-500 rounded-xl transition-all duration-200 hover:shadow-lg text-left group"
              >
                <div className="flex items-center">
                  <div className="bg-emerald-100 group-hover:bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors">
                    <AlertCircle className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">I need Exam Retakes</h3>
                    <p className="text-gray-600">Register for exam retakes or supplements</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setReturningType('upgrade')}
                className="w-full p-6 border-2 border-gray-200 hover:border-emerald-500 rounded-xl transition-all duration-200 hover:shadow-lg text-left group"
              >
                <div className="flex items-center">
                  <div className="bg-emerald-100 group-hover:bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors">
                    <Users className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Professional Upgrade</h3>
                    <p className="text-gray-600">Advance your certification or specialization</p>
                  </div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setUserType(null)}
              className="mt-6 text-emerald-600 hover:text-emerald-700 text-sm"
            >
              ← Back to user type selection
            </button>
          </div>
        ) : (
          /* Registration Form */
          <div className="space-y-8">
            {/* Progress Tracker */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ProgressTracker steps={steps} />
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="+234"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Educational Background</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Institution Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter institution name"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Program Type *
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                          <option value="">Select program</option>
                          <option value="nursing">Nursing</option>
                          <option value="midwifery">Midwifery</option>
                          <option value="both">Nursing & Midwifery</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Graduation Year *
                        </label>
                        <input
                          type="number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="YYYY"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Document Upload</h2>
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-500 transition-colors">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Drag and drop your documents
                      </h3>
                      <p className="text-gray-600 mb-4">
                        or click to browse files
                      </p>
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors">
                        Choose Files
                      </button>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Required Documents:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Academic certificates</li>
                        <li>• Valid ID card</li>
                        <li>• Passport photographs</li>
                        <li>• Professional references</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
                >
                  {currentStep === 3 ? 'Submit Application' : 'Next Step'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;