import './FormSubmitBtn.styles.scss';

const FormSubmitBtn = ({ label }) => {
  return (
    <button type='submit' className='form-submit-btn'>
      {label}
    </button>
  );
};

export default FormSubmitBtn;
