"use client";
import { CustomerCard } from "@/components/CustomerCard";
import { getCustomers } from "@/services/ecommerce.api";
import { useEffect, useState } from "react";

export default function Home() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCustomers = async () => {
      const data = await getCustomers();
      setCustomers(data);
      console.log(data);
      setLoading(false);
    };
    loadCustomers();
  }, []);
  return (
    <section className="container mx-auto mt-10">
      <div className="grid grid-cols-3 gap-3">
        {customers.map(({ id, firstName, lastName }) => (
          <CustomerCard
            key={id}
            id={id}
            firstName={firstName}
            lastName={lastName}
          />
        ))}
      </div>
    </section>
  );
}
