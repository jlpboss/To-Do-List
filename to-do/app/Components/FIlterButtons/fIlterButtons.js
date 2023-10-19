import Btn from "../General/btn";

export default function FilterBtns(props){
    
    
    return(
        <div className="container">
            <Btn
            id={"all"}
            text={"All Tasks"}
            onButtonClick={props.onButtonClick}
            type={"radio"}
            name={"Filter"}
            />
            <Btn
            id={"todo"}
            text={"To-Do Tasks"}
            onButtonClick={props.onButtonClick}
            type={"radio"}
            name={"Filter"}
            />
            <Btn
            id={"done"}
            text={"Done Tasks"}
            onButtonClick={props.onButtonClick}
            type={"radio"}
            name={"Filter"}
            />
        </div>
    )
}