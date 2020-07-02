const chalk= require('chalk')
const yargs= require('yargs')
const notes=require("./notes.js")

yargs.command({
    command:'remove',
    describe:'Remove notes',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command:'add',
    describe:'add notes',
    builder:{
        title:{
            describe:"Title note",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"note body",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command:'list',
    describe:'list your notes',
    handler(){
        notes.getNotes()
     }
})

yargs.command({
    command:'read',
    describe:'read your notes',
    builder:{
        title:{
            describe:"reading a nodes",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
     }
})

yargs.parse()
// console.log(yargs.argv)