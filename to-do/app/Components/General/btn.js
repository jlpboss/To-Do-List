export default function Btn(props){
    return(
        <button 
            id={props.id}
            onClick={props.onButtonClick}
            type={props.type}
            name={props.name}
        >
            {props.text}
        </button>
    )
}