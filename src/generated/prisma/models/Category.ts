
/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// @ts-nocheck 
/**
 * This file exports the `Category` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"

/**
 * Model Category
 * 
 */
export type CategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$CategoryPayload>






export type CategoryCompositeListFilter = {
  equals?: Prisma.CategoryObjectEqualityInput[]
  every?: Prisma.CategoryWhereInput
  some?: Prisma.CategoryWhereInput
  none?: Prisma.CategoryWhereInput
  isEmpty?: boolean
  isSet?: boolean
}

export type CategoryOrderByCompositeAggregateInput = {
  _count?: Prisma.SortOrder
}

export type CategoryListCreateEnvelopeInput = {
  set?: Prisma.CategoryCreateInput | Prisma.CategoryCreateInput[]
}

export type CategoryListUpdateEnvelopeInput = {
  set?: Prisma.CategoryCreateInput | Prisma.CategoryCreateInput[]
  push?: Prisma.CategoryCreateInput | Prisma.CategoryCreateInput[]
  updateMany?: Prisma.CategoryUpdateManyInput
  deleteMany?: Prisma.CategoryDeleteManyInput
}

export type CategoryWhereInput = {
  AND?: Prisma.CategoryWhereInput | Prisma.CategoryWhereInput[]
  OR?: Prisma.CategoryWhereInput[]
  NOT?: Prisma.CategoryWhereInput | Prisma.CategoryWhereInput[]
  categoryName?: Prisma.StringFilter<"Category"> | string
  concepts?: Prisma.CategoryConceptCompositeListFilter | Prisma.CategoryConceptObjectEqualityInput[]
}

export type CategoryConceptObjectEqualityInput = {
  conceptName: string
  frequency: $Enums.CONCEPT_FREQUENCY
  plannedRecurringBudgetAmount: number
  recurringBudgetBuckets?: Prisma.BudgetBucketObjectEqualityInput[]
}

export type CategoryConceptCreateInput = {
  conceptName: string
  frequency?: $Enums.CONCEPT_FREQUENCY
  plannedRecurringBudgetAmount: number
  recurringBudgetBuckets?: Prisma.BudgetBucketCreateInput | Prisma.BudgetBucketCreateInput[]
}

export type CategoryUpdateManyInput = {
  where: Prisma.CategoryWhereInput
  data: Prisma.CategoryUpdateInput
}

export type CategoryDeleteManyInput = {
  where: Prisma.CategoryWhereInput
}

export type CategoryUpdateInput = {
  categoryName?: Prisma.StringFieldUpdateOperationsInput | string
  concepts?: Prisma.XOR<Prisma.CategoryConceptListUpdateEnvelopeInput, Prisma.CategoryConceptCreateInput> | Prisma.CategoryConceptCreateInput[]
}



export type CategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  categoryName?: boolean
  concepts?: boolean | Prisma.CategoryConceptDefaultArgs<ExtArgs>
}, ExtArgs["result"]["category"]>



export type CategorySelectScalar = {
  categoryName?: boolean
}

export type CategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"categoryName" | "concepts", ExtArgs["result"]["category"]>
export type CategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $CategoryPayload = {
  name: "Category"
  objects: {}
  scalars: {
    categoryName: string
  }
  composites: {
    concepts: Prisma.$CategoryConceptPayload[]
  }
}

export type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategoryPayload, S>





/**
 * Fields of the Category model
 */
export interface CategoryFieldRefs {
  readonly categoryName: Prisma.FieldRef<"Category", 'String'>
}
    

// Custom InputTypes
/**
 * Category without action
 */
export type CategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Category
   */
  select?: Prisma.CategorySelect<ExtArgs> | null
  /**
   * Omit specific fields from the Category
   */
  omit?: Prisma.CategoryOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.CategoryInclude<ExtArgs> | null
}
