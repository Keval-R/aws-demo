import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCAUSES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CAUSES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCAUSES = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CAUSES, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CAUSES = LazyLoading extends LazyLoadingDisabled ? EagerCAUSES : LazyCAUSES

export declare const CAUSES: (new (init: ModelInit<CAUSES>) => CAUSES) & {
  copyOf(source: CAUSES, mutator: (draft: MutableModel<CAUSES>) => MutableModel<CAUSES> | void): CAUSES;
}