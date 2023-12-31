import React, { ReactNode, useState } from "react";
import s from './PopUpSort.module.css'
import Image from "next/image";
import useModal from "@/app/hook/useModal";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    value:string;
    name: (obj:string) => void;
    task: (obj:{ id: number; text: string; time: string; performance:boolean}[]) => void;
    objTask: {
      id: number;
      text: string;
      time: string;
      performance: boolean;
  }[];
    setSort: (obj:number) => void;
    sort: number;
  }

export default function PopUpSort (props:ModalType) {


    return (
    <>
      {props.isOpen && props.value === '2' && (
        <div onClick={props.toggle} className={s.modalOverlay}>
          <div /*onClick={(e) => e.stopPropagation()}*/ className={s.modalBox2}>
            {props.children}

            <div className={s.all}>
              <button className={s.allAll}  onClick={() => {props.name('All'), props.setSort(3)}}>
                <Image src='done 1 (1).svg' width={25} height={25} alt='yesAll'/>
                All
                </button>
              <button className={s.allDone}  onClick={() => (props.name('Done'),props.setSort(2))}>
               <Image src='done 1 (1).svg' width={25} height={25} alt='yesDone'/>
               Done
              </button>
              <button className={s.allUndone}  onClick={() => {props.name('Undone'), props.setSort(1)}}>
                <Image src='done 1 (1).svg' width={25} height={25} alt='yesUndone'/>
                Undone 
                </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}