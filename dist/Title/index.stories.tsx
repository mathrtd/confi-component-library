import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Title as TitleComponent } from ".";
import { TitleProps } from "./types";

export default {
  title: "Components/Title/Title",
  component: TitleComponent,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TitleProps> = (args) => <TitleComponent {...args} />;

// Reuse that template for creating different stories
export const Title = Template.bind({});
Title.args = { text: 'Title' };