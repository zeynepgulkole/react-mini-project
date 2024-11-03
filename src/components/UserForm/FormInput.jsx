export default function FormInput({label, name, value, onChange, type}) {

    return <div>
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={(e) => onChange(name, e.target.value)} />
    </div>
}