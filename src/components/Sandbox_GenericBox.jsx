function Sandbox_GenericBox(props) {
    const {large, children} = props;
    const boxSize = large ? "" : "h-10 w-10";
    return (
        <div className={`${boxSize} bg-sky-200 border-gray-300 border-2 text-gray-500`}>{children}</div>
    )
}

export default Sandbox_GenericBox