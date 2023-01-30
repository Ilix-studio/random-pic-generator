import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constant";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
// second utility function help to download image from client

export async function downloadImage(_id, photo) {
  //use a file saver library
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
