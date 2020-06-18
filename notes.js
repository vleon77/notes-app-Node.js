const fs = require('fs');
const chalk = require("chalk");

//Add Notes
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    if (!duplicateNote) {
        notes.push({ title: title, body: body });
        saveNotes(notes);
        console.log(chalk.green.bold('Note Added!'));
    } else {
        console.log(chalk.red('Name Taken!'));
    }
}

//Remove Note
const removeNote = (title) => {
        const notes = loadNotes();
        const notesToKeep = notes.filter((note) => note.title !== title);

        if (notes.length !== notesToKeep.length) {
            saveNotes(notesToKeep);
            console.log(chalk.green.bold('Note removed'));
        } else {
            console.log(chalk.red.bold('No note found!'));
        }
    }
    //list Notes
const listNotes = () => {
    const notes = loadNotes();
    if (notes.length === 0) {
        console.log(chalk.red('There are no notes'))
    } else {
        console.log(chalk.blue.bold('Your Notes:'));
        notes.forEach(note => console.log(chalk.blue(note.title)));
    }
}

//Read Note

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.blue.bold(note.title));
        console.log(chalk.blue(note.body));
    } else {
        console.log(chalk.red('There is no note'));
    }
}

//Funciones auxiliares
const saveNotes = function(notes) {
    const notesStringify = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesStringify);
}

const loadNotes = () => {
    try {
        const bufferdata = fs.readFileSync('notes.json');
        const data = bufferdata.toString();
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};