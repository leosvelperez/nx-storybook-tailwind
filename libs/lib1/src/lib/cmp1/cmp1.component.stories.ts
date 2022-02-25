import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { Cmp1Component } from './cmp1.component';

export default {
  title: 'Cmp1Component',
  component: Cmp1Component,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<Cmp1Component>;

const Template: Story<Cmp1Component> = (args: Cmp1Component) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}