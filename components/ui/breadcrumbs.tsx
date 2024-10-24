"use client"

import { IconChevronRight } from "justd-icons"
import type { BreadcrumbProps, BreadcrumbsProps } from "react-aria-components"
import {
  Breadcrumb as BreadcrumbPrimitive,
  Breadcrumbs as BreadcrumbsPrimitive,
  type LinkProps
} from "react-aria-components"

import { Link } from "./link"
import { cn } from "./primitive"

const Breadcrumbs = <T extends object>({ className, ...props }: BreadcrumbsProps<T>) => {
  return <BreadcrumbsPrimitive {...props} className={cn("flex gap-1", className)} />
}

const Breadcrumb = ({ className, ...props }: BreadcrumbProps & LinkProps) => {
  return (
    <BreadcrumbPrimitive {...props} className={cn("flex text-sm items-center gap-1", className)}>
      <Link href={props.href} {...props} />
      {"href" in props && <IconChevronRight className="size-4 shrink-0 text-muted-fg" />}
    </BreadcrumbPrimitive>
  )
}

export { Breadcrumb, Breadcrumbs }
