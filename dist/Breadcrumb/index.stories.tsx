import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Breadcrumb } from ".";
import { BreadcrumbProps } from "./types";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
} as Meta;

// Create a master template for mapping args to render the Breadcrumb component
const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

// Reuse that template for creating different stories
export const OneItem = Template.bind({});
OneItem.args = {
  items: ['One'],
  activeItemIndex: 0,
};


export const FourItems = Template.bind({});
FourItems.args = {
  items: ['One', 'Two', 'Three', 'Four'],
  activeItemIndex: 1,
};