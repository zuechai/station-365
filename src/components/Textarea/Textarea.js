import './Textarea.scss'

export default function Textarea({ label, value, placeholder, name, type, onChange }) {
    return (
        <>
            <div className='textarea'>
                <h3 className='textarea__label'>{label}</h3>
                <textarea
                    className='textarea__value'
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    onChange={onChange}
                />
            </div>
        </>
    )
}