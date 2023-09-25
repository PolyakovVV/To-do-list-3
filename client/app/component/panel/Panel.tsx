"use client"
//import "./styles.css";

import useModal from "../../hook/useModal";

import Image from 'next/image'
import s from './Panel.module.css'
//import Modal from '../Modal/Modal'
import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { document } from "postcss";
import TaskToDo from "../TaskToDo/TaskToDo";
import ModalSave from "../Modal/ModalSave";
import PopUpSort from "../PopUpSort/PopUpSort";
import ModalDelete from "../Modal/ModalDelete";




export default function Panel() {
    
    //const [textTask, setTextTask] = useState(['Task']);
    //INITIAL STATE
    const [textTask, setTextTask] = useState([
        {id:1, text:"Task 1", time: '12:30:00', performance:false},
        {id:2, text:"Task 2", time: '12:10:00', performance:false},
    ]);
    //-------------
    //useEffect(() => {setTextTask})

    const { isOpen, toggle } = useModal();
    const [value,setValue] = useState('');
    const [name,setName] = useState('All');

    const sortData = () =>{
        const a = textTask.sort((a,b)=>
        a.time>b.time ? 1:-1)
        console.log(a)
        setTextTask(a)
    }
    
    
    return (
        <div >
            <div >

                <button className={s.panelToday}>
                    <Image alt='today' src='Vector.svg' width={22} height={22} />
                    <div>Today</div>
                </button>

                
                <button  className={value === '2' ? s.panelAll2 : s.panelAll} onClick={() => {toggle();setValue('2')}}>
                    {value === '2' ? (<Image src='done 1 (1).svg' width={25} height={25} alt='yes'/>) : (<Image alt='all' src='done 1.svg' width={27} height={27} />) }
                    {name}
                </button>


                <button className={s.panelData} onClick={() => {sortData()}}>
                    <Image alt='data' src='arrows 1.svg' width={27} height={27} />
                    Data
                </button>
                <button className={s.panelAddTask} onClick={() => {toggle();setValue('1')}}>
                    <Image alt='Add task' src='Vector (1).svg' width={25} height={25} />
                    Add task
                </button>
                <div className={s.text}>
                
                    {textTask.map((text1,index)=>{
                        return (
                        
                        <TaskToDo index={index} text1={text1.text} setObjTask={setTextTask} objTask = {textTask}/>
                    )})}
                
                </div>
            
            </div>
            <PopUpSort isOpen={isOpen} toggle={toggle} name={setName} value={value} task={setTextTask} objTask = {textTask}/>
            <ModalSave isOpen={isOpen} toggle={toggle} task={setTextTask} objTask = {textTask} value={value}/>
        </div>
    )
}