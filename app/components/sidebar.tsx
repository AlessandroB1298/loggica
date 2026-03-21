"use client";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Cpu, Projector, UserIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gates } from "@/lib/utils/types/gates";
import { useSetAtom } from "jotai";
import { onCreateNewNode } from "@/lib/atom/nodes";
import { useDnD } from "../context/DnDContext";
import { memo, useCallback, useState } from "react";
import { XYPosition } from "@xyflow/react";
import { DragGhost } from "./dragGhost";
import { Button } from "@/components/ui/button";
import { switches } from "@/lib/utils/types/switches";
import { outputs } from "@/lib/utils/types/outputs";
import { projects } from "@/lib/constants/projects";

export const AppSidebar = memo(function AppSidebar() {
  const { onDragStart, isDragging } = useDnD();
  const [type, setType] = useState<string | null>(null);
  const createNewNode = useSetAtom(onCreateNewNode);

  const addNewNode = useCallback(
    (nodeType: string) =>
      ({ position }: { position: XYPosition }) => {
        createNewNode({ nodeType, position });
      },
    [createNewNode],
  );

  return (
    <Sidebar variant="floating" collapsible="offcanvas" className="">
      <SidebarHeader className="flex flex-row gap-4">
        <UserIcon />
        User
      </SidebarHeader>
      <Separator />
      <Tabs defaultValue="projects" className="m-2">
        <TabsList className="flex items-center w-full mt-2 ">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="logic">Logic</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <SidebarContent className="flex items-center w-auto mt-2">
            <SidebarGroup>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
              {projects.map((project) => (
                <SidebarMenuItem key={project.projectName}>
                  <SidebarMenuButton asChild>
                    <div className="w-full">
                      <Projector />
                      <span>{project.projectName}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarGroup>
          </SidebarContent>
        </TabsContent>
        <TabsContent value="logic">
          <SidebarContent className=" z-50 items-center  w-full mt-2">
            <SidebarGroup>
              <SidebarGroupLabel>Switches</SidebarGroupLabel>
              {isDragging && <DragGhost type={type} />}
              {switches.map((sw) => {
                const Icon = sw.icon;
                return (
                  <SidebarMenuItem key={sw.type}>
                    <SidebarMenuButton className="w-full h-16" asChild>
                      <div
                        onPointerDown={(event) => {
                          setType(sw.type);
                          onDragStart(event, addNewNode(sw.type));
                        }}
                        className="cursor-grab"
                      >
                        <div className="flex flex-row gap-2 items-center">
                          <Icon />
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Outputs</SidebarGroupLabel>
              {isDragging && <DragGhost type={type} />}
              {outputs.map((output) => {
                const Icon = output.icon;
                return (
                  <SidebarMenuItem key={output.type}>
                    <SidebarMenuButton className="w-full h-16" asChild>
                      <div
                        onPointerDown={(event) => {
                          setType(output.type);
                          onDragStart(event, addNewNode(output.type));
                        }}
                        className="cursor-grab"
                      >
                        <div className="flex flex-row gap-2 items-center">
                          <Icon />
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Logical Gates</SidebarGroupLabel>
              {isDragging && <DragGhost type={type} />}
              {gates.map((gate) => {
                const Icon = gate.icon;
                return (
                  <SidebarMenuItem key={gate.name}>
                    <SidebarMenuButton className="w-full h-auto " asChild>
                      <div
                        onPointerDown={(event) => {
                          setType(gate.type);
                          onDragStart(event, addNewNode(gate.type));
                        }}
                        className="cursor-grab"
                      >
                        <div className="flex flex-row items-center gap-2">
                          <Icon />
                          {gate.name}
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Your Integrated Circuits</SidebarGroupLabel>
              <SidebarMenuItem className="flex flex-row gap-2">
                {Array.from([1, 2, 3]).map((index) => (
                  <Button
                    variant={"default"}
                    className="w/1-2 hover:cursor-pointer"
                    key={index + 1}
                  >
                    <Cpu size={24} />
                  </Button>
                ))}
              </SidebarMenuItem>
            </SidebarGroup>
          </SidebarContent>
        </TabsContent>
      </Tabs>
      <SidebarRail />
    </Sidebar>
  );
});
