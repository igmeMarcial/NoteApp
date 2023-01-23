import React,{useState,useRef} from 'react'
import "../styles/notesApp.css"
import Nota from './Nota';


function NotesApp() {
    const [titleNote,setTitleNote] = useState("");
    const [note,setNote] = useState("");
    const[notes,setNotes]=useState([]);

    const inputRef = useRef();
    const inputRefText = useRef();

    function handleChangeText(e){
        setNote(e.target.value)
        
    }
    function handleChangeTitle(e){
        setTitleNote(e.target.value)
        
    }
    function handleSubmit(e){
        e.preventDefault();
        if(titleNote !== ""){
            if(note!== ""){
                const newNotes={
                    id: crypto.randomUUID(),
                    title:titleNote,
                    text:note,
                    completed:false
                }
        
                const temp =[...notes]
                temp.unshift(newNotes)
                setNotes(temp);
        
                setNote("")
                setTitleNote("");
                inputRefText.current.value = "";
                inputRef.current.value = "";

            }else{
                console.log("Ingresa notas para texto")
            inputRefText.current.focus();
            
            }
        }else{
            console.log("Ingresa notas para el tíutulo")
            inputRef.current.focus();
            
        }
        
        
    }
    function handleUpdateNote(id,valueTitle,valueText){
        const temp = [...notes]
        const item = temp.find((item)=>item.id === id);
        item.title = valueTitle;
        item.text=valueText;
        setNotes(temp)
    }
    function handleDeleteNote(id){
        const temp = notes.filter(item=>item.id!==id)
        setNotes(temp);
    }

  return (
    <div className='notesContainer'>
        <div className='noteItem'>
        <form className='noteCreateForm' onSubmit={handleSubmit}>
            <div className='textInputContent'>
                <div className='titleData'>
                    <input onChange={handleChangeTitle} className='titleInputNote inputUserData' type="text" placeholder='Nombre de tu nota' maxLength="16" ref={inputRef}></input>
                </div>
                <div className='inputText'>
                    <textarea onChange={handleChangeText} className='postTextBox inputUserData' maxLength="200" placeholder='Escribe tus apuntes aqui' ref={inputRefText}></textarea>
                </div>
                <div className='buttonContent'>
                    <button type='submit' className='postButton'>Add Note</button>
                </div>
            </div>
        </form>
        </div>
       
        {
            notes.map((item,index)=>{
                return <Nota key={item.id} item={item} onUpdate={handleUpdateNote} onDelete={handleDeleteNote}/>
            })
        }
        

    </div>
  )
}

export default NotesApp