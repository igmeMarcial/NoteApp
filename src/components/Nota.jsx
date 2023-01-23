import React,{useState,useEffect,useRef} from 'react'
import ".././styles/nota.css"

function Nota({item,onUpdate,onDelete}) {
 const [isEdit,setIsEdit] = useState(false);
 const[valueInput,setValueInput]= useState({
    id: null,
    title:"",
    text:"",
    completed:null
});

const updateRef = useRef();
const updateTextRef = useRef();

const testRef = useRef();
useEffect(()=>{
    setValueInput(item)
   },[isEdit])

 function EditNote(){
    const[newValueTitle,setNewValueTitle] = useState(item.title)
    const[newValueText,setNewValueText] = useState(item.text)
    
    
    
  

    function handleSubmit(e){
        e.preventDefault();
    }
    function handleChangeTitle(e){
        setNewValueTitle(e.target.value)
    }
    function handleChangeText(e){
        setNewValueText(e.target.value)
    }
    function handleUpdateNote(){
        
        if(newValueTitle !== ""){
            if(newValueText !== ""){
                onUpdate(item.id,newValueTitle,newValueText)
                setIsEdit(false)
            }else{
                updateTextRef.current.focus();
            }
           
        }else{
            updateRef.current.focus();
        }
        
    }

    return <>
        <form className='noteCreateForm' onSubmit={handleSubmit}>
            <div className='textInputContent'>
                <div className='titleData'>
                    <input onChange={handleChangeTitle} className='titleInputNote inputUserData' type="text" placeholder='Nombre de tu nota' maxLength="50"  ref={updateRef}></input>
                </div>
                <div className='inputText'>
                    <textarea onChange={handleChangeText} className='postTextBox inputUserData' maxLength="500" placeholder='Escribe tus apuntes aqui' ref={updateTextRef}></textarea>
                </div>
                <div className='buttonContent'>
                    <button onClick={handleUpdateNote} type='submit' className=' btn-card-note'>Actualizar</button>
                </div>
            </div>
        </form>
    </>
 }
 
 function NoteElement(){
    return <>
        <h4>{item.title}</h4>
        <div className='text-content-note'>
            {item.text}
        </div>
        <div className='btnItemNote'>
            <button className='btn-card-note' onClick={(e)=>setIsEdit(true)}>Editar</button>
            <button className='btn-card-note' onClick={(e)=>onDelete(item.id)}>Eliminar</button>
        </div>
    </>
 }


  return (
    <div className='itemNoteContainer responsiveItem'>
        {isEdit? <EditNote/> :<NoteElement/>}
    </div>
  )
}

export default Nota