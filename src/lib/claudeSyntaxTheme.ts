/**
 * Tomorrow Night Blue syntax highlighting theme
 * Matches VS Code's Tomorrow Night Blue theme colors
 */
export const claudeSyntaxTheme: any = {
  'code[class*="language-"]': {
    color: '#ffffff',
    background: 'transparent',
    textShadow: 'none',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.875em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#ffffff',
    background: 'transparent',
    textShadow: 'none',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.875em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '0',
    overflow: 'auto',
  },
  ':not(pre) > code[class*="language-"]': {
    background: 'rgba(0, 63, 142, 0.3)',
    padding: '0.1em 0.3em',
    borderRadius: '0.3em',
    whiteSpace: 'normal',
  },
  'comment': {
    color: '#969896',
    fontStyle: 'italic',
  },
  'prolog': {
    color: '#969896',
  },
  'doctype': {
    color: '#969896',
  },
  'cdata': {
    color: '#969896',
  },
  'punctuation': {
    color: '#ffffff',
  },
  'namespace': {
    opacity: '0.7',
  },
  'property': {
    color: '#de935f', // Tomorrow Night Orange (variable)
  },
  'tag': {
    color: '#81a2be', // Tomorrow Night Blue (keyword)
  },
  'boolean': {
    color: '#de935f', // Tomorrow Night Orange
  },
  'number': {
    color: '#de935f', // Tomorrow Night Orange
  },
  'constant': {
    color: '#de935f', // Tomorrow Night Orange
  },
  'symbol': {
    color: '#de935f', // Tomorrow Night Orange
  },
  'deleted': {
    color: '#cc6666', // Tomorrow Night Red
  },
  'selector': {
    color: '#b294bb', // Tomorrow Night Purple
  },
  'attr-name': {
    color: '#de935f', // Tomorrow Night Orange
  },
  'string': {
    color: '#b5bd68', // Tomorrow Night Green
  },
  'char': {
    color: '#b5bd68', // Tomorrow Night Green
  },
  'builtin': {
    color: '#81a2be', // Tomorrow Night Blue
  },
  'url': {
    color: '#b5bd68', // Tomorrow Night Green
  },
  'inserted': {
    color: '#b5bd68', // Tomorrow Night Green
  },
  'entity': {
    color: '#b294bb', // Tomorrow Night Purple
    cursor: 'help',
  },
  'atrule': {
    color: '#81a2be', // Tomorrow Night Blue (keyword)
  },
  'attr-value': {
    color: '#b5bd68', // Tomorrow Night Green
  },
  'keyword': {
    color: '#81a2be', // Tomorrow Night Blue
  },
  'function': {
    color: '#f0c674', // Tomorrow Night Yellow
  },
  'class-name': {
    color: '#f0c674', // Tomorrow Night Yellow
  },
  'regex': {
    color: '#b5bd68', // Tomorrow Night Green
  },
  'important': {
    color: '#cc6666', // Tomorrow Night Red
    fontWeight: 'bold',
  },
  'variable': {
    color: '#de935f', // Tomorrow Night Orange
  },
  'bold': {
    fontWeight: 'bold',
  },
  'italic': {
    fontStyle: 'italic',
  },
  'operator': {
    color: '#ffffff',
  },
  'script': {
    color: '#ffffff',
  },
  'parameter': {
    color: '#de935f', // Tomorrow Night Orange
  },
  'method': {
    color: '#f0c674', // Tomorrow Night Yellow
  },
  'field': {
    color: '#de935f', // Tomorrow Night Orange
  },
  'annotation': {
    color: '#969896',
  },
  'type': {
    color: '#81a2be', // Tomorrow Night Blue
  },
  'module': {
    color: '#81a2be', // Tomorrow Night Blue
  },
}; 