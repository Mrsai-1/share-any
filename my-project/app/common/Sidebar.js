"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar({
  activeUsers = [
    // {
    //   name: "sai phanindra",
    //   status: "Online",
    // },
  ],
}) {
  const [isCopied, setIsCopied] = useState(false);
  // handleCopy

  const handleCopy = async (item) => {
    try {
      await navigator.clipboard.writeText(INSTA_PAY_ID);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      toast.success("Link Copied");
    } catch (error) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="h-full flex flex-col p-4">
      {/* Profile */}
      <div className="-mx-4 px-4 flex items-center justify-between mb-4 border-b border-border pb-4">
        <div className="flex gap-2 items-center">
          <div className="w-10 min-w-10 h-10 min-h-10 bg-primary rounded-full flex justify-center items-center">
            <span className="ri-user-line text-black text-2xl"></span>
          </div>
          <div className="flex flex-col">
            <p className="font-normal text-md">CoolFox672</p>
            <span className="text-xs">
              <span className="text-green-400 ">●</span> Online
            </span>
          </div>
        </div>
        {/* <button className="text-gray-400">⚙️</button> */}
        <div className="px-2 py-1 rounded-full bg-secondary">
          <span className="ri-settings-5-line text-xl text-gray-400"></span>
        </div>
      </div>

      {/* Search */}
      <div className="-mx-4 px-4 border-b border-border mb-4">
        <div className="flex items-center bg-secondary rounded-full px-4 mb-4">
          <span className="ri-search-line text-gray-400"></span>
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-3 py-2 text-sm text-white bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Online Users */}
      <div className="-mx-4 px-4 border-b border-border pb-4 mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold">Online Users (0)</p>
        <button className="px-1.5 py-1 rounded-full bg-secondary flex items-center justify-center">
          <span className="ri-refresh-line text-xs text-gray-400"></span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto -mx-4 px-4">
        {activeUsers.length > 0 ? (
          <div className="space-y-8">
            {activeUsers.map((user, index) => (
              <div
                key={index}
                className="-mx-4 px-4 py-2 hover:bg-primary/20 cursor-pointer transition-colors"
              >
                <div className="flex gap-2 items-center ">
                  <div className="w-10 min-w-10 h-10 min-h-10 bg-primary rounded-full flex justify-center items-center">
                    <span className="ri-user-line text-black text-2xl"></span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-normal text-md capitalize">
                      {user.name}
                    </p>
                    <span className="text-xs">
                      <span className="text-green-400">●</span> {user.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-1 justify-center items-center h-full space-y-4 flex-col">
            <span className="text-xs">No users online</span>
            <span className="text-xs">Share this link to invite others</span>
            <div
              className="flex gap-1 items-center cursor-pointer"
              title="copy link"
              onClick={handleCopy}
            >
              <span className="text-sm text-blue-400">
                {window.location.href}
              </span>
              {isCopied ? (
                <span className="ri-file-copy-line "></span>
              ) : (
                <span className="ri-file-copy-line "></span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
