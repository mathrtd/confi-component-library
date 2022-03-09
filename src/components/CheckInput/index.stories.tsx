import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { CheckInput as CheckInputComponent } from ".";
import { CheckInputProps } from "./types";

export default {
  title: "Components/CheckInput",
  component: CheckInputComponent,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CheckInputProps> = (args) => <CheckInputComponent {...args} />;

// Reuse that template for creating different stories
export const CheckInput = Template.bind({});