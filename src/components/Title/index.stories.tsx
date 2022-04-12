import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Title from "./Title";
import { TitleProps } from "./types";

export default {
  title: "Components/Title",
  component: Title,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TitleProps> = (args) => <Title {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { text: 'Title' };