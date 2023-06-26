/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CAUSESCreateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type CAUSESCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CAUSESCreateFormOverridesProps = {
    CAUSESCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CAUSESCreateFormProps = React.PropsWithChildren<{
    overrides?: CAUSESCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CAUSESCreateFormInputValues) => CAUSESCreateFormInputValues;
    onSuccess?: (fields: CAUSESCreateFormInputValues) => void;
    onError?: (fields: CAUSESCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CAUSESCreateFormInputValues) => CAUSESCreateFormInputValues;
    onValidate?: CAUSESCreateFormValidationValues;
} & React.CSSProperties>;
export default function CAUSESCreateForm(props: CAUSESCreateFormProps): React.ReactElement;
