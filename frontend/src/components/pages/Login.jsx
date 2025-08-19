import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  LogIn,
  ArrowRight,
  Github,
  Chrome,
} from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const inputStyle = (focused) => ({
    width: "100%",
    padding: "0.75rem",
    paddingLeft: "2.5rem",
    backgroundColor: "rgba(51, 65, 85, 0.5)",
    border: focused ? "1px solid #a855f7" : "1px solid #475569",
    borderRadius: "0.5rem",
    color: "white",
    fontSize: "0.875rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: focused ? "0 0 0 3px rgba(168, 85, 247, 0.1)" : "none",
  });


  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      id: i,
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      delay: Math.random() * 2 + "s",
      duration: 3 + Math.random() * 4 + "s",
    });
  }

  return (
    <>
      <style jsx>
        {"@keyframes slideInFromBottom {" +
          "  from {" +
          "    opacity: 0;" +
          "    transform: translateY(2rem);" +
          "  }" +
          "  to {" +
          "    opacity: 1;" +
          "    transform: translateY(0);" +
          "  }" +
          "}" +
          "@keyframes float {" +
          "  0%, 100% {" +
          "    transform: translateY(0px) rotate(0deg);" +
          "  }" +
          "  50% {" +
          "    transform: translateY(-20px) rotate(180deg);" +
          "  }" +
          "}" +
          "@keyframes pulse {" +
          "  0%, 100% {" +
          "    opacity: 0.2;" +
          "  }" +
          "  50% {" +
          "    opacity: 0.4;" +
          "  }" +
          "}" +
          ".floating-particle {" +
          "  animation: float 3s ease-in-out infinite;" +
          "}" +
          ".pulse-bg {" +
          "  animation: pulse 3s ease-in-out infinite;" +
          "}" +
          ".pulse-bg-delay-1 {" +
          "  animation: pulse 3s ease-in-out infinite;" +
          "  animation-delay: 1s;" +
          "}" +
          ".pulse-bg-delay-2 {" +
          "  animation: pulse 3s ease-in-out infinite;" +
          "  animation-delay: 0.5s;" +
          "}" +
          ".hover-scale:hover {" +
          "  transform: scale(1.05);" +
          "}" +
          ".hover-scale-110:hover {" +
          "  transform: scale(1.1);" +
          "}" +
          ".group:hover .group-hover-translate {" +
          "  transform: translateX(0.25rem);" +
          "}" +
          ".social-button:hover {" +
          "  background-color: rgba(71, 85, 105, 0.5);" +
          "  color: white;" +
          "  transform: scale(1.05);" +
          "}" +
          ".main-button:hover {" +
          "  background: linear-gradient(to right, #9333ea, #db2777);" +
          "  transform: scale(1.05);" +
          "  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);" +
          "}" +
          ".checkbox-container {" +
          "  display: flex;" +
          "  align-items: center;" +
          "  gap: 0.5rem;" +
          "}" +
          ".custom-checkbox {" +
          "  width: 1rem;" +
          "  height: 1rem;" +
          "  border: 1px solid #475569;" +
          "  border-radius: 0.25rem;" +
          "  background-color: rgba(51, 65, 85, 0.5);" +
          "  cursor: pointer;" +
          "  transition: all 0.3s ease;" +
          "  position: relative;" +
          "}" +
          ".custom-checkbox:hover {" +
          "  border-color: #a855f7;" +
          "}" +
          ".custom-checkbox.checked {" +
          "  background-color: #a855f7;" +
          "  border-color: #a855f7;" +
          "}" +
          ".custom-checkbox.checked::after {" +
          "  content: '✓';" +
          "  position: absolute;" +
          "  top: 50%;" +
          "  left: 50%;" +
          "  transform: translate(-50%, -50%);" +
          "  color: white;" +
          "  font-size: 0.75rem;" +
          "  font-weight: bold;" +
          "}"}
      </style>

      <div className="h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="pulse-bg absolute -top-[10em] -right-[10em] w-[20em] h-[20em] bg-[#a855f7] rounded-full mix-blend-multiply blur-[4rem] opacity-20" />
          <div className="pulse-bg-delay-1 absolute -top-[10em] -right-[10em] w-[20em] h-[20em] bg-[#3b82f6] rounded-full mix-blend-multiply blur-[4rem] opacity-20" />
          <div
            className="pulse-bg-delay-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[20rem] h-[20rem] bg-pink-500 rounded-full 
                mix-blend-multiply blur-[4rem] opacity-10"
          />
        </div>

        {/* Floating particles */}
        <div style={{ position: "absolute", inset: 0 }}>
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="floating-particle absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        <div className="w-full max-w-[28rem] bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl relative z-10 p-8 animate-slideInFromBottom">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="hover-scale-110 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 ease-in-out">
              <LogIn className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-[#94a3b8] text-md m-0">
              Sign in to your account to continue
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="grid-cols-2 gap-3 mb-6 hidden">
            <button className="social-button hover-scale flex-1 p-3 bg-slate-600/50 border border-slate-600 rounded-md text-slate-300 text-sm cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 ease-in-out">
              <Github className="w-4 h-4" />
              GitHub
            </button>
            <button className="social-button hover-scale flex-1 p-3 bg-slate-600/50 border border-slate-600 rounded-md text-slate-300 text-sm cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 ease-in-out">
              <Chrome className="w-4 h-4" />
              Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6  items-center hidden">
            <div className="flex-1 h-[1px] bg-[#475569]" />
            <span className="bg-[#1e293b] text-[#94a3b8] px-2 text-sm uppercase">
              Or continue with
            </span>
            <div className="flex-1 h-[1px] bg-[#475569]" />
          </div>
          <form className="flex flex-col gap-6">
            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className={`block text-sm mb-2 transition-colors duration-200 ${
                  focusedField === "email"
                    ? "text-purple-400"
                    : "text-slate-400"
                }`}
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${
                    focusedField === "email"
                      ? "text-purple-400"
                      : "text-slate-400"
                  }`}
                />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="john@example.com"
                  style={inputStyle(focusedField === "email")}
                />
                <div
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                    focusedField === "email" ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className={`block text-sm mb-2 transition-colors duration-200 ${
                  focusedField === "password"
                    ? "text-purple-400"
                    : "text-slate-400"
                }`}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${
    focusedField === "password" ? "text-purple-400" : "text-slate-400"
  }`}
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="••••••••"
                  style={{
                    ...inputStyle(focusedField === "password"),
                    paddingRight: "2.5rem",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer transition-colors duration-200"

                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94a3b8")
                  }
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4"  />
                  ) : (
                    <Eye className="w-4 h-4"  />
                  )}
                </button>
                <div
                   className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
    focusedField === "password" ? "w-full" : "w-0"
  }`}
                />
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div
               className="flex justify-between items-center"
            >
              <div className="checkbox-container">
                <div
                  className={
                    formData.rememberMe
                      ? "custom-checkbox checked"
                      : "custom-checkbox"
                  }
                  onClick={() =>
                    handleInputChange("rememberMe", !formData.rememberMe)
                  }
                />
                <label
                  
                  className="text-sm text-[#94a3b8] cursor-pointer"
                  onClick={() =>
                    handleInputChange("rememberMe", !formData.rememberMe)
                  }
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                 className="text-sm text-[#c084fc] decoration-0 transition-colors duration-200"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d8b4fe")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#c084fc")}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
               className="main-button group w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white font-semibold text-sm cursor-pointer transition-all duration-300 flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight
                className="group-hover-translate w-4 h-4 transition-all duration-200"
              
              />
            </button>
          </form>

          {/* Sign Up Link */}
          {/* <div className="text-center mt-6">
            <p className="text-[#94a3b8] text-sm m-0">
              Don't have an account?{" "}
              <Link
                to="/register"
                 className="text-[#c084fc] decoration-0 font-semibold transition-colors duration-200"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d8b4fe")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#c084fc")}
              >
                Sign up
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
