import { Field } from "formik";
import React from "react";
import styled from "styled-components";
import Select from "antd/es/select";

type Props = Record<string, unknown>;

export const FlagField = ({}: Props) => {
    return (
        <Field component={Select}>
            <option value="open_world">Open World</option>
            <option value="character_gated">Character Gating</option>
        </Field>
    );
};

export default FlagField;
