"use client"

import * as React from "react"
import { Moon, Sun} from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeSelector() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger  asChild>
        <Button className="w-3/4" variant="outline" size="default">
          {theme=="dark"?(
          <div className="flex flex-row gap-1 items-center ">
            <Moon/>
            <div>
              Dark
            </div>
          </div>
          ):(
            <div className="flex flex-row gap-1 items-center">
              <Sun/>
              <div>
                Light
              </div>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {setTheme("light")}}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
