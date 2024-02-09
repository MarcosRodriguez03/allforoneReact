import React from 'react'
import { useState } from 'react'

import { call3 } from '../services/DataServices.js'
import { Link } from 'react-router-dom';
export default function PageThreeComponent() {

    const [result, setResult] = useState("")
    const [numOne, setNumOne] = useState("");
    const [numTwo, setNumTwo] = useState("");

    const getResult = async () => {
        if (numOne === "" && numTwo == "") {
            setResult("Enter two numbers")
        } else {
            const response = await call3(numOne, numTwo);
            setResult(response)
        }
    }




    return (
        <div class="bg-[#A6A477] py-[1px]">

            <div
                class="rounded-2xl m-[25px] lg:m-[50px] bg-white border-solid border-black border-[3px] lg:border-[5px]  min-h-[222px] lg:min-h-[495px] flex justify-center items-center">
                <p id="p3Text" class="lg:text-[100px] text-[20px]">{result === "" ? "Enter two numbers" : result}</p>
            </div>
            <div class="px-[25px] lg:px-[50px] lg:py-[50px]  ">
                <div class="grid lg:grid-cols-2 lg:gap-[44px]">
                    <div class="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumOne(e.target.value)}
                            value={numOne}
                            id="p3Input1" placeholder="Type Here" type="text"
                            class="addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                    <div class="mt-[25px] lg:mt-0 rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumTwo(e.target.value)}
                            value={numTwo}
                            id="p3Input2" placeholder="Type Here" type="text"
                            class="addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                </div>

                <div class="grid lg:grid-cols-2 pt-[25px] lg:pt-[50px]">
                    <Link to={"/"}>
                        <div
                            class="rounded-2xl lg:max-w-[380px] bg-[#CAEEFF] h-[82px] lg:min-h-[157px] border-solid border-black border-[3px] lg:border-[5px] flex justify-center items-center ">
                            <p class="text-[20px] lg:text-[48px]">Back</p>
                        </div>
                    </Link>


                    <div class="lg:flex lg:justify-end pt-[25px] lg:pt-0">
                        <div id="p3Enter"
                            onClick={(e) => {
                                getResult()
                                setNumOne("")
                                setNumTwo("")
                            }}
                            class="rounded-2xl lg:w-[380px] bg-[#E9FABE] h-[82px] lg:min-h-[157px] border-solid border-black border-[3px] lg:border-[5px] flex justify-center items-center ">
                            <p class="text-[20px] lg:text-[48px]">Enter</p>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    )
}
