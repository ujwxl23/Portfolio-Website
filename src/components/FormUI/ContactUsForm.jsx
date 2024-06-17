import React, { useState } from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../../assets/cn";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set, update } from "firebase/database";

export function ContactUsForm() {
  const firebaseConfig = {
    apiKey: "AIzaSyDn49HFgB7lmCvrF1kwFDRIsKz9pGHLY5Y",
    authDomain: "ujwalportfolio-24ecd.firebaseapp.com",
    projectId: "ujwalportfolio-24ecd",
    storageBucket: "ujwalportfolio-24ecd.appspot.com",
    messagingSenderId: "1019464321676",
    appId: "1:1019464321676:web:7e065c4b12ee8ef42ac9a9",
    measurementId: "G-019C160P3N",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    note: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPostKey = push(ref(db, "contactFormSubmissions")).key;
      const updates = {};
      updates["/contactFormSubmissions/" + newPostKey] = formData;
      await update(ref(db), updates);
      console.log("Form submitted and saved to Realtime Database");
      setFormData({
        name: "",
        email: "",
        note: "",
      });
    } catch (error) {
      console.error("Error saving form data to Realtime Database:", error);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Thankyou for visiting my portfolio!!
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm my-4 dark:text-neutral-300">
        Email - ujwalkr23@gmail.com
      </p>
      <a
        href="https://drive.google.com/file/d/1bkn6MCZZManG225r55j1ut9n3-GtWCWm/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-center flex items-center justify-center"
      >
        Resume &rarr;
        <BottomGradient />
      </a>
      <p className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center mt-2">
        OR
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="firstname">Name</Label>
          <Input
            id="name"
            placeholder="Tyler"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="email@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="note">Note</Label>
          <Input
            id="note"
            placeholder="..."
            type="text"
            value={formData.note}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
