import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function c(...ns: ClassValue[]) {
	return twMerge(clsx(ns));
}