import { useEffect, useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'; // Importing your saved Navbar component

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    { title: "Users", stat: "12,345", color: "bg-indigo-500" },
    { title: "Sales", stat: "$34,567", color: "bg-green-500" },
    { title: "Performance", stat: "89%", color: "bg-yellow-500" },
  ];

  const data = [
    { name: 'Jan', uv: 400, pv: 2400 },
    { name: 'Feb', uv: 300, pv: 2210 },
    { name: 'Mar', uv: 500, pv: 2290 },
    { name: 'Apr', uv: 200, pv: 2000 },
  ];

  const activities = [
    "New user registered",
    "Order #1234 completed",
    "Server restarted",
    "New comment on post",
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen font-sans">

        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-4" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-4">Welcome to Your Dashboard</h1>
          <p className="text-xl mb-6 max-w-2xl">Experience smooth animations, dark mode, and responsive design all in one page.</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-lg font-semibold text-white transition">Get Started</button>
        </section>

        {/* Cards */}
        <section className="py-12" data-aos="fade-up">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {cards.map((card, idx) => (
              <div key={idx} className={`p-6 rounded-2xl text-white ${card.color} shadow-lg`}>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-4xl font-bold mt-4">{card.stat}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Charts */}
        <section className="py-12" data-aos="fade-up">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* Bar Chart */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-bold mb-4 text-center">Monthly Sales</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#6366f1" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-bold mb-4 text-center">Performance Over Time</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#10b981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Activity Feed */}
        <section className="py-12" data-aos="fade-up">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Recent Activities</h2>
            <ul className="space-y-4">
              {activities.map((activity, idx) => (
                <li key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 dark:text-gray-400 py-8">
          Built with ❤️ by Kaash using React + Tailwind + Recharts + AOS
        </footer>
      </div>
    </div>
  );
}

export default App;
