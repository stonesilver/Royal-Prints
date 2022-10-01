import { useState } from 'react';
import UserAccountItemcard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import FormItem from '../../../components/FormItem';
import Radio from '../../../components/base/Radio/Radio.component';
import Button from '../../../components/base/Button/Button.component';
import './Conversations.styles.scss';

const Conversations = () => {
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
    <>
      <UserAccountItemcard title='Conversations'>
        <form onSubmit={handleSubmit} className='user-conversations'>
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
          <Radio
            name='message'
            checked={formData.message === 'all'}
            onChange={handleChange}
            label='All Messages'
          />
        </form>
      </UserAccountItemcard>
      <div className='message-type-btn'>
        <Button text='Unread messages' variant='outlined' />
        <Button text='All messages' variant='contained' />
      </div>
      <div className='display-messages'>
        <p className='no-message'>No message</p>
      </div>
    </>
  );
};

export default Conversations;
