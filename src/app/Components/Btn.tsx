import React from "react";
import {Anime} from './Anime'

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | "100%"};

export const Btn  = ( {children}: Props) => {
  return (
<Anime>
 <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700">
{children}
<span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold  bg-slate-50 rounded-full">
<svg className="h-2 w-2 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="17" y1="7" x2="7" y2="17" />  <polyline points="8 7 17 7 17 16" /></svg>
</span>
</button>
    </Anime>
  
  );
};