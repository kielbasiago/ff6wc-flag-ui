import React from "react";
import styled from "styled-components";
import Switch from "formik-antd/es/switch";

type Props = {
    name: string;
};

export const ToggleField = ({ name }: Props) => {
    return <Switch name={name} />;
};

export default ToggleField;
