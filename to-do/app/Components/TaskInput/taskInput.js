import Btn from "../General/btn"

export default function TaskInput(props){

    return(
        <div className="contaner">
            <div className="d-flex align-items-center justify-content-around mt-3">
                <input
                    value={props.inputVal}
                    onChange={props.handleInputChange}
                    placeholder="Input Task Name"
                    onKeyDown={props.handleKeyDown}
                    className="input"
                />
                <Btn
                    id={"input"}
                    text={"Click to add Task"}
                    onButtonClick={props.onButtonClick}
                    type={"button"}
                    name={"input"}
                />
            </div>
        </div>
    )
}