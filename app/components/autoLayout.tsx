import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { Workflow } from "lucide-react";
import { nodesAtom } from "@/lib/atom/nodes";
import { edgesAtom } from "@/lib/atom/edges";
import { useCallback } from "react";
import { useReactFlow } from "@xyflow/react";
import getElkLayout, { ElkDirectionType } from "./getElkLayout";

export default function AutoLayout({
  direction = "RIGHT",
}: {
  direction: ElkDirectionType;
}) {
  const [nodes, setNodes] = useAtom(nodesAtom);
  const [edges, setEdges] = useAtom(edgesAtom);
  const { fitView } = useReactFlow();
  const handleOnClick = useCallback(async () => {
    //safe guard against accidental auto layout with no edges
    if (edges.length === 0) {
      return;
    }
    const { appNodes, customEdges } = await getElkLayout({
      appNodes: nodes,
      customEdges: edges,
      direction: direction,
    });
    setNodes(appNodes);
    setEdges(customEdges);
    fitView();
    console.log(`app nodes: ${JSON.stringify(nodes, null, 2)}`);
    console.log(`custom edges: ${JSON.stringify(customEdges, null, 2)}`);
  }, [direction, nodes, edges, setNodes, setEdges, fitView]);

  return (
    <div>
      <Button variant="secondary" onClick={handleOnClick}>
        <Workflow />
        Auto
      </Button>
    </div>
  );
}
