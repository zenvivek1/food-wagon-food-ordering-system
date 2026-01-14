"use client";

import React, { useEffect } from "react";

const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Anjali Verma",
    email: "anjali@gmail.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 3,
    name: "Vikas Singh",
    email: "vikas@gmail.com",
    role: "Customer",
    status: "Blocked",
  },
  {
    id: 4,
    name: "Admin User",
    email: "admin@foodwagon.com",
    role: "Admin",
    status: "Active",
  },
];

const Users = () => {


  useEffect(() => {

    

  }, [])
  


  return (
    <div className="min-h-screen bg-zinc-50 p-10 px-16">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <p className="text-sm text-gray-500">
          Manage platform users and their access
        </p>
      </div>

      {/* USERS TABLE */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          All Users
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3">User</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Role</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Action</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {users.map((user) => (
                <tr key={user.id} className="border-b last:border-0">
                  {/* USER NAME + AVATAR */}
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-soft text-primary flex items-center justify-center font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-800">
                        {user.name}
                      </span>
                    </div>
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      {user.role}
                    </span>
                  </td>

                  <td>
                    {user.status === "Active" ? (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        Active
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                        Blocked
                      </span>
                    )}
                  </td>

                  <td>
                    <button className="text-primary hover:underline text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
