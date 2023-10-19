import Btn from "../General/btn"

export default function TaskInput(props){

    return(
        <>
            <div className="contaner">
            <input
                value={props.inputVal}
                onChange={props.handleInputChange}
                placeholder="Input Task Name"
            />
            <Btn
            id={"input"}
            text={"Click to add Task"}
            onButtonClick={props.onButtonClick}
            type={"button"}
            name={"input"}
            />
            </div>
        </>
    )
}