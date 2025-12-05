import { useState, useEffect } from "react";
import { fetchPolicies } from "../services/policyService";

export default function usePolicy() {
  const [policies, setPolicies] = useState([]);
  useEffect(() => {
    fetchPolicies()
      .then(setPolicies)
      .catch(() => {});
  }, []);
  return { policies, setPolicies };
}
