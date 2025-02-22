import Words from "./Words"

export default function Paragraph(){
    const paragraph = "let's begin "
    return(
        <div className=" flex  justify-center items-center">
            <Words paragraph={paragraph}/>
        </div>
    )
}