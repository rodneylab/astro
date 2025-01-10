import { writable } from "svelte/store";

const initialValue =
  typeof window !== "undefined"
    ? window.localStorage.getItem("theme")
    : "light";
const theme = writable<string>(initialValue ?? "light");

theme.subscribe((value) => {
  typeof window !== "undefined" && window.localStorage.setItem("theme", value);
});

export default theme;
