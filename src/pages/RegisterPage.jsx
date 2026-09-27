import { Icon } from "../components/Icon";
import { PrimaryButton } from "../components/PrimaryButton";
import { TextField } from "../components/TextField";
import { useState } from "react";
import axios from "axios";

export function RegisterPage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

//   const handleCreateAccount = async () => {

//     const payload = {
//       username,
//       firstName,
//       lastName,
//       address,
//       nationalId,
//       email,
//       phone,
//       password,
//       confirmPassword,
//     }
    
//     try{
//       console.log("Inside the try b;ovk");

//       const registerResponse = await axios.post("https://chowder-outthink-washing.ngrok-free.dev/api/User/register", payload);
//       console.log("Response from server:", registerResponse.data);

//       if(registerResponse.status === 200 || registerResponse.status === 201){
//         alert("Account created successfully!");
//         const sendEmailResponse = await axios.post(
//   "https://chowder-outthink-washing.ngrok-free.dev/api/User/SendEmailToVerify",
//   null, // Second argument must be null (no body)
//   {
//     params: {
//       email: payload.email,
//     },
//   }
// );
//         console.log("Response from email verification:", sendEmailResponse.data);

//       }
//     }catch(error){
//       console.error("Error creating account:", error);
//     }
    
    

    
//   };

const handleCreateAccount = async () => {

    const payload = {
      username,
      firstName,
      lastName,
      address,
      nationalId,
      email,
      phone,
      password,
      confirmPassword,
    }

    try{
      console.log("Inside the try block");

      const registerResponse = await axios.post(
        "https://localhost:7103/api/User/register",
        payload
      );
      console.log("Response from server:", registerResponse.data);

      if(registerResponse.status === 200 || registerResponse.status === 201){
        alert("Account created successfully!");
        const sendEmailResponse = await axios.post(
          "https://localhost:7103/api/User/SendEmailToVerify",
          null, // Second argument must be null (no body)
          {
            params: {
              email: payload.email,
            },
          }
        );
        console.log("Response from email verification:", sendEmailResponse.data);
        if(sendEmailResponse.status === 200 || sendEmailResponse.status === 201){
          sessionStorage.setItem("verifyEmail", payload.email);
          console.log("Stored email:", sessionStorage.getItem("verifyEmail"));
          window.location.hash = "verify-email";
        }
      }
    }catch(error){
      console.error("Error creating account:", error);
    }

  };

  return (
    <main className="signup-page">
      <section className="signup-card" aria-labelledby="signup-title">
        <a className="back-link" href="#home">
          <Icon name="arrow" size={18} /> Back to home
        </a>

        <header className="signup-header">
          <p className="eyebrow">Start your journey</p>
          <h1 id="signup-title">Create your account</h1>
          <p>
            Join thousands of people building better habits, one day at a time.
          </p>
        </header>

        <div>
          <div className="section-heading">Personal information</div>
          <div className="form-fields">
            <TextField
              label="Username"
              icon="user"
              placeholder="e.g. john_doe"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="name-fields">
              <TextField
                label="First name"
                placeholder="John"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="Last name"
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <TextField
              label="Address"
              icon="location"
              placeholder="123 Main Street, City"
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              label="National ID number"
              icon="idCard"
              placeholder="e.g. 1990199001234"
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>

          <div className="section-heading section-heading--separated">
            Contact details
          </div>
          <div className="form-fields">
            <TextField
              label="Email address"
              icon="mail"
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Phone number"
              icon="phone"
              type="tel"
              placeholder="(555) 000-0000"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="section-heading section-heading--separated">
            Security
          </div>
          <div className="form-fields">
            <TextField
              label="Password"
              icon="lock"
              type="password"
              placeholder="At least 8 characters"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm password"
              icon="lock"
              type="password"
              placeholder="Re-enter password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <label className="terms">
            <input type="checkbox" defaultChecked />
            <span>
              I agree to the <a href="#terms">Terms of Service</a> and{" "}
              <a href="#privacy">Privacy Policy</a>
            </span>
          </label>

          <PrimaryButton onClick={handleCreateAccount}>
            Create account
          </PrimaryButton>
        </div>

        <p className="login-prompt">
          Already have an account? <a href="#login">Log in</a>
        </p>
      </section>
    </main>
  );
}
