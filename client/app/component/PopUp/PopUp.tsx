"use client"
//import "./styles.css";

import useModal from "../../hook/useModal";

import Image from 'next/image'
import s from './PopUp.module.css'
//import Modal from '../Modal/Modal'
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { document } from "postcss";
import ModalDelete from "../Modal/ModalDelete";
import ModalReName from "../Modal/ModalReName";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    deleteIndex: number;
    setObjTask: (obj:{ id: number; text: string; time: string; performance:boolean}[]) => void;
    objTask: {
        id: number;
        text: string;
        time: string;
        performance: boolean;
    }[];
    index:number;
  }

export default function PopUp (props:ModalType) {
    
    const { isOpen, toggle } = useModal();

    const [value,setValue] = useState('')

    return (
    <>
      {props.isOpen && (
        <div onClick={props.toggle} >
          <div /*onClick={(e) => e.stopPropagation()}*/ className={s.modalBox3}>
            {props.children}
              
            <div >
              <button onClick={() => { toggle();setValue('1')}}>
                <Image src='Group (1).svg' width={17} height={17} alt='yesAll' />
              </button>
              <button onClick={() => { toggle();setValue('2')}}>
                <Image src='delete 4.svg' width={17} height={17} alt='yesDone' />
                
              </button>
                
            </div>
              
          </div>
              
         
          
        </div>
        
      )}
       <ModalDelete isOpen={isOpen} toggle={toggle} deleteIndex={props.deleteIndex} setObjTask={props.setObjTask} objTask = {props.objTask} value={value}/>
       
       <ModalReName isOpen={isOpen} toggle={toggle} task={props.setObjTask} objTask = {props.objTask} value={value} index={props.index}/>
    </>
  )
}