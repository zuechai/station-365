import './InputField.scss'

export default function InputField({ label, value, placeholder, name, type }) {
    return (
        <>
            <div className='input'>
                <h3 className='input__label'>{label}</h3>
                <input
                    className='input__value'
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                />
            </div>
        </>
    )
}