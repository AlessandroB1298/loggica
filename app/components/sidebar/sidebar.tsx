import { memo, useCallback } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronRight, Projector } from "lucide-react";
import { projects } from "@/lib/constants/projects";
import { VersionSwitcher } from "./sidebarHeader";
import { gates } from "@/lib/utils/types/gates";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { switches } from "@/lib/utils/types/switches";
import { outputs } from "@/lib/utils/types/outputs";
import { useDnD } from "@/app/context/DnDContext";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { onCreateNewNode } from "@/lib/atom/nodes";
import { XYPosition } from "@xyflow/react";
import { DragGhost } from "../dragGhost";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export const RelaxedSidebar = memo(function SideBar() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "white" : "black";
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
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarHeader className="flex flex-row gap-2 items-center">
        <VersionSwitcher />
      </SidebarHeader>
      <Separator />
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
        <SidebarGroup>
          <SidebarGroupLabel>Nodes</SidebarGroupLabel>
          {isDragging && <DragGhost type={type} />}

          <Collapsible defaultOpen className="group/collapsible">
            <CollapsibleTrigger asChild>
              <div className="w-full">
                <Button className="mb-2 mt-2 w-full" variant="ghost">
                  Switches
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </Button>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {switches.map((sw) => {
                  const Icon = sw.icon;
                  return (
                    <SidebarMenuSubButton key={sw.name}>
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
                    </SidebarMenuSubButton>
                  );
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible defaultOpen className="group/collapsible">
            <CollapsibleTrigger asChild>
              <div className="w-full">
                <Button className="mb-2 mt-2 w-full" variant="ghost">
                  Outputs
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </Button>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {outputs.map((out) => {
                  const Icon = out.icon;
                  return (
                    <SidebarMenuSubButton key={out.name}>
                      <div
                        onPointerDown={(event) => {
                          setType(out.type);
                          onDragStart(event, addNewNode(out.type));
                        }}
                        className="curcor-grab"
                      >
                        <div className="flex flex-row gap-2 items-center">
                          <Icon />
                        </div>
                      </div>
                    </SidebarMenuSubButton>
                  );
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible defaultOpen className="group/collapsible">
            <CollapsibleTrigger asChild>
              <div className="w-full">
                <Button className="mb-2 w-full" variant="ghost">
                  Logical Gates
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </Button>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {gates.map((gate) => {
                  const Icon = gate.icon;
                  return (
                    <SidebarMenuSubItem key={gate.name}>
                      <SidebarMenuSubButton asChild>
                        <div
                          onPointerDown={(event) => {
                            setType(gate.type);
                            onDragStart(event, addNewNode(gate.type));
                          }}
                          className="cursor-grab"
                        >
                          <div className="flex flex-row gap-2 items-center ">
                            <Icon />
                            {gate.name}
                          </div>
                        </div>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="ml-8">
        <UserButton
          showName
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "40px",
                height: "40px",
              },
              userButtonOuterIdentifier: {
                color: color,
              },
            },
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
});
