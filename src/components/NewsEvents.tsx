import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ExternalLink, Badge, ArrowRight } from "lucide-react";
import { NEWS_EVENTS } from "../utils/constants";
import type { NewsEvent } from "../types";

const NewsEvents: React.FC = () => {
  const getEventIcon = (type: NewsEvent["type"]) => {
    switch (type) {
      case "certification":
        return "🎓";
      case "workshop":
        return "💻";
      case "exam":
        return "📝";
      default:
        return "📅";
    }
  };

  const getEventColor = (type: NewsEvent["type"]) => {
    switch (type) {
      case "certification":
        return "bg-blue-100 text-blue-800";
      case "workshop":
        return "bg-purple-100 text-purple-800";
      case "exam":
        return "bg-emerald-100 text-emerald-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            News & Active Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest certifications, workshops, and
            professional development opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="p-8">
                {/* Header with Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{getEventIcon(event.type)}</div>
                  {event.isNew && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 animate-pulse">
                      <Badge className="h-3 w-3 mr-1" />
                      NEW
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Type Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getEventColor(
                      event.type
                    )}`}
                  >
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>

                {/* Deadline */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Deadline: {event.deadline}</span>
                </div>

                {/* CTA */}
                <Link
                  to={event.registrationUrl || "/register"}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors group"
                >
                  Register Now
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Animated Border */}
              <div className="h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-flex items-center px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            View All Opportunities
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
