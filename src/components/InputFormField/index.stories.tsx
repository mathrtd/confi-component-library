import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { InputFormField } from ".";
import { InputFormFieldProps } from "./types";

export default {
  title: "Components/InputFormField",
  component: InputFormField,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<InputFormFieldProps> = (args) => <InputFormField {...args} />;

// Reuse that template for creating different stories
export const text = Template.bind({});
text.args = { label: "text", inputType: "text"};

export const search = Template.bind({});
search.args = { label: "search", inputType: "search"};

export const encrypted = Template.bind({});
encrypted.args = { label: "encrypted", inputType: "encrypted"};

export const password = Template.bind({});
password.args = { label: "password", inputType: "password"};