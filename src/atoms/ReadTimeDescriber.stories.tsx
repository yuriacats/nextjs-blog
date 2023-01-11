import type { ComponentStory, ComponentMeta } from "@storybook/react";
import ReadTimeDescriber from "./ReadTimeDescriber";

export default {
  title: "購読時間目安表示",   // コンポーネントのタイトル(任意)
  component: ReadTimeDescriber, // 実際に使用するコンポーネント（上でimportしたもの）
} as ComponentMeta<typeof ReadTimeDescriber>;

const Template: ComponentStory<typeof ReadTimeDescriber> = (args) => <ReadTimeDescriber {...args}/>;

export const Default: ComponentStory<typeof ReadTimeDescriber> = Template.bind({});

Default.args ={
    dateString:3
}
Default.storyName="Default"