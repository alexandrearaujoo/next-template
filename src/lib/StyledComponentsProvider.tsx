import { useServerInsertedHTML } from 'next/navigation';
import { ReactNode, useState } from 'react';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function StyledComponentsProvider({
  children
}: {
  children: ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
