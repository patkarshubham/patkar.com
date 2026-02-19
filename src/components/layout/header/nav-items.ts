export const navItems = [
  {
    type: 'link',
    href: '/',
    label: 'Home',
  },
  {
    type: 'link',
    label: 'Chat',
    href: '/text-generator',
  },
  {
    type: 'link',
    label: 'Pricing',
    href: '/pricing',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '/contact',
  },
  {
    type: 'dropdown',
    label: 'Pages',
    items: [
      { href: '/signin', label: 'Sign In' },
      { href: '/signup', label: 'Sign Up' },
      { href: '/reset-password', label: 'Reset Password' },
      { href: '/not-found', label: '404 Error' },
    ],
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'dropdown';
      }
  );
