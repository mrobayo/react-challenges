
# Install

```shell
pnpm create next-app@latest react-challenges
pnpm dlx shadcn@latest init
pnpm install react-icons
pnpm dlx shadcn@latest add breadcrumb button calendar card checkbox dropdown-menu input label popover scroll-area select separator table textarea sonner skeleton

pnpm add next-themes
```

# MySQL with Prisma

```shell
pnpm install prisma --save-dev
pnpm install @prisma/client @prisma/adapter-mariadb dotenv

pnpm dlx prisma init --datasource-provider mysql --output ../generated/prisma
pnpm dlx prisma migrate dev --name init
pnpm dlx prisma generate
```


# Tables

```shell
pnpm dlx shadcn@latest add table
pnpm add @tanstack/react-table
```

