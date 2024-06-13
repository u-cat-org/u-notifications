import type { Meta, StoryObj } from '@storybook/react';
import { UNotification, UNotificationColor } from '../../lib/components/u-notification.tsx';


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

