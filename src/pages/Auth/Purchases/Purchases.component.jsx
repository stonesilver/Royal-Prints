import { useState } from 'react';
import FormItem from '../../../components/FormItem';
import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './Purchases.styles.scss';

const Purchases = () => {
  const [formData, setFormData] = useState({ searchInput: '', message: 'all' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <UserAccountItemCard title='Purchases'>
      <form onSubmit={handleSubmit} className='user-purchases'>
        <div className='user-purchases-search-messages'>
          <FormItem
            options={[
              {
                label: "PURCHASE REF, SHOP'S NAME, PRODUCT TITLE, ..., ...",
                type: 'text',
                name: 'searchInput',
                value: formData.searchInput,
                handleChange,
              },
            ]}
          />
          <button type='submit' className='user-purchases-search-messages-btn'>
            Filter
          </button>
        </div>
      </form>
    </UserAccountItemCard>
  );
};

export default Purchases;
