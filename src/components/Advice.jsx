import React from "react";
import { useState, useEffect } from "react";

import separator from "../assets/images/pattern-divider-mobile.svg";
import dice from "../assets/images/icon-dice.svg";
import spinner from '../assets/images/spinner.svg'



export const Advice = () => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [body, setBody] = useState("");

  const Loader = () => {
    return (
      <img src={spinner}/>
    )
  }



useEffect(() => {

  loading ? 
  apiCall() :
  setBody(Loader)


  setLoading(false)
}, [loading]);

  async function apiCall() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setId(data.slip.id);
    setBody(data.slip.advice);
  }


  return (
    <div className="flex flex-col w-11/12 max-w-lg m-auto my-28 bg-dark-grayish-blue  rounded-2xl">
      <header className="flex h-1/5 w-full justify-center">
        <h1 className="line flex self-end text-xs tracking-widest font-Manrope text-secondary">
          ADVICE # {id}
        </h1>
      </header>
      <section className="flex w-full h-3/5 justify-center align-middle my-5 px-3">
        <blockquote className="flex  text-center self-center  text-primary font-Manrope text-lg px-4 line-snug">
          {body}
        </blockquote>
      </section>
      <section className="flex relative flex-col justify-content h-1/5">
        <picture className="flex w-full h-1/2 ">
          <img className="mx-auto h-4" src={separator} alt='Just a separator.'/>
        </picture>
        <div className="flex w-full h-1/2 justify-center">
          <picture
            disabled
            onClick={()=> {
            setLoading(true)
            }
            
            }
            className="w-16 h-16 flex justify-center bg-secondary sha shadow-secondary hover:shadow-3xl transition-all absolute -bottom-8 rounded-full  cursor-pointer select-none "
          >
            <img className="self-center" src={dice} alt='Press for another advice.'/>
          </picture>
        </div>
      </section>
    </div>
  );
};
