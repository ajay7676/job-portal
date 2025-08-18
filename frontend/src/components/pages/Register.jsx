import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Github,
  Chrome,
} from "lucide-react";
import { Link } from "react-router-dom";

const Register =() => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const buttonStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "linear-gradient(to right, #a855f7, #ec4899)",
    border: "none",
    borderRadius: "0.5rem",
    color: "white",
    fontWeight: "600",
    fontSize: "0.875rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };

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
          "}"}
      </style>

      <div className="h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background elements */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div className="pulse-bg absolute -top-[10em] -right-[10em] w-[20em] h-[20em] bg-[#a855f7] rounded-full mix-blend-multiply blur-[4rem] opacity-20" />
          <div className="pulse-bg-delay-1 absolute -top-[10em] -right-[10em] w-[20em] h-[20em] bg-[#3b82f6] rounded-full mix-blend-multiply blur-[4rem] opacity-20" />
          <div
            className="pulse-bg-delay-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[20rem] h-[20rem] bg-pink-500 rounded-full 
                mix-blend-multiply blur-[4rem] opacity-10"
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
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

        <div
          className=" w-full max-w-[28rem] bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl relative z-10 p-8 animate-slideInFromBottom"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className="hover-scale-110 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 ease-in-out"
              
            >
              <User
               className="w-6 h-6 text-white"
              />
            </div>
            <h1
              className="text-2xl font-bold text-white mb-2"
            >
              Create Account
            </h1>
            <p
               className="text-[#94a3b8] text-md m-0"
            >
              Join us today and start your journey
            </p>
          </div>

          {/* Social Login Buttons */}
          <div
           
             className="grid-cols-2 gap-3 mb-6 hidden"
          >
            <button
              className="social-button hover-scale flex-1 p-3 bg-slate-600/50 border border-slate-600 rounded-md text-slate-300 text-sm cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 ease-in-out"
            >
              <Github className="w-4 h-4" />
              GitHub
            </button>
            <button
              className="social-button hover-scale flex-1 p-3 bg-slate-600/50 border border-slate-600 rounded-md text-slate-300 text-sm cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 ease-in-out"
            >
              <Chrome className="w-4 h-4" />
              Google
            </button>
          </div>

          {/* Divider */}
          <div
             className="relative mb-6  items-center hidden"
          >
            <div
               className="flex-1 h-[1px] bg-[#475569]"
            />
            <span
               className="bg-[#1e293b] text-[#94a3b8] px-2 text-sm uppercase"
            >
              Or continue with
            </span>
            <div
             
               className="flex-1 h-[1px] bg-[#475569]"
            />
          </div>

          <form className="flex flex-col gap-4"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-3"
            >
              <div className="relative">
                <label
                  htmlFor="firstName"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    color: focusedField === "firstName" ? "#c084fc" : "#94a3b8",
                    marginBottom: "0.5rem",
                    transition: "color 0.2s ease",
                  }}
                >
                  First Name
                </label>
                <div className="relative" >
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John"
                    style={{
                      ...inputStyle(focusedField === "firstName"),
                      paddingLeft: "0.75rem",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "2px",
                      background: "linear-gradient(to right, #a855f7, #ec4899)",
                      transition: "width 0.3s ease",
                      width: focusedField === "firstName" ? "100%" : "0%",
                    }}
                  />
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <label
                  htmlFor="lastName"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    color: focusedField === "lastName" ? "#c084fc" : "#94a3b8",
                    marginBottom: "0.5rem",
                    transition: "color 0.2s ease",
                  }}
                >
                  Last Name
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Doe"
                    style={{
                      ...inputStyle(focusedField === "lastName"),
                      paddingLeft: "0.75rem",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "2px",
                      background: "linear-gradient(to right, #a855f7, #ec4899)",
                      transition: "width 0.3s ease",
                      width: focusedField === "lastName" ? "100%" : "0%",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div style={{ position: "relative" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: focusedField === "email" ? "#c084fc" : "#94a3b8",
                  marginBottom: "0.5rem",
                  transition: "color 0.2s ease",
                }}
              >
                Email
              </label>
              <div style={{ position: "relative" }}>
                <Mail
                  style={{
                    position: "absolute",
                    left: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "1rem",
                    height: "1rem",
                    color: focusedField === "email" ? "#c084fc" : "#94a3b8",
                    transition: "color 0.2s ease",
                  }}
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
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    background: "linear-gradient(to right, #a855f7, #ec4899)",
                    transition: "width 0.3s ease",
                    width: focusedField === "email" ? "100%" : "0%",
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={{ position: "relative" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: focusedField === "password" ? "#c084fc" : "#94a3b8",
                  marginBottom: "0.5rem",
                  transition: "color 0.2s ease",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock
                  style={{
                    position: "absolute",
                    left: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "1rem",
                    height: "1rem",
                    color: focusedField === "password" ? "#c084fc" : "#94a3b8",
                    transition: "color 0.2s ease",
                  }}
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
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#94a3b8",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94a3b8")
                  }
                >
                  {showPassword ? (
                    <EyeOff style={{ width: "1rem", height: "1rem" }} />
                  ) : (
                    <Eye style={{ width: "1rem", height: "1rem" }} />
                  )}
                </button>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    background: "linear-gradient(to right, #a855f7, #ec4899)",
                    transition: "width 0.3s ease",
                    width: focusedField === "password" ? "100%" : "0%",
                  }}
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div style={{ position: "relative" }}>
              <label
                htmlFor="confirmPassword"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color:
                    focusedField === "confirmPassword" ? "#c084fc" : "#94a3b8",
                  marginBottom: "0.5rem",
                  transition: "color 0.2s ease",
                }}
              >
                Confirm Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock
                  style={{
                    position: "absolute",
                    left: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "1rem",
                    height: "1rem",
                    color:
                      focusedField === "confirmPassword"
                        ? "#c084fc"
                        : "#94a3b8",
                    transition: "color 0.2s ease",
                  }}
                />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  onFocus={() => setFocusedField("confirmPassword")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="••••••••"
                  style={{
                    ...inputStyle(focusedField === "confirmPassword"),
                    paddingRight: "2.5rem",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#94a3b8",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94a3b8")
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff style={{ width: "1rem", height: "1rem" }} />
                  ) : (
                    <Eye style={{ width: "1rem", height: "1rem" }} />
                  )}
                </button>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    background: "linear-gradient(to right, #a855f7, #ec4899)",
                    transition: "width 0.3s ease",
                    width: focusedField === "confirmPassword" ? "100%" : "0%",
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="main-button group"
              style={buttonStyle}
            >
              Create Account
              <ArrowRight
                className="group-hover-translate"
                style={{
                  width: "1rem",
                  height: "1rem",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>
          </form>

          {/* Terms */}
          <p
            style={{
              fontSize: "0.75rem",
              color: "#94a3b8",
              textAlign: "center",
              margin: "1.5rem 0 1rem 0",
            }}
          >
            By creating an account, you agree to our{" "}
            <Link
              href="/terms"
              style={{
                color: "#c084fc",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d8b4fe")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c084fc")}
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              style={{
                color: "#c084fc",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d8b4fe")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c084fc")}
            >
              Privacy Policy
            </Link>
          </p>

          {/* Sign In Link */}
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", margin: 0 }}>
              Already have an account?{" "}
              <Link
                href="/signin"
                style={{
                  color: "#c084fc",
                  textDecoration: "none",
                  fontWeight: "600",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d8b4fe")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#c084fc")}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
