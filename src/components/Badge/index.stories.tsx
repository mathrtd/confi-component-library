import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Badge } from ".";
import { BadgeProps } from "./types";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta;

// Create a master template for mapping args to render the Badge component
const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

// Reuse that template for creating different stories
export const ExtraSmall = Template.bind({});
ExtraSmall.args = { value: 'Badge', fontSize: 'extra-small'};

export const Small = Template.bind({});
Small.args = { value: 'Badge', fontSize: 'small'};

export const MediumSmall = Template.bind({});
MediumSmall.args = { value: 'Badge', fontSize: 'medium-small'};

export const Medium = Template.bind({});
Medium.args = { value: 'Badge', fontSize: 'medium'};

export const MediumLarge = Template.bind({});
MediumLarge.args = { value: 'Badge', fontSize: 'medium-large'};

export const Large = Template.bind({});
Large.args = { value: 'Badge', fontSize: 'large'};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { value: 'Badge', fontSize: 'extra-large'};

export const DoubleExtraLarge = Template.bind({});
DoubleExtraLarge.args = { value: 'Badge', fontSize: '2extra-large'};