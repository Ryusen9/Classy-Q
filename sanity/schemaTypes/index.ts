import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { newWatch } from "./watchType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, newWatch],
};
