"use client"

import { DropdownMenu, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import Link from "next/link"

const UserAccountNav = ({}) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild className="overflow-visible">
            <Button variant="ghost" size="sm" className="relative"> My account </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white w-60" align="end">
            <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y0.5 leading-none">
                    <p className="font-medium text-sm text-black">
                        username
                    </p>
                </div>
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
                <Link href={'/sell'}> Seller Dashboard </Link>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="cusor-pointer">
                Log out
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

    )
}

export default UserAccountNav