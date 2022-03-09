import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Card as CardComponent } from ".";
import { CardProps } from "./types";
import { Button } from "../Button";

export default {
  title: "Components/Card",
  component: CardComponent,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CardProps> = (args) => <CardComponent {...args} />;

// Reuse that template for creating different stories
export const EmptyCard = Template.bind({});
EmptyCard.args = { title: 'Empty card' };

export const CardWithContent = Template.bind({});
CardWithContent.args = {
  title: 'Card with content',
  child: <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel augue in urna fringilla eleifend vitae at tellus. Cras dapibus scelerisque enim, ut facilisis tellus convallis id. Donec leo elit, convallis nec ligula vel, luctus bibendum mauris. Donec sit amet quam malesuada, molestie metus sed, sodales elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultricies, sapien non blandit consectetur, eros diam faucibus eros, a laoreet dolor elit ut ligula. Duis orci erat, pharetra in elit eu, convallis commodo nunc.</p>
    <p>Etiam iaculis neque metus, non mollis dui hendrerit nec. Donec efficitur mi sit amet lobortis tristique. Pellentesque nibh diam, tempor id ipsum non, ullamcorper pellentesque nisl. Praesent volutpat lobortis felis quis congue. Pellentesque quam nunc, aliquam in neque rhoncus, venenatis maximus diam. Aliquam semper eget quam nec faucibus. Pellentesque volutpat rutrum mattis. Sed sed mauris ut ipsum tristique volutpat. Integer dignissim, purus a varius malesuada, eros enim iaculis enim, in interdum eros risus pellentesque neque.</p>
  </div>
};

export const CardWithActions = Template.bind({});
CardWithActions.args = {
  title: 'Card with actions',
  actions: [
    <Button
      variant="primary"
      outline
      label="Action"
    />
  ],
  child: <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel augue in urna fringilla eleifend vitae at tellus. Cras dapibus scelerisque enim, ut facilisis tellus convallis id. Donec leo elit, convallis nec ligula vel, luctus bibendum mauris. Donec sit amet quam malesuada, molestie metus sed, sodales elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultricies, sapien non blandit consectetur, eros diam faucibus eros, a laoreet dolor elit ut ligula. Duis orci erat, pharetra in elit eu, convallis commodo nunc.</p>
    <p>Etiam iaculis neque metus, non mollis dui hendrerit nec. Donec efficitur mi sit amet lobortis tristique. Pellentesque nibh diam, tempor id ipsum non, ullamcorper pellentesque nisl. Praesent volutpat lobortis felis quis congue. Pellentesque quam nunc, aliquam in neque rhoncus, venenatis maximus diam. Aliquam semper eget quam nec faucibus. Pellentesque volutpat rutrum mattis. Sed sed mauris ut ipsum tristique volutpat. Integer dignissim, purus a varius malesuada, eros enim iaculis enim, in interdum eros risus pellentesque neque.</p>
  </div>
};