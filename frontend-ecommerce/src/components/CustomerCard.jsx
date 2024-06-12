"use client";
import { useRouter } from "next/navigation";

export function CustomerCard({ id, firstName, lastName }) {
  const router = useRouter();
  return (
    <div
      className="bg-slate-800 p-3 hover:bg-slate-800 hover:cursor-pointer"
      onClick={() => router.push(`/customer/edit/${id}`)}
    >
      <h3 className="font-bold text-2xl mb-2">
        {firstName.toUpperCase()} {lastName.toUpperCase()}
      </h3>
    </div>
  );
}
