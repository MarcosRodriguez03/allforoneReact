import React from 'react'
import { call } from '../services/DataServices.js'
import { useState } from 'react'
import { Link } from 'react-router-dom';
export default function PageTwoComponent() {


    const [result, setResult] = useState()
    const [name, setName] = useState();


    const getResult = async () => {
        const response = await call(name);
        setResult(response)
    }


    let phrase = "enter your name"

    function reload() {
        phrase = "please enter your name"
    }


    return (

        <div className="bg-[#6B866C] py-[1px]">
            <div
                className="rounded-2xl m-[25px] lg:m-[50px] bg-white border-solid border-black border-[3px] lg:border-[5px]  min-h-[222px] lg:min-h-[495px] flex justify-center items-center">
                <p id="p2Text" className="lg:text-[100px] text-[20px]">{name === undefined || name == "" ? phrase : result}</p>

            </div>
            <div className="px-[25px] lg:px-[50px] lg:py-[50px]  ">
                <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        id="p2Input" placeholder="Type Here" type="text"
                        className="addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                </div>

                <div className="grid lg:grid-cols-2 pt-[25px] lg:pt-[50px]">
                    <Link to={"/"}>
                        <div
                            className=" rounded-2xl lg:max-w-[380px] bg-[#CAEEFF] h-[82px] lg:min-h-[157px] border-solid border-black border-[3px] lg:border-[5px] flex justify-center items-center ">
                            <p id="" className="text-[20px] lg:text-[48px]">Back</p>
                        </div>
                    </Link>

                    <div className="lg:flex lg:justify-end  mt-[25px] lg:mt-0  ">
                        <div id="p2Enter"
                            onClick={(e) => name === undefined || name === "" ? reload() : getResult()}
                            className="rounded-2xl lg:w-[380px] bg-[#E9FABE] h-[82px] lg:min-h-[157px] border-solid border-black border-[3px] lg:border-[5px] flex justify-center items-center ">
                            <p className="text-[20px] lg:text-[48px]">Enter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
