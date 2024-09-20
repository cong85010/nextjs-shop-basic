"use client";
import { AuthContext } from "@/components/Context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

export default function LoginPage({ searchParams = {} }) {
  const { onLogin } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { redirect } = searchParams;
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = () => {
    if (!form.username || !form.password) {
      toast({
        title: "Please enter your username and password",
        description: "Please enter your username and password",
        variant: "destructive",
      });

      return;
    }

    setLoading(true);

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        onLogin(data);

        router.push(redirect || "/");
      })
      .catch((err) => {
        toast({
          title: "Login failed",
          description: "Please check your username and password",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-200px)]">
      <div className="w-full md:w-[500px] h-full md:h-[500px] border border-gray-200 rounded-md bg-white shadow-lg flex flex-col justify-center items-center gap-4">
        <h2 className="text-primary-500 text-2xl font-bold">Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <Input
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            type="username"
            id="username"
            placeholder="Enter your username"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full"
          />
          <Button
            onClick={handleSubmit}
            className="w-full mt-4"
            disabled={loading}
          >
            {loading ? (
              <span className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin inline-block" />
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
