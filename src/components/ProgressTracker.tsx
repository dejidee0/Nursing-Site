import React from 'react';
import { Check, Circle, ArrowRight } from 'lucide-react';
import type { RegistrationStep } from '../types';

interface ProgressTrackerProps {
  steps: RegistrationStep[];
  className?: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ steps, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              {/* Step Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  step.completed
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : step.current
                    ? 'border-emerald-600 text-emerald-600 bg-emerald-50'
                    : 'border-gray-300 text-gray-400 bg-white'
                }`}
              >
                {step.completed ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Circle className="h-5 w-5" fill="currentColor" />
                )}
              </div>
              
              {/* Step Title */}
              <div className="mt-2 text-center">
                <p
                  className={`text-sm font-medium ${
                    step.completed || step.current
                      ? 'text-emerald-600'
                      : 'text-gray-500'
                  }`}
                >
                  Step {step.id}
                </p>
                <p
                  className={`text-xs ${
                    step.completed || step.current
                      ? 'text-gray-900'
                      : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </p>
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                  steps[index + 1].completed ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              >
                <div className="relative">
                  <ArrowRight
                    className={`absolute -top-2 right-0 h-4 w-4 ${
                      steps[index + 1].completed ? 'text-emerald-600' : 'text-gray-300'
                    }`}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-8 w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-emerald-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${(steps.filter(step => step.completed).length / steps.length) * 100}%`
          }}
        ></div>
      </div>

      {/* Progress Text */}
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">
          {steps.filter(step => step.completed).length} of {steps.length} steps completed
        </p>
      </div>
    </div>
  );
};

export default ProgressTracker;