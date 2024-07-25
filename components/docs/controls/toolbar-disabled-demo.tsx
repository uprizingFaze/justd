'use client'

import React from 'react'

import {
  IconAlignmentJustify,
  IconAlignmentJustifyFill,
  IconAlignmentRight,
  IconAlignmentRightFill,
  IconCamera,
  IconCameraFill,
  IconCursor,
  IconCursorFill,
  IconGallery,
  IconGalleryFill,
  IconPencilBox,
  IconPencilBoxFill,
  IconToolbox,
  IconToolboxFill
} from '@irsyadadl/paranoid'
import { Toggle, Toolbar, ToolbarGroup, ToolbarItem, ToolbarSeparator } from 'ui'

export default function ToolbarDisabledDemo() {
  return (
    <Toolbar aria-label="Toolbox">
      <ToolbarGroup aria-label="Toolbox">
        <Toggle isDisabled aria-label="Cursor" size="square-petite" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconCursorFill /> : <IconCursor />}</>}
        </Toggle>
        <Toggle aria-label="Pencil Box" size="square-petite" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconPencilBoxFill /> : <IconPencilBox />}</>}
        </Toggle>
        <Toggle aria-label="Pencil Box" size="square-petite" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconToolboxFill /> : <IconToolbox />}</>}
        </Toggle>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup isDisabled aria-label="Gallery">
        <ToolbarItem aria-label="Camera" size="square-petite" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconCameraFill /> : <IconCamera />}</>}
        </ToolbarItem>
        <ToolbarItem aria-label="Gallery" size="square-petite" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconGalleryFill /> : <IconGallery />}</>}
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup aria-label="Alignment">
        <Toggle aria-label="Align Right" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconAlignmentRightFill /> : <IconAlignmentRight />}</>}
        </Toggle>
        <Toggle aria-label="Align Justify" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconAlignmentJustifyFill /> : <IconAlignmentJustify />}</>}
        </Toggle>
      </ToolbarGroup>
    </Toolbar>
  )
}
