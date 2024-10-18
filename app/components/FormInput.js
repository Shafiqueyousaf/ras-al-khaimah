export default function FormInput({
    label,
    type,
    placeholder,
    onChange,  
    className
}){
    return(
        <>
            <label className="formLabel">{label}</label>
            <input type={type} placeholder={placeholder} onChange={onChange} className={`w-full border border-gray-300 rounded py-5 px-6 bg-gray-100 outline-none ${className}`}/>
        </>    
    )
}