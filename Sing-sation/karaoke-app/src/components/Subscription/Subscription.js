import React, { useState } from "react";
import { subscribeUser } from "../utils/payment";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const handleSubscription = async () => {
    const success = await subscribeUser(selectedPlan);
    if (success) {
      alert("Subscription successful!");
    } else {
      alert("Subscription failed.");
    }
  };

  return (
    <div className="subscription">
      <h2>Select a Plan</h2>
      <select onChange={(e) => setSelectedPlan(e.target.value)}>
        <option value="basic">Basic Plan</option>
        <option value="premium">Premium Plan</option>
        <option value="vip">VIP Plan</option>
      </select>
      <button onClick={handleSubscription}>Subscribe</button>
    </div>
  );
};

export default Subscription;
