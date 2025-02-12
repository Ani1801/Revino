export type NavItem = {
  title: string;
  href: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
  category: string;
};

export type ThemeMode = 'light' | 'dark';