import "@testing-library/jest-dom";
import {
  getId,
  handleAndStatement,
  handleNodeChanges,
  handleNotStatement,
  handleSwitchStatement,
  isNodePowered,
} from "@/lib/helpers/nodeHelper";
import { AppNode } from "@/lib/utils/types/nodes";
import { CustomEdge } from "@/lib/utils/types/edges";
import { handleGateProps } from "@/lib/utils/types/gates";
import { Position } from "@xyflow/react";

describe("Node helpers", () => {
  const andAllNodes: AppNode[] = [
    {
      id: "node-1",
      data: { isOn: true, label: "switch" },
      position: { x: 0, y: 0 },
      type: "switch",
    },

    {
      id: "node-2",
      data: { isOn: true, label: "andGate" },
      position: { x: 0, y: 0 },
      type: "andGate",
      handles: [
        {
          id: "andGate-input-1-node-2",
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          type: "source",
          position: Position.Left,
        },
        {
          id: "andGate-input-2-node-2",
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          type: "source",
          position: Position.Left,
        },
      ],
    },
  ];
  const andIncoming: CustomEdge[] = [
    {
      id: "edge-1",
      source: "node-1",
      target: "node-2",
      targetHandle: "andGate-input-1-node-2",
      data: { isValid: true },
    },
    {
      id: "edge-2",
      source: "node-1",
      target: "node-2",
      targetHandle: "andGate-input-2-node-2",
      data: { isValid: true },
    },
  ];
  const andParams: handleGateProps = {
    incoming: andIncoming,
    nodeId: "node-2",
    currentEdges: andIncoming,
    allNodes: andAllNodes,
    visited: new Set<string>(),
    depth: 0,
  };

  const notAllNodes: AppNode[] = [
    {
      id: "node-0",
      data: { isOn: true, label: "switch" },
      position: { x: 0, y: 0 },
      type: "switch",
    },

    {
      id: "node-1",
      data: { isOn: false, label: "notGate" },
      position: { x: 0, y: 0 },
      type: "notGate",
      handles: [
        {
          id: "not-input-node-1",
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          type: "source",
          position: Position.Left,
        },
      ],
    },
  ];
  const notIncoming: CustomEdge[] = [
    {
      id: "edge-1",
      source: "node-0",
      target: "node-1",
      targetHandle: "not-input-node-1",
      data: { isValid: true },
    },
  ];
  const notParams: handleGateProps = {
    incoming: notIncoming,
    nodeId: "node-1",
    currentEdges: notIncoming,
    allNodes: notAllNodes,
    visited: new Set<string>(),
    depth: 0,
  };

  describe("getId function", () => {
    it("should return id as a string", () => {
      const id = getId();
      expect(id).toContain("dndnode_");
    });
  });
  describe("handleNodeChange", () => {
    const nodes: AppNode[] = [
      {
        id: "node-1",
        data: { isOn: false, label: "andGate" },
        position: { x: 0, y: 0 },
        type: "andGate",
      },
      {
        id: "node-2",
        data: { isOn: false, label: "orGate" },
        position: { x: 0, y: 0 },
        type: "orGate",
      },
      {
        id: "node-3",
        data: { isOn: false, label: "notGate" },
        position: { x: 0, y: 0 },
        type: "notGate",
      },
    ];
    const edges: CustomEdge[] = [
      {
        id: "edge-1",
        source: "node-1",
        target: "node-2",
        data: { isValid: false },
      },
      {
        id: "edge-2",
        source: "node-2",
        target: "node-3",
        data: { isValid: false },
      },
    ];
    it("should return Record<string,boolean>", () => {
      const result = handleNodeChanges({ nodes: nodes, edges: edges });
      // node-3 is a not gate, where its source is false so the output should be true
      expect(result && typeof result === "object").toBe(true);
    });
    it("should return true for node-3", () => {
      const result = handleNodeChanges({ nodes: nodes, edges: edges });
      expect(result["node-3"]).toBe(true);
    });
    it("should return false for node-1 and node-2", () => {
      const result = handleNodeChanges({ nodes: nodes, edges: edges });
      expect(result["node-1"]).toBe(false);
      expect(result["node-2"]).toBe(false);
    });
  });
  describe("handleAndStatement", () => {
    it("should return boolean", () => {
      const result = handleAndStatement({
        incoming: andParams.incoming,
        nodeId: andParams.nodeId,
        currentEdges: andParams.currentEdges,
        allNodes: andParams.allNodes,
        visited: andParams.visited,
        depth: andParams.depth,
      });
      expect(typeof result === "boolean").toBe(true);
    });
    it("should return true", () => {
      const result = handleAndStatement({
        incoming: andParams.incoming,
        nodeId: andParams.nodeId,
        currentEdges: andParams.currentEdges,
        allNodes: andParams.allNodes,
        visited: andParams.visited,
        depth: andParams.depth,
      });
      expect(result).toBe(true);
    });
    it("should return false given incorrect inputs", () => {
      const result = handleAndStatement({
        incoming: [],
        nodeId: andParams.nodeId,
        currentEdges: andParams.currentEdges,
        allNodes: andParams.allNodes,
        visited: andParams.visited,
        depth: andParams.depth,
      });

      expect(result).toBe(false);
    });
  });
  describe("handleNotStatement", () => {
    it("should return boolean", () => {
      const result = handleNotStatement({
        incoming: notParams.incoming,
        nodeId: notParams.nodeId,
        currentEdges: notParams.currentEdges,
        allNodes: notParams.allNodes,
        visited: notParams.visited,
        depth: notParams.depth,
      });
      expect(typeof result === "boolean").toBe(true);
    });
    it("should return false given true input", () => {
      const result = handleNotStatement({
        incoming: notParams.incoming,
        nodeId: notParams.nodeId,
        currentEdges: notParams.incoming,
        allNodes: notParams.allNodes,
        visited: notParams.visited,
        depth: notParams.depth,
      });
      expect(result).toBe(false);
    });
    it("should return true given false input", () => {
      const allNodes: AppNode[] = [
        {
          id: "node-0",
          data: { isOn: false, label: "switch" },
          position: { x: 0, y: 0 },
          type: "switch",
        },

        {
          id: "node-1",
          data: { isOn: false, label: "notGate" },
          position: { x: 0, y: 0 },
          type: "notGate",
          handles: [
            {
              id: "not-input-node-1",
              width: 0,
              height: 0,
              x: 0,
              y: 0,
              type: "source",
              position: Position.Left,
            },
          ],
        },
      ];
      const result = handleNotStatement({
        incoming: notParams.incoming,
        nodeId: notParams.nodeId,
        currentEdges: notParams.incoming,
        allNodes: allNodes,
        visited: notParams.visited,
        depth: notParams.depth,
      });
      expect(result).toBe(true);
    });
  });
  describe("handleSwitchStatement", () => {
    const node: AppNode = {
      id: "appNode",
      data: { isOn: false, label: "switch" },
      type: "switch",
      position: { x: 0, y: 0 },
    };
    it("should return boolean", () => {
      const result = handleSwitchStatement(node);
      expect(typeof result === "boolean").toBe(true);
    });
    it("should return false", () => {
      const result = handleSwitchStatement(node);
      expect(result).toBe(false);
    });
  });
  describe("isNodePowered", () => {
    it("should return boolean", () => {
      const result = isNodePowered(
        andParams.nodeId,
        andParams.currentEdges,
        andParams.allNodes,
        andParams.visited,
        andParams.depth,
      );
      expect(typeof result === "boolean").toBe(true);
    });
    it("should return false for not-gate", () => {
      const result = isNodePowered(
        notParams.nodeId,
        notParams.currentEdges,
        notParams.allNodes,
        notParams.visited,
        notParams.depth,
      );
      expect(result).toBe(false);
    });
    it("should return true for and-gate", () => {
      const result = isNodePowered(
        andParams.nodeId,
        andParams.incoming,
        andParams.allNodes,
        new Set<string>(), // for testing purposes add a new set for each iteration
        andParams.depth,
      );
      expect(result).toBe(true);
    });
  });
});
