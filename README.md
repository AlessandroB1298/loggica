# Loggica 

## Getting Started 
Welcome to loggica, the open-source solution for building integrated circuits and logical based systems.

To build the following project, simiply use the following command:

```bash
npm run build
```
To run the following project, simply use the following command:

```bash
npm run dev
```

## AI 
Using AI to run analysis on your systems to generate documentation and diagrams.


## Updating Nodes and Edges
To update nodes and edges, there are a few considerations to think about:

Looking at our nodes at `@/lib/atom/nodes.ts`, we can see the AppNode type, where we have our {} object which is represented as the `data`
prop when being referenced later. 

We can add fields in this object, as needed.
```ts
export type AppNode = Node<
  { label: string; isOn: boolean },
  "switch" | "andGate" | "orGate" | "norGate" | "notGate"
>;

```
To update edges we can look at `@/app/components/edges/electricEdgeAnimated.tsx`, where we have the following type

```ts
export type CustomEdgeData = {
  isValid?: boolean;
};
export type CustomEdge = Edge<CustomEdgeData, "electric">;
```

Again we can then use the data prop to update these fields.


## License 
This project is licensed under MIT
