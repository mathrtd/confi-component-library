import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Select from "./Select";
import { SelectProps } from "./types";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SelectProps> = (args) => <Select {...args} />;

// Reuse that template for creating different stories
export const SelectDefault = Template.bind({});
SelectDefault.args = { label: "select", options: [
  {
    label: 'opcao 1',
    value: 'valor 1'
  },
  {
    label: 'opcao 2',
    value: 'valor 2'
  },
  {
    label: 'opcao 3',
    value: 'valor 3'
  }
]};

export const SelectSearch = Template.bind({});
SelectSearch.args = { 
  label: "select search",
  search: true,
  options: [
    {
      label: 'opcao 1',
      value: 'valor 1'
    },
    {
      label: 'opcao 2',
      value: 'valor 2'
    },
    {
      label: 'opcao 3',
      value: 'valor 3'
    }
  ]
};