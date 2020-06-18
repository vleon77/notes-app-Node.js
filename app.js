const yargs = require('yargs');
const notes = require('./notes');
const { demandOption } = require('yargs');

//Crear comandos para add, remove, list , read

//ADD

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Body Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

//REMOVE

yargs.command({
    command: 'remove',
    description: 'Remove a file',
    builder: {
        title: {
            description: 'Title Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

//LIST

yargs.command({
    command: 'list',
    description: 'List all de notes',
    handler() {
        notes.listNotes();
    }
});

//READ

yargs.command({
    command: 'read',
    description: 'Read a note',
    builder: {
        title: {
            description: 'Title of the note that you want to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse();