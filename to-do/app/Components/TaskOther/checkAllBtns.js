import Btn from "../General/btn";

export default function CheckAllBtns(props){
    return(
        <div className="container">
            <div className="d-flex align-items-center justify-content-around">
                <Btn
                    id={"check"}
                    text={"Check off all Tasks"}
                    onButtonClick={props.onButtonClick}
                    type={"button"}
                    name={"Check off"}
                />
                <Btn
                    id={"uncheck"}
                    text={"Set all tasks to unchecked"}
                    onButtonClick={props.onButtonClick}
                    type={"button"}
                    name={"end task"}
                />
            </div>
        </div>
    )
}