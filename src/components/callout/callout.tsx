import type { PropsWithChildren } from 'react';
import { CalloutVariants, variants } from './callout-variants';

type CalloutProps = PropsWithChildren<{
  title: string;
}> &
  CalloutVariants;

export function Callout(props: CalloutProps) {
  return (
    <div
      className={variants({
        type: props.type,
      })}
    >
      <h2 className="font-semibold">{props.title}</h2>

      <p>{props.children}</p>
    </div>
  );
}
