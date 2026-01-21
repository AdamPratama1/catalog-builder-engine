import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//Gabung class Tailwind + clsx 
export const cn = (...className: ClassValue[]) =>
  twMerge(clsx(className));

// Ambil data dari localStorage 
export const lsGet = <T>(key: string, defaultValue?: T): T | undefined => {
  if (typeof window === "undefined") return defaultValue;

  const data = localStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : defaultValue;
};

// Simpan data ke localStorage 
export const lsSet = <T>(key: string, value: T) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

//Hapus data dari localStorage 
export const lsRemove = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
