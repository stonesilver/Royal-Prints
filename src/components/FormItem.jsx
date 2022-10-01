import Input from './base/Input/Input.component';

const FormItem = ({ options, children }) => {
  return (
    <div className='user-addresses-row'>
      {options.map(({ label, type, name, value, handleChange, importatnt }) => (
        <div key={name} className='user-addresses-row-column'>
          <p
            className={`user-addresses-row-column-title ${
              importatnt && 'user-addresses-row-column-important'
            }`}
          >
            {label}
          </p>
          <Input
            type={type}
            name={name}
            value={value}
            handleChange={handleChange}
          />
        </div>
      ))}
      {children}
    </div>
  );
};

export default FormItem;
