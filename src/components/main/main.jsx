import Subsection from "../subsection/subsection"
import { img1 } from "../assets"


function Image(props){
    return(
        <div>
           
            <img src={props.image} alt="" />
        </div>
    )
}

export default function Main(){
    return(
        <div>
            <Subsection 
                maintext='Tap for pumpkin' 
                paragraph='The Pumpkin Spice Latte and Pumpkin Cream 
                        Cold Brew are here, and you can order them now 
                        on our app when you join Starbucks® Rewards.'
            />
            <Image image={img1} />
        </div>
    )
}