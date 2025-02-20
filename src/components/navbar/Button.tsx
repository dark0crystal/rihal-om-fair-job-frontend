"use client"

type button = {
    isActive:boolean,
    toggleMenu :any
}
export default function Button({isActive , toggleMenu}:button){
    return(
        <div className="">
            <div>
                {isActive ? (
                    <div onClick={() => {toggleMenu()}}>clese</div>
                ):(
                    <div onClick={() => {toggleMenu()}}>open</div>
                )}
            </div>
        </div>
    )
}