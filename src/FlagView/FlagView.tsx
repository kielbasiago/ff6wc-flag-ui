import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, useField } from "formik";
import Button from "antd/es/button";
import TabsBase from "antd/es/tabs";
import DatePicker from "antd/es/date-picker";
import version from "antd/es/version";
import { tabs, WCGameMode, WCTabs } from "../constants";
import FlagField from "./FlagField";
import * as yup from "yup";

const { TabPane } = TabsBase;

type Props = Record<string, unknown>;

const Tabs = styled(TabsBase)`
    padding: ${(props) => props.theme.spacing(3)};
`;

// const MySelect = ({ label, ...props }: any) => {
//     const [field, meta] = useField(props);
//     return (
//         <div>
//             <label htmlFor={props.id || props.name}>{label}</label>
//             <select {...field} {...props} />
//             {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
//         </div>
//     );
// };

export const FlagView = ({}: Props) => {
    const value = {
        mode: WCGameMode.CHARACTER_GATED,
    };
    const tabValues = Object.values(WCTabs);
    const T = (
        <Tabs defaultActiveKey="0">
            {tabValues.map((tab, idx) => (
                <TabPane key={tab} tab={tab}>
                    {tabs[tab]}
                </TabPane>
            ))}
        </Tabs>
    );
    return (
        <Formik
            initialValues={value}
            onSubmit={(values) => {
                console.log(values);
                debugger;
            }}
        >
            {T}
        </Formik>
    );
};

export default FlagView;
