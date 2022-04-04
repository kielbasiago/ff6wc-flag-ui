import React from "react";
import styled from "styled-components";
import Card from "antd/es/card";
import { Field, FieldConfig, FieldProps } from "formik";
import FormField, { FormFieldSelect } from "../../components/FormField/FormField";
import { WCGameMode } from "../../constants";
import { strToEnum } from "../../utils/strToEnum";

type Props = Record<string, unknown>;

export const Game = ({}: Props) => {
    return (
        <>
            <FormFieldSelect
                onChange={(val) => {
                    debugger;
                }}
                name="mode"
                options={strToEnum([WCGameMode.CHARACTER_GATED, WCGameMode.OPEN_WORLD])}
            />

            <FormField name={"seed"} />
        </>
    );
};

export default Game;
