import React from 'react'
import { call6 } from '../services/DataServices.js'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function PageSixComponent() {


    const [result, setResult] = useState()
    const [numOne, setNumOne] = useState();
    const [numTwo, setNumTwo] = useState();
    const [numThree, setNumThree] = useState();
    const [numFour, setNumFour] = useState();
    const [numFive, setNumFive] = useState();
    const [numSix, setNumSix] = useState();
    const [numSeven, setNumSeven] = useState();
    const [numEight, setNumEight] = useState();
    const [numNine, setNumNine] = useState();
    const [numTen, setNumTen] = useState();

    const getResult = async () => {
        const response = await call6(numOne, numTwo, numThree,
            numFour,
            numFive,
            numSix,
            numSeven,
            numEight,
            numNine,
            numTen);
        setResult(response)
    }



    return (
        <div className="bg-[#DC8C83] py-[1px]">
            <div
                className="rounded-2xl m-[25px] lg:m-[50px] bg-white border-solid border-black border-[3px] lg:border-[5px]  min-h-[222px] lg:min-h-[495px] flex justify-center items-center">
                <p id="p6Text" className="lg:text-[100px] text-[20px] p-10">{result === undefined ? "Enter The Given Fields" : result}</p>
            </div>
            <div className="px-[25px] lg:px-[50px] lg:py-[50px]  ">
                <div className="grid lg:grid-cols-2 lg:gap-[44px] gap-[25px]">

                    <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumOne(e.target.value)}
                            id="p6Input1" placeholder="Enter Gender" type="text"
                            className=" addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                    <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumTwo(e.target.value)}
                            id="p6Input2" placeholder="Enter name" type="text"
                            className=" addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                    <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumThree(e.target.value)}
                            id="p6Input3" placeholder="Enter Age" type="text"
                            className=" addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                    <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumFour(e.target.value)}
                            id="p6Input4" placeholder="Enter Color" type="text"
                            className=" addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                    <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumFive(e.target.value)}
                            id="p6Input5" placeholder="Enter Pronoun" type="text"
                            className=" addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                    <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumSix(e.target.value)}
                            id="p6Input6" placeholder="Enter Food" type="text"
                            className=" addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                    <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumSeven(e.target.value)}
                            id="p6Input7" placeholder="Enter Job" type="text"
                            className=" addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                    <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumEight(e.target.value)}
                            id="p6Input8" placeholder="Enter Adjective One" type="text"
                            className=" addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                    <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumNine(e.target.value)}
                            id="p6Input9" placeholder="Enter Adjective Two" type="text"
                            className=" addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                    <div className="rounded-2xl border-solid border-black border-[3px] lg:border-[5px]  ">
                        <input
                            onChange={(e) => setNumTen(e.target.value)}
                            id="p6Input10" placeholder="Enter Noun" type="text"
                            className=" addBorder rounded-2xl w-full min-h-[82px] lg:min-h-[157px] text-xl  md:text-5xl border-none  " />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 pt-[25px] lg:pt-[50px]">
                    <Link to={"/"}>
                        <div
                            className="rounded-2xl lg:max-w-[380px] bg-[#CAEEFF] h-[82px] lg:min-h-[157px] border-solid border-black border-[3px] lg:border-[5px] flex justify-center items-center ">
                            <p className="text-[20px] lg:text-[48px]">Back</p>
                        </div>
                    </Link>


                    <div className="lg:flex lg:justify-end pt-[25px] lg:pt-0">
                        <div id="p6Enter"
                            onClick={(e) => getResult()}
                            className="rounded-2xl lg:w-[380px] bg-[#E9FABE] h-[82px] lg:min-h-[157px] border-solid border-black border-[3px] lg:border-[5px] flex justify-center items-center ">
                            <p className="text-[20px] lg:text-[48px]">Enter</p>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    )
}
