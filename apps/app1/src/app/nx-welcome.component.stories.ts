import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NxWelcomeComponent } from './nx-welcome.component';

export default {
  title: 'NxWelcomeComponent',
  component: NxWelcomeComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<NxWelcomeComponent>;

const Template: Story<NxWelcomeComponent> = (args: NxWelcomeComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}