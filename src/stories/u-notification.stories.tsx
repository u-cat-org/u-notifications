import type { Meta, StoryObj } from '@storybook/react';
import { UNotification, UNotificationColor } from '../../lib/components/u-notification.tsx';
import { UNotificationsProvider, useNotifications } from '../../lib/providers/u-notifications.provider.tsx';
import { useRef } from 'react';
import { UInput } from './common/Input/Input.tsx';
import { UButton } from './common/Button/Button.tsx';
import { USelect } from './common/Select/Select.tsx';


const meta: Meta<typeof UNotification> = {
  component: UNotification,
  title: 'UNotification',
  tags: [ 'autodocs' ],
  argTypes: {
    color: {
      type: 'string',
      description: 'Notification color',
      options: [
        UNotificationColor.primary,
        UNotificationColor.secondary,
        UNotificationColor.success,
        UNotificationColor.danger,
        UNotificationColor.warning,
        UNotificationColor.info,
        UNotificationColor.light,
        UNotificationColor.dark
      ],
      control: { type: 'select' }
    },
    text: {
      type: 'string',
      description: 'Text to display',
      control: { type: 'text' }
    }
  }
};
export default meta;
type Story = StoryObj<typeof UNotification>;

export const Single: Story = {
  args: {
    color: UNotificationColor.primary,
    text: 'Notification text here'
  }
};

export const Multiple: Story = {
  args: {},
  render: () => {
    return <div>
      <UNotification text={ 'Notification text here' } color={ UNotificationColor.danger }
                     onToggle={ () => undefined }/>
      <UNotification text={ 'Notification text here' } color={ UNotificationColor.success }
                     onToggle={ () => undefined }/>
      <UNotification text={ 'Notification text here' } color={ UNotificationColor.warning }
                     onToggle={ () => undefined }/>
    </div>
  }
};

function WrapperComponent() {
  const notifications = useNotifications();

  const inputRef = useRef(null);
  const selectRef = useRef(null);

  function onButtonClickHandler(): void {
    const selectValue = selectRef.current?.['value'];
    const inputValue = inputRef.current?.['value'];

    const func = notifications[selectValue!] as any;

    if (!func) {
      throw new Error(`Unknown notification type ${ selectValue }`);
    }

    func(inputValue || 'No value');
  }

  return (
    <div style={ {
      height: '120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'space-between'
    } }>
      <UInput ref={ inputRef } type={ 'text' } defaultValue={ 'New notification text' }/>

      <UButton onClick={ onButtonClickHandler }>
        Add
      </UButton>

      <USelect ref={ selectRef }>
        <option value={ UNotificationColor.primary }>Primary</option>
        <option value={ UNotificationColor.secondary }>Secondary</option>
        <option value={ UNotificationColor.success }>Success</option>
        <option value={ UNotificationColor.danger }>Danger</option>
        <option value={ UNotificationColor.warning }>Warning</option>
        <option value={ UNotificationColor.info }>Info</option>
        <option value={ UNotificationColor.light }>Light</option>
        <option value={ UNotificationColor.dark }>Dark</option>
      </USelect>
    </div>
  );
}

export const ControlElements: Story = {
  args: {},
  parameters: {
    controls: {
      exclude: /.*/g
    }
  },
  render: () => {
    return <div style={ { width: '300px' } }>
      <UNotificationsProvider>
        <WrapperComponent></WrapperComponent>
      </UNotificationsProvider>
    </div>
  }
};

