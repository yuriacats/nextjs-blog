import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Date from "./date"; 

export default {
  title: "日時表示",   // コンポーネントのタイトル(任意)
  component: Date, // 実際に使用するコンポーネント（上でimportしたもの）
} as ComponentMeta<typeof Date>;

const Template: ComponentStory<typeof Date> = (args) => <Date {...args}/>;

export const Default: ComponentStory<typeof Date> = Template.bind({});
