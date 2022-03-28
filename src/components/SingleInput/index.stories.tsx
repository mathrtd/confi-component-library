import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import SingleInput from "./SingleInput";
import { SingleInputProps } from "./types";

export default {
  title: "Components/SingleInput",
  component: SingleInput,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SingleInputProps> = (args) => <SingleInput {...args} />;

// Reuse that template for creating different stories
export const text = Template.bind({});
text.args = {numberOfDigits: 5, onChange: (e) => console.log(e.target.value)};