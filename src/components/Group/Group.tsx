import React from "react";
import styled from "styled-components";
import Card from "antd/es/card";
import { Field, FieldConfig, FieldProps } from "formik";

type Props = React.PropsWithChildren<{}>;

export const Group = ({ children }: Props) => {
    return <Card>{children}</Card>;
};

export default Group;
