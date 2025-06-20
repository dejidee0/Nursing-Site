import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Bell, CreditCard, Calendar, Download, 
  Clock, CheckCircle, AlertCircle, BookOpen,
  MessageCircle, TrendingUp, Award, Target
} from 'lucide-react';
import type { User as UserType, Notification } from '../types';

const Dashboard: React.FC = () => {
  const [user] = useState<UserType>({
    id: '1',
    name: 'Dr. Adaora Okafor',
    email: 'adaora.okafor@email.com',
    licenseNumber: 'RN-2024-001234',
    applicationStatus: 'under-review',
    nextExam: {
      name: 'Community Nursing',
      date: 'July 15, 2025',
      daysRemaining: 14
    },
    notifications: [
      {
        id: '1',
        title: 'New CPD Webinar Available',
        message: 'Digital Health Technologies webinar on July 5, 2025',
        type: 'info',
        timestamp: '2025-01-15T10:00:00Z',
        read: false
      },
      {
        id: '2',
        title: 'Application Update',
        message: 'Your certification application is under review',
        type: 'warning',
        timestamp: '2025-01-14T14:30:00Z',
        read: false
      }
    ]
  });

  const quickActions = [
    { title: 'Pay Fees', icon: CreditCard, color: 'bg-blue-500', href: '/payments' },
    { title: 'Book Exam', icon: Calendar, color: 'bg-emerald-500', href: '/exams' },
    { title: 'Download Certificate', icon: Download, color: 'bg-purple-500', href: '/certificates' },
    { title: 'CPD Activities', icon: BookOpen, color: 'bg-orange-500', href: '/cpd' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-emerald-600 bg-emerald-100';
      case 'under-review': return 'text-yellow-600 bg-yellow-100';
      case 'pending': return 'text-blue-600 bg-blue-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-5 w-5 text-emerald-500" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'error': return <AlertCircle className="h-5 w-5 text-red-500" />;
      default: return <Bell className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome, {user.name}!
              </h1>
              {user.nextExam && (
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-emerald-100">
                    Your next exam ({user.nextExam.name}) is in{' '}
                    <span className="font-bold text-white">{user.nextExam.daysRemaining} days</span>
                  </span>
                </div>
              )}
            </div>
            <div className="text-right">
              <p className="text-emerald-100">License Number</p>
              <p className="text-xl font-bold">{user.licenseNumber}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.href}
                    className="group p-4 rounded-xl border border-gray-200 hover:border-emerald-500 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-emerald-600">
                      {action.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Status Trackers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Application Status */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Application Progress</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(user.applicationStatus)}`}>
                    {user.applicationStatus.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <div className="relative">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">80% Complete</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    <span className="text-gray-600">Documents submitted</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    <span className="text-gray-600">Payment processed</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-600">Under review</span>
                  </div>
                </div>
              </div>

              {/* Upcoming Exam */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Upcoming Exam</h3>
                  <Calendar className="h-5 w-5 text-emerald-600" />
                </div>
                {user.nextExam ? (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{user.nextExam.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">{user.nextExam.date}</p>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-emerald-700">Days remaining</span>
                        <span className="text-2xl font-bold text-emerald-600">
                          {user.nextExam.daysRemaining}
                        </span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg transition-colors">
                      Prepare for Exam
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-500">No upcoming exams</p>
                )}
              </div>
            </div>

            {/* Performance Analytics */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Progress</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">85%</h4>
                  <p className="text-sm text-gray-600">Average Score</p>
                </div>
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">12</h4>
                  <p className="text-sm text-gray-600">CPD Hours</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">3</h4>
                  <p className="text-sm text-gray-600">Certifications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {user.notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border ${notification.read ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'}`}
                  >
                    <div className="flex items-start space-x-3">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          {new Date(notification.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                View All Notifications
              </button>
            </div>

            {/* Support Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">24/7 Support</h3>
              <div className="space-y-4">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Ask NNEC Assistant
                </button>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Need human support?</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">📧 support@nnec.gov.ng</p>
                    <p className="text-gray-600">📞 +234-800-NNEC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource Hub */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Resource Hub</h3>
              <div className="space-y-3">
                <Link
                  to="/resources/ebooks"
                  className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-sm font-medium text-gray-900">eBooks & Guides</span>
                  </div>
                </Link>
                <Link
                  to="/resources/prep-tools"
                  className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-sm font-medium text-gray-900">Prep Tools</span>
                  </div>
                </Link>
                <Link
                  to="/faq"
                  className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-sm font-medium text-gray-900">FAQ</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;