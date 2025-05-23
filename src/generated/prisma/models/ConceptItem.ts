
/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// @ts-nocheck 
/**
 * This file exports the `ConceptItem` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"

/**
 * Model ConceptItem
 * 
 */
export type ConceptItemModel = runtime.Types.Result.DefaultSelection<Prisma.$ConceptItemPayload>






export type ConceptItemCompositeFilter = {
  equals?: Prisma.ConceptItemObjectEqualityInput
  is?: Prisma.ConceptItemWhereInput
  isNot?: Prisma.ConceptItemWhereInput
}

export type ConceptItemOrderByInput = {
  name?: Prisma.SortOrder
  type?: Prisma.SortOrder
  frequency?: Prisma.SortOrder
}

export type ConceptItemCreateEnvelopeInput = {
  set?: Prisma.ConceptItemCreateInput
}

export type ConceptItemUpdateEnvelopeInput = {
  set?: Prisma.ConceptItemCreateInput
  update?: Prisma.ConceptItemUpdateInput
}

export type ConceptItemWhereInput = {
  AND?: Prisma.ConceptItemWhereInput | Prisma.ConceptItemWhereInput[]
  OR?: Prisma.ConceptItemWhereInput[]
  NOT?: Prisma.ConceptItemWhereInput | Prisma.ConceptItemWhereInput[]
  name?: Prisma.StringFilter<"ConceptItem"> | string
  type?: Prisma.EnumCONCEPT_TYPEFilter<"ConceptItem"> | $Enums.CONCEPT_TYPE
  frequency?: Prisma.EnumCONCEPT_FREQUENCYFilter<"ConceptItem"> | $Enums.CONCEPT_FREQUENCY
}

export type ConceptItemUpdateInput = {
  name?: Prisma.StringFieldUpdateOperationsInput | string
  type?: Prisma.EnumCONCEPT_TYPEFieldUpdateOperationsInput | $Enums.CONCEPT_TYPE
  frequency?: Prisma.EnumCONCEPT_FREQUENCYFieldUpdateOperationsInput | $Enums.CONCEPT_FREQUENCY
}

export type EnumCONCEPT_TYPEFieldUpdateOperationsInput = {
  set?: $Enums.CONCEPT_TYPE
}

export type EnumCONCEPT_FREQUENCYFieldUpdateOperationsInput = {
  set?: $Enums.CONCEPT_FREQUENCY
}



export type ConceptItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  name?: boolean
  type?: boolean
  frequency?: boolean
}, ExtArgs["result"]["conceptItem"]>



export type ConceptItemSelectScalar = {
  name?: boolean
  type?: boolean
  frequency?: boolean
}

export type ConceptItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"name" | "type" | "frequency", ExtArgs["result"]["conceptItem"]>

export type $ConceptItemPayload = {
  name: "ConceptItem"
  objects: {}
  scalars: {
    name: string
    type: $Enums.CONCEPT_TYPE
    frequency: $Enums.CONCEPT_FREQUENCY
  }
  composites: {}
}

export type ConceptItemGetPayload<S extends boolean | null | undefined | ConceptItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConceptItemPayload, S>





/**
 * Fields of the ConceptItem model
 */
export interface ConceptItemFieldRefs {
  readonly name: Prisma.FieldRef<"ConceptItem", 'String'>
  readonly type: Prisma.FieldRef<"ConceptItem", 'CONCEPT_TYPE'>
  readonly frequency: Prisma.FieldRef<"ConceptItem", 'CONCEPT_FREQUENCY'>
}
    

// Custom InputTypes
/**
 * ConceptItem without action
 */
export type ConceptItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the ConceptItem
   */
  select?: Prisma.ConceptItemSelect<ExtArgs> | null
  /**
   * Omit specific fields from the ConceptItem
   */
  omit?: Prisma.ConceptItemOmit<ExtArgs> | null
}
