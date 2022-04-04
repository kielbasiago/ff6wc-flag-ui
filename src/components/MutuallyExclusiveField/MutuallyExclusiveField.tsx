import { Field, FieldConfig } from "formik";
import React from "react";
import styled from "styled-components";
import Select from "formik-antd/es/select";

type Props = {
    name: string;
    options: { value: any; label: React.ReactNode }[];
};

const { Option } = Select;

export const MutuallyExclusiveField = ({ name, options }: Props) => {
    return (
        <Select name="mode" style={{ width: "100%" }} placeholder="Game Mode">
            {options.map(({ value, label }) => (
                <Option value={value}>{label}</Option>
            ))}
        </Select>
    );
};

export default MutuallyExclusiveField;
