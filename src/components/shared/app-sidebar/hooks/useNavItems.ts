import { useMemo } from 'react'
import {
  BookOpen,
  BookUp2,
  ChartArea,
  MessageCircle,
  SquareDashedBottomCode,
  Trophy,
  Users,
} from 'lucide-react'

type NavItem = {
  label: string
  path: string
  icon: React.ElementType
}

export function useNavItems() {
  const navItems: NavItem[] = useMemo(
    () => [
      {
        label: 'Cursos',
        path: '/',
        icon: SquareDashedBottomCode,
      },
      {
        label: 'Meus cursos',
        path: '/my-courses',
        icon: BookUp2,
      },
      {
        label: 'Ranking',
        path: '/ranking',
        icon: Trophy,
      },
    ],
    []
  )

  const adminNavItems: NavItem[] = useMemo(
    () => [
      {
        label: 'Estatísticas',
        path: '/admin',
        icon: ChartArea,
      },
      {
        label: 'Gerenciar cursos',
        path: '/admin/courses',
        icon: BookOpen,
      },
      {
        label: 'Gerenciar usuários',
        path: '/admin/users',
        icon: Users,
      },
      {
        label: 'Gerenciar comentários',
        path: '/admin/comments',
        icon: MessageCircle,
      },
    ],
    []
  )

  const allItems = useMemo(() => [...navItems, ...adminNavItems], [navItems, adminNavItems])

  return {
    navItems,
    adminNavItems,
    allItems,
  }
}
