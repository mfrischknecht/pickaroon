import { ComponentItemConfig, GoldenLayout, LayoutConfig } from "golden-layout";
export declare function getLayoutConfig(layout: GoldenLayout): LayoutConfig;
export declare function iterateComponents(config: LayoutConfig): Generator<ComponentItemConfig>;
