"use client";

import { signOut } from "@/lib/actions/auth.action";

export default function LogoutButton() {
  const handleSignOut = async () => {
    await signOut();
    window.location.reload(); // Refresh the page to update authentication state
  };

  return <button onClick={handleSignOut} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">Sign Out</button>;
}
