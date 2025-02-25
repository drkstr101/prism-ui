import { Heading } from '@bitdesign/sparks.typography.heading';
import { Text } from '@bitdesign/sparks.typography.text';
import { Card } from '@prism/design.content.card';
import { User } from '@prism/people.entities.user';
import type { ReactNode } from 'react';

export type UserCardProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;

  /**
   * user entity to display
   */
  user?: User;
};

export function UserCard({ children, user }: UserCardProps) {
  return (
    <Card>
      <Heading level={2}>{user.displayName}</Heading>
      <Text element="div">
        <span>@</span>
        {user.username}
      </Text>
      {children}
    </Card>
  );
}
