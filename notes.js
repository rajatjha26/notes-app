const fs=require('fs')
const chalk=require('chalk')


const getNotes= ()=> {
    console.log(chalk.inverse.green("Your notes is"))
    let data=loadNotes()
    data.forEach(element =>console.log(element.title))
}

let addNotes=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((notes)=>notes.title===title)
    if (duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
    console.log(chalk.bgGreen('notes added!'))
    }
    else{
        console.log(chalk.bgRed("The note's title is already present"))
    }
}   

const saveNotes=(notes)=>{
    note=JSON.stringify(notes)
    fs.writeFileSync('notes.json',note)
}

const loadNotes=()=>{
    try {
        const dataBuffer=fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    } catch(e){
        return []
    }
}

const removeNotes=(title)=>{
    let data=loadNotes()
    const duplicateNotes=data.filter((data)=>data.title===title)
    const remNote=data.filter((data)=>data.title!==title)
    saveNotes(remNote)
    if(duplicateNotes.length!=0){
        suc=chalk.inverse.bgGreen('The data associated to the title is removed')
        console.log(suc)
    }
    else{
        fail=chalk.bgRed('Enter valid notes Title')
        console.log(fail)

    }
}
const readNote=(title)=>{
    let data = loadNotes()
    const read=data.find((elem)=>elem.title===title)
    if(read){
        console.log(chalk.inverse.greenBright(read.title))
        console.log(chalk.inverse.yellowBright(read.body))
    }
    else{
        console.log(chalk.inverse.red("No notes is found associated to the title!"))
    }
}

module.exports={
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes:removeNotes,
    readNote:readNote
}