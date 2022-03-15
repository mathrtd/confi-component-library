import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./types";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

// Reuse that template for creating different stories
export const fullWidth = Template.bind({});
fullWidth.args = {variant: 'primary', progress: 50};

export const limitedWidth = Template.bind({});
limitedWidth.args = {variant: 'primary', progress: 50, maxWidth: 200};