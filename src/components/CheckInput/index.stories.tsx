import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import CheckInput from "./CheckInput";
import { CheckInputProps } from "./types";

export default {
  title: "Components/CheckInput",
  component: CheckInput,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CheckInputProps> = (args) => <CheckInput {...args} />;

// Reuse that template for creating different stories
export const Checkbox = Template.bind({});