import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { Typography } from "./Typography";

const meta = {
  component: Typography,
  parameters: {
    controls: { exclude: ["as", "children"] },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "I'm a Typography component",
  },
  play: async ({ canvas }) => {
    const element = await canvas.getByRole("paragraph");

    await expect(element.tagName).toBe("P");
  },
};
