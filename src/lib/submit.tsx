"use server";

export async function submitForm() {
  const res = await fetch("https://coffee.alexflipnote.dev/random.json");
  if (!res.ok) throw new Error("Failed to fetch coffee image");

  const { file } = await res.json();
  return file;
}
