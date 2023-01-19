import twig from './listing.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Informational/Listing',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    items: [
      {
        label: {
          control: 'text',
        },
        icon: {
          control: 'select',
          options: [
            '',
            'email',
            'phone'
          ]
        },
        value: {
          control: 'text',
        }
      }
    ]

  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

const defaultArgs = {
  items: [
    {
      label: 'Label',
      value: 'Value'
    },
    {
      label: 'Label',
      value: 'Value'
    },
    {
      label: 'Label',
      value: 'Value',
      icon: 'email'
    }
  ]
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

