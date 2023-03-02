import twig from './default.twig';

import { placeholder, sizes } from '../../global/placeholders/images.json';

import { accordion, hero, card, contact, testimonial, wysiwyg, video } from '../../global/placeholders/components.json';

import { menu, social } from '../../global/placeholders/global.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/General/Default',

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  return twig({ label, ...args });
};

const Default = Template.bind({});
const defaultArgs = {
  hero: hero,
  menu: menu,
  social: social,
  modules: [
    {
      module_type: 'wysiwyg',
      wysiwyg
    },
    {
      module_type: 'video',
      ...video
    },
    {
      module_type: 'contact',
      ...contact
    },
    {
      module_type: 'contact',
      ...contact
    },
    {
      module_type: 'accordion',
      ...accordion
    },
    {
      module_type: 'accordion',
      ...Object.assign({...accordion},
        {
          accordion_id: 'accordion_steps', modifier: "steps"
        }
      )
    },
    {
      module_type: 'accordion',
      accordion_id: 'accordion_icons',
      items: [
        {
          heading: 'Heading',
          content: 'Content',
          icon: 'icon-bell'
        },
        {
          heading: 'Heading',
          content: 'Content',
          icon: 'icon-search'
        }
      ]
    },
    {
      module_type: 'horizontalCard',
      ...Object.assign({...card},
        {
          image: {
            src: placeholder + sizes.landscapeCroppedMedium.width + "x" + sizes.landscapeCroppedMedium.height,
            alt: "Alt Text"
          }

        })
    },
    {
      module_type: 'testimonial',
      ...testimonial
    },
    {
      module_type: 'tabs'
    },
    {
      module_type: 'cta',
      section_heading: "Default CTA",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas urna in mauris dictum porta. Integer quis diam finibus, mattis dui quis, rhoncus orci. Nunc consequat, urna eget feugiat cursus, erat dolor vehicula nibh, et eleifend quam lorem at purus.",
      section_button: {
        url: "#",
        text: "Text"
      }
    },
    {
      section_background: {
        src: placeholder + sizes.wideCroppedXlarge.width + "x"+ sizes.wideCroppedXlarge.height,
      },
      module_type: 'cta',
      section_heading: "Default CTA",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas urna in mauris dictum porta. Integer quis diam finibus, mattis dui quis, rhoncus orci. Nunc consequat, urna eget feugiat cursus, erat dolor vehicula nibh, et eleifend quam lorem at purus.",
      section_button: {
        url: "#",
        text: "Text"
      }
    },
    {
      section_image: {
        src: placeholder + sizes.landscapeCroppedMedium.width + "x"+ sizes.landscapeCroppedMedium.height,
      },
      module_type: 'cta',
      section_heading: "Default CTA",
      section_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas urna in mauris dictum porta. Integer quis diam finibus, mattis dui quis, rhoncus orci. Nunc consequat, urna eget feugiat cursus, erat dolor vehicula nibh, et eleifend quam lorem at purus.",
      section_button: {
        url: "#",
        text: "Text"
      }
    }
    ,
    {
      module_type: 'three-up-cards',
      section_heading: 'Three Up Cards',
      section_class: 'bg-gradient-secondary',
      cards: Array.from({length: 3}, (v, i) => {
        return {
          ...card,
          image: {
            src: placeholder + sizes.landscapeCroppedSmall.width + "x" + sizes.landscapeCroppedSmall.height,
            alt: "Alt Text"
          }
        }
      })
    },
    {
      module_type: 'three-up-cards',
      section_heading: 'Three Up Event Cards',
      cards: Array.from({length: 3}, (v, i) => {
        return {
          ...card,
          type: {
            handle: "events",
            label: "Events"
          },
          date: {
            unformatted: "2020-12-20",
            month_short: "Dec",
            day: 20,
            full: "December 20, 2020"
          },
          image: {
            src: placeholder + sizes.landscapeCroppedSmall.width + "x" + sizes.landscapeCroppedSmall.height,
            alt: "Alt Text"
          }
        }
      })
    },
    {
      module_type: 'card-carousel',
      section_class: 'bg-light-primary',
      section_heading: 'Carousel',
      cards: Array.from({length: 8}, (v, i) => {
        return {
          ...card,
          image: {
            src: placeholder + sizes.landscapeCroppedSmall.width + "x" + sizes.landscapeCroppedSmall.height,
            alt: "Alt Text"
          }
        }
      })
    },
    {
      module_type: 'testimonial-carousel',
      section_heading: 'Testimonial Carousel',
      cards: Array.from({length: 8}, (v, i) => {
        return {
          ...testimonial
        }
      })
    },
    {
      module_type: 'card-carousel-center',
      section_class: 'bg-gradient-primary',
      section_heading: 'Center Carousel',
      cards: Array.from({length: 8}, (v, i) => {
        return {
          ...card,
          image: {
            src: placeholder + sizes.landscapeCroppedSmall.width + "x" + sizes.landscapeCroppedSmall.height,
            alt: "Alt Text"
          }
        }
      })
    },
    {
      module_type: 'step-list',
      section_heading: 'Step List'
    },
    {
      module_type: 'statistics',
      section_heading: 'Statistics'
    },
    {
      module_type: 'statistics',
      section_heading: 'Statistics (Side)',
      section_style: 'side',
      section_button: {
        url: "#",
        text: "Text"
      }
    },
    {
      module_type: 'links',
      section_heading: 'Links',
      section_class: "bg-gradient-secondary"
    }


  ]
};

// console.log(defaultArgs);
Default.args = defaultArgs

const Cookies = Template.bind({});
Cookies.args = {
  ...defaultArgs,
  cookie: 'Cookie Lorem ipsum'
}

const AnchorMenu = Template.bind({});
AnchorMenu.args = {
  ...defaultArgs,
  anchor_items: [
    {
      text: "Test",
      anchor: "#section-1"
    },
    {
      text: "Test 2",
      anchor: "#section-2"
    }
  ]
}

export { Default, Cookies, AnchorMenu }