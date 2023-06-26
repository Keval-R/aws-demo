/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CAUSES } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CAUSESUpdateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type CAUSESUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CAUSESUpdateFormOverridesProps = {
    CAUSESUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CAUSESUpdateFormProps = React.PropsWithChildren<{
    overrides?: CAUSESUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cAUSES?: CAUSES;
    onSubmit?: (fields: CAUSESUpdateFormInputValues) => CAUSESUpdateFormInputValues;
    onSuccess?: (fields: CAUSESUpdateFormInputValues) => void;
    onError?: (fields: CAUSESUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CAUSESUpdateFormInputValues) => CAUSESUpdateFormInputValues;
    onValidate?: CAUSESUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CAUSESUpdateForm(props: CAUSESUpdateFormProps): React.ReactElement;
