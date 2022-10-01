import { useState } from 'react';
import UserAccountItemcard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import FormItem from '../../../components/FormItem';
import './Conversations.styles.scss';
import Radio from '../../../components/base/Radio/Radio.component';
import Button from '../../../components/base/Button/Button.component';

const Conversations = () => {
  const [formData, setFormData] = useState({ searchInput: '', message: 'all' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  return (
    <>
      <UserAccountItemcard title='Conversations'>
        <form className='user-conversations'>
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
            label='ALL MESSAGES'
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
