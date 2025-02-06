import { Link } from "@/src/i18n/routing"
import { MenuIcon } from "lucide-react"

import { Button } from "@/src/components/new-york/ui/button"
import { Menu } from "@/src/components/dashboard/menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/src/components/new-york/ui/sheet"
import StreamRecIcon from "@/src/components/Logo"
import { SidebarStrings } from "@/src/app/hooks/translations/use-sidebar-translations"

export function SheetMenu({ navStrings }: { navStrings: SidebarStrings }) {
	return (
		<Sheet>
			<SheetTrigger className='lg:hidden' asChild>
				<Button className='h-8' variant='outline' size='icon'>
					<MenuIcon size={20} />
				</Button>
			</SheetTrigger>
			<SheetContent className='flex h-full flex-col px-3 sm:w-72' side='left'>
				<SheetHeader>
					<Button className='flex items-center justify-center pb-2 pt-1' variant='link' asChild>
						<Link href='/dashboard' className='flex items-center gap-2'>
							<div className='mr-1 h-8 w-8'>
								<StreamRecIcon />
							</div>
							<SheetTitle className='text-lg font-bold'>Stream-rec</SheetTitle>
						</Link>
					</Button>
				</SheetHeader>
				<Menu navStrings={navStrings} isOpen={true} />
			</SheetContent>
		</Sheet>
	)
}
