function Button(props) {
    return (
      <button
        className="border-2 rounded-lg px-20 py-3 bg-[#1d4ed8]  hover:bg-blue-950  text-white"
        type={props.type}
      >
        {props.name}
      </button>
    );
  }
  
  export default Button;
  