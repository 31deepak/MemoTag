"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Activity, Clock, Users, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(isLogin ? "Logging in..." : "Signing up...", formData);
    setIsModalOpen(false); // Close modal after submission
  };

  function handleClick(event: React.MouseEvent<SVGSVGElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              AI for Dementia Care
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Empowering caregivers with AI-powered monitoring and early detection for better dementia care
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)} 
            >
              Get Started <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Login/Signup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded shadow w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
                />
              </div>
              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={toggleForm}
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
            <button
              className="mt-4 w-full bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Problem Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Growing Challenge</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">55M+</h3>
                <p className="text-gray-600 dark:text-gray-300">People living with dementia worldwide</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Clock className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">30%</h3>
                <p className="text-gray-600 dark:text-gray-300">Cases go undiagnosed until late stages</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Activity className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">$1T+</h3>
                <p className="text-gray-600 dark:text-gray-300">Annual global cost of dementia care</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How MemoTag Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <Brain className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  24/7 behavioral analysis using advanced AI algorithms
                </p>
              </Card>
              <Card className="p-6">
                <Activity className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Early Detection</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Identify cognitive changes before they become severe
                </p>
              </Card>
              <Card className="p-6">
                <Users className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Caregiver Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Real-time insights and personalized care recommendations
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">1000+</h3>
                <p className="text-gray-600 dark:text-gray-300">Active Users</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">95%</h3>
                <p className="text-gray-600 dark:text-gray-300">Detection Accuracy</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600 dark:text-gray-300">Healthcare Partners</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">4.9</h3>
                <p className="text-gray-600 dark:text-gray-300">User Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Dementia Care?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of caregivers using MemoTag to provide better care for their loved ones.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => setIsModalOpen(true)}>
              Request Demo
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}