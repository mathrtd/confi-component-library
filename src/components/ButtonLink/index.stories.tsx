import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonLinkProps } from "./types";
import ButtonLink from "./ButtonLink";

export default {
  title: "Components/ButtonLink",
  component: ButtonLink,
} as Meta;

// Create a master template for mapping args to render the ButtonLink component
const Template: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />;

// Reuse that template for creating different stories
export const ButtonLinkDefault = Template.bind({});
ButtonLinkDefault.args = { label: "Button Link" };