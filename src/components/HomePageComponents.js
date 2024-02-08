import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePageComponents() {
    return (
        <div className="bg-[#96D8F6] py-[1px]">

            <div className="m-[25px] lg:m-[50px] bg-white text-[32px] lg:text-[100px] text-center border-solid border-[3px] lg:border-[5px] border-black rounded-2xl ] flex items-center justify-center className
        Properties
        min-h-[86px] lg:min-h-[197px] ">
                <p className=" lg:text-[100px] text-center 	">
                    ALL FOR ONE</p>
            </div>


            <div className="grid grid-cols-2 lg:grid-cols-3 m-[25px] lg:mx-[50px] gap-[20px] lg:gap-[50px]">

                <Link to={"PageTwo"}>
                    <div
                        className="flex bg-[#CAEEFF] items-center justify-center border-[3px] lg:border-[5px] border-black rounded-2xl ] min-h-[122px] lg:min-h-[150px]">
                        <p className=" text-[20px] lg:text-[48px]">Say Hello</p>
                    </div>
                </Link>
                {/* <a href="./Pages/pageTwo.html">
                  
                </a> */}




                <Link to="PageThree">
                    <div
                        className="flex bg-[#CAEEFF] items-center justify-center border-[3px] lg:border-[5px] border-black rounded-2xl ] min-h-[122px] lg:min-h-[150px]">
                        <p className=" text-[20px] lg:text-[48px]">Add 2 Numbers</p>
                    </div>
                </Link>


                <Link to="PageFour">
                    <div
                        className="flex bg-[#CAEEFF] items-center justify-center border-[3px] lg:border-[5px] border-black rounded-2xl ] min-h-[122px] lg:min-h-[150px]">
                        <p className=" text-[20px] lg:text-[48px] text-center">Asking Questions</p>
                    </div>
                </Link>




                <Link to="PageFive">
                    <div
                        className="flex bg-[#CAEEFF] items-center justify-center border-[3px] lg:border-[5px] border-black rounded-2xl ] min-h-[122px] lg:min-h-[150px]">
                        <p className=" text-[20px] lg:text-[48px]">Greater Than <br />
                            Or Less Than</p>
                    </div>
                </Link>



                <Link to="PageSix">
                    <div
                        className="flex bg-[#CAEEFF] items-center justify-center border-[3px] lg:border-[5px] border-black rounded-2xl ] min-h-[122px] lg:min-h-[150px]">
                        <p className=" text-[20px] lg:text-[48px]">Mad Lib</p>
                    </div>
                </Link>



                <Link to="PageSeven"> <div
                    className="flex bg-[#CAEEFF] items-center justify-center border-[3px] lg:border-[5px] border-black rounded-2xl ] min-h-[122px] lg:min-h-[150px]">
                    <p className=" text-[20px] lg:text-[48px]">Reverse It</p>
                </div></Link>



                <Link to="PageEight">
                    <div
                        className="flex bg-[#CAEEFF] items-center justify-center border-[3px] lg:border-[5px] border-black rounded-2xl ] min-h-[122px] lg:min-h-[150px]">
                        <p className=" text-[20px] lg:text-[48px]">Reverse It <br /> Numbers</p>
                    </div>
                </Link>



                <Link to="PageNine"> <div
                    className="flex bg-[#CAEEFF] items-center justify-center border-[3px] lg:border-[5px] border-black rounded-2xl ] min-h-[122px] lg:min-h-[150px]">
                    <p className=" text-[20px] lg:text-[48px]  text-center">Restaurant Picker</p>
                </div></Link>



                <Link to="PageTen">
                    <div
                        className="flex bg-[#CAEEFF] items-center justify-center border-[3px] lg:border-[5px] border-black rounded-2xl ] min-h-[122px] lg:min-h-[150px]">
                        <p className=" text-[20px] lg:text-[48px]">Magic 8 Ball</p>
                    </div>
                </Link>


                <Link to="PageEleven" className='lg:col-span-3  '>
                    <div
                        className="flex bg-[#CAEEFF] items-center justify-center border-[3px] lg:border-[5px] border-black rounded-2xl ]  min-h-[122px] lg:min-h-[150px]">
                        <p className=" text-[20px] lg:text-[48px]">Odd or Even</p>
                    </div>
                </Link>



            </div>


        </div>
    )
}
