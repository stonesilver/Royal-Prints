import { useState } from 'react';
import UserAccountItemcard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import FormItem from '../../../components/FormItem';
import './Conversations.styles.scss';

const Conversations = () => {
  const [formData, setFormData] = useState({ searchInput: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  return (
    <UserAccountItemcard title='Conversations'>
      <div className='user-conversations'>
        <FormItem
          options={[
            {
              label: 'SUBJECT, CONTENT, USERNAME, ...',
              type: 'text',
              name: 'searchInput',
              value: formData.searchInput,
              handleChange,
            },
          ]}
        />
      </div>
    </UserAccountItemcard>
  );
};

export default Conversations;
