import { useEffect, useRef} from "react"
import { createPortal } from "react-dom";


 const Modal=({children})=>{
  
    const elRef=useRef(null);
    if(!elRef.current){
        elRef.current=document.createElement('div');
    }
    useEffect(()=>{
        const ModalRoot=document.getElementById('modal');
        if(!ModalRoot||!elRef.current){
           return;
        }

        ModalRoot.appendChild(elRef.current);
        //remove itself whenever it unrender
        
        return ()=>{
            if(elRef.current){
                ModalRoot.removeChild(elRef.current);
            }
        }
    },[])
    console.log(children)
    return createPortal(<div className="modal">{children}</div>,elRef.current)
}
export default Modal