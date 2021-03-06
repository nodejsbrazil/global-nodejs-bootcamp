export const slugify = input =>
  input
    .toString()
    .toLowerCase()
    .replace(/[áãâà]/gi, 'a')
    .replace(/[éê]/gi, 'e')
    .replace(/í/gi, 'i')
    .replace(/[óõô]/gi, 'o')
    .replace(/ú/gi, 'u')
    .replace(/ñ/gi, 'n')
    .replace(/ç/g, 'c')
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
