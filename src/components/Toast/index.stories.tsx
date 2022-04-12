import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Toast from "./Toast";
import { ToastProps } from "./types";

export default {
  title: "Components/Toast",
  component: Toast,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ToastProps> = (args) => <Toast {...args} />;

// Reuse that template for creating different stories
export const Success = Template.bind({});
Success.args = { elementType: 'success', message: 'Success toast', position: 'topLeft', isActive: true };

export const Warning = Template.bind({});
Warning.args = { elementType: 'warning', message: 'Warning toast', position: 'topLeft', isActive: true };

export const Error = Template.bind({});
Error.args = { elementType: 'error', message: 'Error toast', position: 'topLeft', isActive: true };