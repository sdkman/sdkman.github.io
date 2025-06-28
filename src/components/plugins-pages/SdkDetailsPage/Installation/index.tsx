import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';

type Props = {
  id: string;
};

export default function Installation({ id }: Props) {
  return (
    <div>
      <Heading as="h2">Installation</Heading>

      <CodeBlock language="shell">sdk install {id}</CodeBlock>
    </div>
  );
}
