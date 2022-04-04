import React from "react";
import styled from "styled-components";
import { Field, FieldConfig, FieldProps, useField } from "formik";
import { SelectProps } from "antd/lib/select";
import Select from "formik-antd/es/select";
import Typography from "antd/es/typography";
import { InputOption } from "../../types";

const { Option } = Select;
type Props = { caption?: React.ReactNode } & FieldConfig;

type FormFieldSelectProps = {
    onChange: (val: unknown) => unknown;
    options: InputOption[];
} & Props &
    Omit<SelectProps, "onChange" | "options">;

export const FormFieldSelect = ({ options, name, onChange, ...props }: FormFieldSelectProps) => {
    return (
        <FormField name={name} {...props}>
            {() => (
                <>
                    <Typography>Hello world</Typography>
                    <Select
                        name={name}
                        onChange={(value, options) => {
                            debugger;
                            onChange(value);
                        }}
                    >
                        {options.map((opt) => (
                            <Option key={opt.value} value={opt.value}>
                                {opt.label}
                            </Option>
                        ))}
                    </Select>
                </>
            )}
        </FormField>
    );
};

export const FormField = (props: Props) => {
    const { name, caption } = props;
    const [inputProps, metadata] = useField(name);
    return (
        <>
            <Field {...props} />
            {!caption ? null : (
                <Typography.Paragraph copyable style={{ fontSize: "0.85rem" }}>
                    {caption}
                </Typography.Paragraph>
            )}
        </>
    );
};

export default FormField;
