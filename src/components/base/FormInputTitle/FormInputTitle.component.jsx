import './FormInputTitle.styles.scss';

const FormInputTitle = ({ label, important }) => {
  return (
    <p
      className={`custom-form-input-title ${
        important && 'custom-form-input-important'
      }`}
    >
      {label}
    </p>
  );
};

export default FormInputTitle;
