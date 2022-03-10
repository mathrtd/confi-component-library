import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Button } from ".";
import { ButtonProps } from "./types";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary", size: "medium"};

export const Secondary = Template.bind({});
Secondary.args = { label: "Secondary", size: "medium", variant: "primary", outline: true};

export const Success = Template.bind({});
Success.args = { label: "Success", size: "medium", variant: 'success'};

export const Warning = Template.bind({});
Warning.args = { label: "Warning", size: "medium", variant: 'warning'};

export const Danger = Template.bind({});
Danger.args = { label: "Danger", size: "medium", variant: 'danger'};