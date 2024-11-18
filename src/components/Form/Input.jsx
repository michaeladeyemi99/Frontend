function Input(props){
    return(
        <input
        className="px-5 bg-gray-300 h-10 w-full" 
        name = {props.name}
        placeholder= {props.placeholder + (props.required ? " *" : "") }
        type= {props.type}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        />
    )
}

export default Input