import { useState, useEffect } from "react";

export default function useCompliance() {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    /* fetch compliance status */
  }, []);
  return { status, setStatus };
}
