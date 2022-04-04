import { Field, FieldConfig } from "formik";
import React from "react";
import styled from "styled-components";
import Select from "formik-antd/es/select";
import { WCGameMode } from "../constants";

type Props = {
    name?: string;
    value?: string;
};

const { Option } = Select;

export const FlagField = ({}: Props) => {
    return (
        <Select name="mode" style={{ width: "100%" }} placeholder="Game Mode">
            <Select.Option value={WCGameMode.OPEN_WORLD}>Open World</Select.Option>
            <Select.Option value={WCGameMode.CHARACTER_GATED}>Character Gated</Select.Option>
        </Select>
    );
};

export default FlagField;
