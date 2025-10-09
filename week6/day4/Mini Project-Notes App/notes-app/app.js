import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as notes from "./notes.js";
import _ from "lodash";

const argv = yargs(hideBin(process.argv));

argv.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

argv.command({
  command: "list",
  describe: "List all notes",
  handler() {
    notes.listNotes();
  },
});

argv.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

argv.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

argv.parse();


argv
  .command({
    command: "*",
    describe: "Unknown command handler",
    handler() {
      console.log("⚠️  command not recognized");
    },
  })
  .parse();