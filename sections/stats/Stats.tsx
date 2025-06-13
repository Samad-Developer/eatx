"use client";


import { Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import React from "react";

type StatItem = {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
};

const stats: StatItem[] = [
  {
    title: "Total Users",
    value: "24,580",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    description: "+5.4% from last month",
  },
  {
    title: "Orders",
    value: "9,132",
    icon: <ShoppingCart className="w-6 h-6 text-green-600" />,
    description: "+2.1% vs previous week",
  },
  {
    title: "Revenue",
    value: "$187,300",
    icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
    description: "This month",
  },
  {
    title: "Growth",
    value: "18.7%",
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    description: "Year-over-year",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Live Statistics</h2>
          <p className="text-gray-600 mt-2">Real-time metrics from your dashboard</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col items-start gap-3 p-6">
                <div className="flex items-center gap-3">
                  {stat.icon}
                  <h3 className="text-lg font-semibold text-gray-800">{stat.title}</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                {stat.description && <p className="text-sm text-gray-500">{stat.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
