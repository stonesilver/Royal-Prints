import { useState } from 'react';
import UserAccountItemCard from '../../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './EditAccount.styles.scss';

const EditAccount = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    oldPassword: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  const handleSumit = (event) => {
    event.preventDefault();

    alert(JSON.stringify(formData));
  };
  return (
    <UserAccountItemCard title='Edit Account'>
      <form onSubmit={handleSumit} className='edit-account'>
        
      </form>
    </UserAccountItemCard>
  );
};

export default EditAccount;
