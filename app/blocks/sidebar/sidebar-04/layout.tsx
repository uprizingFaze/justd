"use client"

import * as React from "react"

import { AppSidebar } from "@/app/blocks/sidebar/app-sidebar"
import {
  IconChevronLgDown,
  IconCirclePerson,
  IconLogout,
  IconSearch,
  IconSettings,
  IconShield
} from "justd-icons"
import { Avatar, Breadcrumb, Breadcrumbs, Button, Menu, Separator, Sidebar } from "ui"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar.Provider defaultOpen={false}>
      <AppSidebar collapsible="dock" intent="inset" />
      <Sidebar.Inset>
        <header className="sticky justify-between sm:justify-start top-0 bg-bg h-[3.57rem] px-4 flex items-center gap-x-2">
          <span className="flex items-center">
            <Sidebar.Trigger className="-ml-1.5" />
            <Separator className="h-6 mr-3 ml-1 sm:block hidden" orientation="vertical" />
            <Breadcrumbs>
              <Breadcrumb href="/blocks/sidebar/sidebar-01">Dashboard</Breadcrumb>
              <Breadcrumb>Newsletter</Breadcrumb>
            </Breadcrumbs>
          </span>

          <div className="flex sm:hidden items-center gap-x-2">
            <Button appearance="plain" aria-label="Search..." size="square-petite">
              <IconSearch />
            </Button>
            <Menu>
              <Menu.Trigger aria-label="Profile" className="flex items-center gap-x-2 group">
                <Avatar size="small" shape="circle" src="/images/sidebar/profile-slash.jpg" />
                <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
              </Menu.Trigger>
              <Menu.Content className="min-w-[--trigger-width]">
                <Menu.Item href="#">
                  <IconCirclePerson />
                  Profile
                </Menu.Item>
                <Menu.Item href="#">
                  <IconSettings />
                  Settings
                </Menu.Item>
                <Menu.Item href="#">
                  <IconShield />
                  Security
                </Menu.Item>
                <Menu.Item href="#">
                  <IconLogout />
                  Log out
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </div>
        </header>
        <div className="p-4 lg:p-6">{children}</div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  )
}
