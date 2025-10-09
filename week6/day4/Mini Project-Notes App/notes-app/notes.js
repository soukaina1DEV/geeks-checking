import fs from "fs";

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes, null, 2);
  fs.writeFileSync("notes.json", dataJSON);
};

export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.find((note) => note.title === title);

  if (!duplicate) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log("✅ Note added successfully!");
  } else {
    console.log("⚠️ Note already exists!");
  }
};

export const listNotes = () => {
  const notes = loadNotes();
  console.log("🗒️ Your notes:");
  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note.title}`);
  });
};

export const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log("📖 Title:", note.title);
    console.log("📝 Body:", note.body);
  } else {
    console.log("❌ Note not found!");
  }
};

export const removeNote = (title) => {
  const notes = loadNotes();
  const filtered = notes.filter((note) => note.title !== title);

  if (filtered.length < notes.length) {
    saveNotes(filtered);
    console.log("🗑️ Note removed!");
  } else {
    console.log("⚠️ Note not found!");
  }
};
