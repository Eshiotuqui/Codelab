import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useNavItems } from './hooks/useNavItems'

export const NavItems = () => {
  const { navItems, adminNavItems } = useNavItems()

  const renderNavItems = (items: typeof navItems) =>
    items.map((item) => (
      <SidebarMenuItem key={item.label}>
        <SidebarMenuButton asChild tooltip={item.label}>
          <Link href={item.path}>
            <item.icon className="text-primary group-data-[collapsible=icon]:text-white hover:text-primary transition-all" />
            <span>{item.label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ))

  return (
    <SidebarGroup>
      <SidebarMenu>
        {renderNavItems(navItems)}
        <Separator className="my-2" />
        {renderNavItems(adminNavItems)}
      </SidebarMenu>
    </SidebarGroup>
  )
}
