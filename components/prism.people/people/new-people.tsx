import { Flex } from '@bitdesign/sparks.layout.flex';
import { Text } from '@bitdesign/sparks.typography.text';
import { Card } from '@prism/design.content.card';
import { useUserList } from '@prism/people.hooks.use-user-list';

export function NewPeople() {
  const people = useUserList();
  if (!people) return null;

  return (
    <Card>
      <Flex direction="column" alignItems="start">
        {people.map((user) => {
          return (
            <Text element="span" key={user.username}>
              {user.displayName}
            </Text>
          );
        })}
      </Flex>
    </Card>
  );
}
