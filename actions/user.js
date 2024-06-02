"use server";

import connectMongo from "@/dbconnect/connectMongo";
import User from "@/models/User";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  const name = formData.get("name");
  const email = formData.get("email");
  const userData = { name, email };
  if (!name || !email) {
    return null;
  }
  try {
    await connectMongo();
    console.log("Connected to MongoDB");
    await new User(userData).save();
    //   alert("User added successfully");
    // revalidate all users

    revalidatePath("/");
  } catch (error) {
    if (error.code === 11000) {
      // alert(`User with email ${email} already exists!`);
    } else {
      // alert("Internal Server Error");
    }
  }
};

export const getUsers = async () => {
  try {
    await connectMongo();
    console.log("Connected to MongoDB");
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};
