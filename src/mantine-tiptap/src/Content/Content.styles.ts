import { createStyles, MantineTheme } from '@mantine/core';

interface ContentStylesParams {
  withCodeHighlightStyles: boolean;
  withTypographyStyles: boolean;
}

function getCodeHighlight(withCodeHighlightStyles: boolean, theme: MantineTheme) {
  if (!withCodeHighlightStyles) {
    return null;
  }

  const highlightIndex = theme.colorScheme === 'dark' ? 5 : 7;

  return {
    pre: {
      background:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.fn.rgba(theme.colors.gray[0], 0.65),
      borderRadius: theme.fn.radius(),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
      fontFamily: theme.fontFamilyMonospace,
      padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,

      '& code': {
        background: 'none',
        color: 'inherit',
        fontSize: theme.fontSizes.sm,
        padding: 0,
      },

      ' & .hljs-comment, & .hljs-quote': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
      },

      '& .hljs-variable, & .hljs-template-variable, & .hljs-attribute, & .hljs-tag, & .hljs-name, & .hljs-regexp, & .hljs-link, & .hljs-name, & .hljs-selector-id, & .hljs-selector-class':
        {
          color: theme.colors.red[highlightIndex],
        },

      '& .hljs-number, & .hljs-meta, & .hljs-built_in, & .hljs-builtin-name, & .hljs-literal, & .hljs-type, & .hljs-params':
        {
          color: theme.colors[theme.colorScheme === 'dark' ? 'cyan' : 'blue'][highlightIndex],
        },

      '& .hljs-string, & .hljs-symbol, & .hljs-bullet': {
        color: theme.colors.red[highlightIndex],
      },

      '& .hljs-title, & .hljs-section': {
        color: theme.colors[theme.colorScheme === 'dark' ? 'yellow' : 'pink'][highlightIndex],
      },

      '& .hljs-keyword, & .hljs-selector-tag': {
        color: theme.colors.violet[highlightIndex],
      },

      '& .hljs-emphasis': {
        fontStyle: 'italic',
      },

      '& .hljs-strong': {
        fontWeight: 700,
      },
    },
  };
}

function getTypographyStyles(withTypographyStyles: boolean) {
  if (!withTypographyStyles) {
    return null;
  }

  return {
    '& li > p': {
      margin: 0,
    },

    '& ul li, & ol li': {
      marginTop: 2,
    },

    '& ul, & ol': {
      marginTop: 5,
      marginBottom: 5,
    },

    '& p': {
      marginBottom: 7,
    },

    '& h1, & h2, & h3, & h4, & h5, & h6, & p': {
      marginTop: 0,
    },
  };
}

export default createStyles(
  (theme, { withCodeHighlightStyles, withTypographyStyles }: ContentStylesParams) => ({
    typographyStylesProvider: {
      ...getTypographyStyles(withTypographyStyles),
    },

    content: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      padding: theme.spacing.md,
      borderRadius: theme.fn.radius(),

      '& .ProseMirror': {
        outline: 0,
      },

      '& .ProseMirror > *:last-child': {
        marginBottom: 0,
      },

      '& .ProseMirror p.is-editor-empty:first-child::before': {
        content: 'attr(data-placeholder)',
        userSelect: 'none',
        float: 'left',
        height: 0,
        pointerEvents: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },

      ...getCodeHighlight(withCodeHighlightStyles, theme),
    },
  })
);
